const Step2 = ({ formData, onChange }) => {
  return (
    <>
      <label className="form-label">Contraseña</label>
      <input
        className="form-input"
        type=""
        name=""
        value={formData.nombre}
        onChange={onChange}
      />

      <label className="form-label">Verificación de contraseña</label>
      <input
        className="form-input"
        type=""
        name=""
        value={formData.email}
        onChange={onChange}
      />

      <label className="form-label">Ciudad</label>
      <input
        className="form-input"
        type=""
        name=""
        value={formData.email}
        onChange={onChange}
      />

      <label className="form-label">Moneda</label>
      <input
        className="form-input"
        type=""
        name=""
        value={formData.email}
        onChange={onChange}
      />

      <label className="form-label">Código promocional</label>
      <input
        className="form-input"
        type=""
        name=""
        value={formData.email}
        onChange={onChange}
      />

      <label className="form-label"></label>
      <input
        className="form-input"
        type=""
        name=""
        value={formData.email}
        onChange={onChange}
      />
    </>
  )
}

export default Step2