const Step2 = ({ formData, onChange }) => {
  return (
    <>
      {/* Grupo: Contraseña */}
      <div className="inputs-box">
        <label className="form-label">Contraseña</label>
        <input
          className="form-input"
          type="password"
          name="password"
          value={formData.password || ''}
          onChange={onChange}
        />
      </div>

      {/* Grupo: Verificación de contraseña */}
      <div className="inputs-box">
        <label className="form-label">Verificación de contraseña</label>
        <input
          className="form-input"
          type="password"
          name="passwordVerification"
          value={formData.passwordVerification || ''}
          onChange={onChange}
        />
      </div>

      {/* Grupo: Ciudad */}
      <div className="inputs-box">
        <label className="form-label">Ciudad</label>
        <input
          className="form-input"
          type="text"
          name="city"
          value={formData.city || ''}
          onChange={onChange}
        />
      </div>

      {/* Grupo: Moneda */}
      <div className="inputs-box">
        <label className="form-label">Moneda</label>
        <select
          className="form-input"
          name="currency"
          value={formData.currency || ''}
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
          value={formData.promoCode || ''}
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
