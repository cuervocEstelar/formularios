// RegisterForm.jsx
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

import './RegisterForm.css';
import StepIndicador from './StepIndicator';

const RegisterForm = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    codeArea: '56',
    rut: '',
    dia: '',
    mes: '',
    ano: ''
  });

  // Estado para controlar el paso actual del wizard
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2; // Número total de pasos

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name.toLowerCase()]: value }));
  };

  // Ir al siguiente paso
  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  // Volver al paso anterior
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí podrías hacer un fetch/axios a tu backend
  };

  return (
    <div className="register-container">
      <StepIndicador currentStep={currentStep}/>
      <h2 className="register-title">Regístrate</h2>

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
              Atrás
            </button>
          )}
          {currentStep < totalSteps ? (
            <button className="nav-button nav-button-next" type="button" onClick={nextStep}>
              Siguiente
            </button>
          ) : (
            <button className="nav-button nav-button-submit" type="submit">
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
