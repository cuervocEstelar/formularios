import { FaCircleCheck, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const Step2 = ({ formData, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordVerification, setShowPasswordVerification] = useState(false);
  return (
    <>
      {/* Grupo: Contraseña */}
      <div className="inputs-box">
        <label className="form-label">Contraseña</label>
        <div className="password-input-container">
          <input
            className="form-input"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={onChange}
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>
      </div>

      <div className="password-requirements">
        <div className="requirement-item">
          <FaCircleCheck 
            size={20} 
            color={/[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password) ? "#69E9B9" : "#565C66"} 
          />  
          <p className="requirement-text">Incluye letras mayúsculas y minúsculas</p>
        </div>
        <div className="requirement-item">
          <FaCircleCheck 
            size={20} 
            color={/\d/.test(formData.password) ? "#69E9B9" : "#565C66"} 
          />  
          <p className="requirement-text">Al menos 1 número</p>
        </div>
        <div className="requirement-item">
          <FaCircleCheck 
            size={20} 
            color={formData.password.length >= 8 ? "#69E9B9" : "#565C66"} 
          />  
          <p className="requirement-text">Al menos 8 caracteres</p>
        </div>
      </div>

      {/* Grupo: Verificación de contraseña */}
      <div className="inputs-box">
        <label className="form-label">Verificación de contraseña</label>
        <div className="password-input-container">
          <input
            className="form-input"
            type={showPasswordVerification ? "text" : "password"}
            name="passwordVerification"
            value={formData.passwordVerification}
            onChange={onChange}
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowPasswordVerification(!showPasswordVerification)}
          >
            {showPasswordVerification ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>
      </div>

      {/* Grupo: Ciudad */}
      <div className="inputs-box">
        <label className="form-label">Ciudad</label>
        <input
          className="form-input"
          type="text"
          name="city"
          value={formData.city }
          onChange={onChange}
        />
      </div>

      {/* Grupo: Moneda */}
      <div className="inputs-box">
        <label className="form-label">Moneda</label>
        <select
          className="form-input"
          name="currency"
          value={formData.currency }
          onChange={onChange}
        >
          <option value="CLP">CLP</option>
          <option value="USD">USD</option>
      
        </select>
      </div>

      {/* Grupo: Código promocional */}
      <div className="inputs-box">
        <label className="form-label">Código promocional</label>
        <input
          className="form-input"
          type="text"
          name="promoCode"
          value={formData.promoCode }
          onChange={onChange}
        />
      </div>

      {/* Grupo: Términos y condiciones */}
      <div className="inputs-box terms-container">
        <input
          className="checkbox-terms"
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted || false}
          onChange={onChange}
        />
        <label className="form-label-terms">
          Estoy de acuerdo con todos los <b>Términos y condiciones y la Política de privacidad</b> y soy mayor de 18 años.
        </label>
      </div>
 
    </>
  );
};

export default Step2;


// Apellido
// : 
// "salas"
// Nombre
// : 
// "DAVID"
// Rut
// : 
// "18882749-7"
// Telefono
// : 
// "9238918312"
// ano
// : 
// "1994"
// city
// : 
// "santiago"
// codeArea
// : 
// "56"
// currency
// : 
// "CLP"
// dia
// : 
// "11"
// email
// : 
// "davidsalas409@gmail.com"
// mes
// : 
// "10"
// password
// : 
// "Estelarbet2025"
// passwordVerification
// : 
// "Estelarbet2025"
// promoCode
// : 
// "Estelarbet2025"
// termsAccepted
// : 
// true