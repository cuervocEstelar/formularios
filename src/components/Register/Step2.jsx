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

      <label className="form-label">Términos y condiciones</label>
      <input
        className="form-input"
        type="checkbox"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={onChange}
      />
    </>
  )
}

export default Step2