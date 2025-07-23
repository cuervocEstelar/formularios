// RegisterForm.jsx
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegisterForm.css';
import StepIndicador from './StepIndicator';
import axios from "axios";

const RegisterForm = () => {




  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    //step 1 
    Nombre: '',
    Apellido: '',
    email: '',
    Telefono: '',
    codeArea: '56',
    Rut: '',
    dia: '',
    mes: '',
    ano: '',
    //step 2 
    password: '',
    passwordVerification: '',
    city: '',
    currency: 'CLP', // valor inicial por defecto
    promoCode: '',
    termsAccepted: false,
  });

  // Estado para controlar el paso actual del wizard
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2; // Número total de pasos

  // Función para manejar cambios en los campos del formulario
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};


  // Función para validar RUT chileno
  const validarRut = (rut) => {
    // Si no hay RUT, no es válido
    if (!rut) return false;
    
    // Eliminar puntos y guiones
    const rutLimpio = rut.replace(/[^0-9kK]/g, '');
    
    // Si el RUT está vacío o es muy corto, no es válido
    if (rutLimpio.length < 2) return false;
    
    // Separar cuerpo y dígito verificador
    const cuerpo = rutLimpio.slice(0, -1);
    const dv = rutLimpio.slice(-1).toUpperCase();
    
    // Calcular dígito verificador
    let suma = 0;
    let multiplicador = 2;
    
    // Recorrer el cuerpo de derecha a izquierda
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo[i]) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    
    // Calcular dígito verificador esperado
    const dvEsperado = 11 - (suma % 11);
    let dvCalculado;
    
    if (dvEsperado === 11) dvCalculado = '0';
    else if (dvEsperado === 10) dvCalculado = 'K';
    else dvCalculado = dvEsperado.toString();
    
    // Comparar dígito verificador calculado con el proporcionado
    return dvCalculado === dv;
  };

  // Ir al siguiente paso
  const isStep1Valid = () => {
    return (
      formData.email &&
      formData.Nombre &&
      formData.Apellido &&
      formData.Rut &&
      formData.dia &&
      formData.mes &&
      formData.ano &&
      formData.Telefono
    );
  };

  const isStep2Valid = () => {
    return (
      formData.password &&
      /[a-z]/.test(formData.password) &&
      /[A-Z]/.test(formData.password) &&
      /\d/.test(formData.password) &&
      formData.password.length >= 8 &&
      formData.passwordVerification &&
      formData.password === formData.passwordVerification &&
      formData.city &&
      formData.currency &&
      formData.termsAccepted
    );
  };

  const nextStep = () => {
    if (currentStep === 1 && !isStep1Valid()) {
      // Check which fields are missing in step 1
      const missingFields = [];
      if (!formData.email) missingFields.push('Email');
      if (!formData.Nombre) missingFields.push('Nombre');
      if (!formData.Apellido) missingFields.push('Apellido');
      if (!formData.Rut) missingFields.push('Rut');
      else if (!validarRut(formData.Rut)) missingFields.push('RUT inválido');
      if (!formData.dia) missingFields.push('Día');
      if (!formData.mes) missingFields.push('Mes');
      if (!formData.ano) missingFields.push('Año');
      if (!formData.Telefono) missingFields.push('Teléfono');
      
      console.log("Campos faltantes en Step 1:", missingFields.join(', '));
      toast.error(`Campos faltantes o inválidos: ${missingFields.join(', ')}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: "🚫", // You can customize the icon here - use emoji or custom component
        style: {
          background: "#19203B", // toast background
          color: "#FFFFFF",      // text color
          
          borderRadius: "8px",
          fontFamily: "Inter",
        },
        progressClassName: "toast-progress-bar", // Using a custom class for progress bar styling
      });
      return;
    }

    if (currentStep === 2 && !isStep2Valid()) {
      // Check which fields are missing or invalid in step 2
      const errors = [];
      if (!formData.password) errors.push('Contraseña requerida');
      else {
        if (!/[a-z]/.test(formData.password)) errors.push('Falta letra minúscula en contraseña');
        if (!/[A-Z]/.test(formData.password)) errors.push('Falta letra mayúscula en contraseña');
        if (!/\d/.test(formData.password)) errors.push('Falta número en contraseña');
        if (formData.password.length < 8) errors.push('Contraseña debe tener al menos 8 caracteres');
      }
      if (!formData.passwordVerification) errors.push('Confirmación de contraseña requerida');
      if (formData.password !== formData.passwordVerification) errors.push('Las contraseñas no coinciden');
      if (!formData.city) errors.push('Ciudad requerida');
      if (!formData.termsAccepted) errors.push('Debe aceptar los términos y condiciones');
      console.log("Errores en Step 2:", errors.join(', '));
      toast.error(`Errores: ${errors.join(', ')}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };
  // Volver al paso anterior
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Enviar el formulario
 
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost/FormularioLandingBackend/index.php", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.success) {
      console.log("Registro exitoso");
      // mostrar feedback positivo o redireccionar
    } else {
      console.error("Error del servidor:", response.data.message);
    }
  } catch (error) {
    console.error("Error al enviar datos:", error);
  }
};

  return (
    <div id='registerForm' className="register-container">
      <StepIndicador currentStep={currentStep} totalSteps={totalSteps} />
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <form onSubmit={handleSubmit} className="register-form">
        {/* Renderiza el paso 1 si currentStep es 1 */}
        {currentStep === 1 && (
          <>
            <Step1 formData={formData} onChange={handleChange} />
          </>
        )}

        {/* Renderiza el paso 2 si currentStep es 2 */}
        {currentStep === 2 && (
          <>
            <Step2 formData={formData} onChange={handleChange} />
          </>
        )}

        {/* Navegación entre pasos */}
        <div className="form-navigation">
          {currentStep > 1 && (
            <button className="nav-button nav-button-back" type="button" onClick={prevStep}>
              Ir atrás
            </button>
          )}
          {currentStep < totalSteps ? (
            <button className="nav-button nav-button-next" type="button" onClick={nextStep} >
              Continuar
            </button>
          ) : (
            <button className="nav-button nav-button-submit"  onClick={nextStep} type="submit">
              Crear cuenta
            </button>
          )}
        </div>
      </form>

{currentStep === 1   && (
  <div className='loginTextContainer'> 
    <p className="login-text">
      ¿Ya tienes una cuenta? <a href="https://www.estelarbet.vip/?accounts=%2A&register=%2A">Inicia sesión</a>
    </p>
  </div>
)}
    </div>
  );
};

export default RegisterForm;
