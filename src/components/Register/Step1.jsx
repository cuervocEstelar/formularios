const Step1 = ({ formData, onChange }) => {
  return (
    <>
      <div className="inputs-box">
        <label className="form-label">Correo electrónico</label>
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
      </div>
      <div className="names-inputs">
        <div className="inputs-box">
          <label className="form-label">Nombre</label>
          <input
            className="form-input"
            type="text"
            name="Nombre"
            value={formData.nombre}
            onChange={onChange}
          />
        </div>

        <div className="inputs-box">
          <label className="form-label">Apellido</label>
          <input
            className="form-input"
            type="text"
            name="Apellido"
            value={formData.apellido}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="inputs-box">
        <label className="form-label">RUT / RUC / DNI</label>
        <input
          className="form-input"
          type="text"
          name="Rut"
          value={formData.rut}
          onChange={onChange}
        />
      </div>

      <div className="inputs-box">
        <label className="form-label">Fecha de nacimiento</label>
        <div className="date-inputs">
          <input
            className="form-input date-input"
            type="text"
            name="dia"
            value={formData.dia}
            onChange={onChange}
          />

          <input
            className="form-input date-input"
            type="text"
            name="mes"
            value={formData.mes}
            onChange={onChange}
          />

          <input
            className="form-input date-input"
            type="text"
            name="ano"
            value={formData.ano}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="inputs-box">
        <label className="form-label">Teléfono</label>
        <div className="phone-input-container">
          <select 
            className="form-select" 
            name="codeArea"
            value={formData.codeArea}
            onChange={onChange}
          >
            <option value="56">+56</option>
            <option value="51">+51</option>
            <option value="57">+57</option>
            <option value="52">+52</option>
          </select>
          <input
            className="form-input phone-input"
            type="tel" 
            name="Telefono"
            value={formData.telefono}
            onChange={onChange}
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="9 1234 56 78"
          />
        </div>
      </div>
    </>
  )
}

export default Step1