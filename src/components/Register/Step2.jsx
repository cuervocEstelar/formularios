const Step2 = ({ formData, onChange }) => {
  return (
    <>
      <label className="form-label">Contraseña</label>
      <input
        className="form-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
      />

      <label className="form-label">Verificación de contraseña</label>
      <input
        className="form-input"
        type="password"
        name="passwordVerification"
        value={formData.passwordVerification}
        onChange={onChange}
      />

      <label className="form-label">Ciudad</label>
      <input
        className="form-input"
        type="text"
        name="city"
        value={formData.city}
        onChange={onChange}
      />

      <label className="form-label">Moneda</label>
      <input
        className="form-input"
        type="text"
        name="currency"
        value={formData.currency}
        onChange={onChange}
      />

      <label className="form-label">Código promocional</label>
      <input
        className="form-input"
        type="text"
        name="promoCode"
        value={formData.promoCode}
        onChange={onChange}
      />
<div className="terms-container">
     <input
        className="checkbox-terms"
        type="checkbox"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={onChange}

      />  <label className="form-label-terms">Estoy de acuerdo con todos los <b>Términos y condiciones y la Política de privacidad</b>  y soy mayor de 18 años.</label>
     
</div>
    </>
  )
}

export default Step2