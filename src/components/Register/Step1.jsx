const Step1 = ({ formData, onChange }) => {
  // Función para validar RUT chileno (formato básico)
  const validarRut = (rut) => {
    // Eliminar puntos y guiones, permitir números y K
    const rutLimpio = rut.replace(/[^0-9kK]/g, '');
    
    // Si el RUT está vacío o es muy corto, no es válido
    if (rutLimpio.length < 2) return false;
    
    // Separar cuerpo y dígito verificador
    const cuerpo = rutLimpio.slice(0, -1);
    const dv = rutLimpio.slice(-1).toUpperCase();
    
    // Verificar que el cuerpo contenga solo números
    if (!/^[0-9]+$/.test(cuerpo)) return false;
    
    // Verificar que el dígito verificador sea válido (0-9 o K)
    if (!/^[0-9K]$/.test(dv)) return false;
    
    // Verificar longitud mínima del cuerpo (al menos 7 dígitos)
    if (cuerpo.length < 7) return false;
    
    return true;
  };
  
  // Función para formatear RUT (agregar guion)
  const formatearRut = (rut) => {
    // Eliminar puntos y guiones, permitir números y K
    let rutLimpio = rut.replace(/[^0-9kK]/g, '');
    
    // Si el RUT está vacío, retornar vacío
    if (rutLimpio.length === 0) return '';
    
    // Separar cuerpo y dígito verificador
    const dv = rutLimpio.slice(-1).toUpperCase();
    const cuerpo = rutLimpio.slice(0, -1);
    
    // Retornar RUT formateado
    return `${cuerpo}-${dv}`;
  };
  
  // Manejador personalizado para el campo RUT
  const handleRutChange = (e) => {
    const { value } = e.target;
    const rutFormateado = formatearRut(value);
    
    // Crear un evento sintético para mantener la consistencia con onChange
    const syntheticEvent = {
      target: {
        name: 'Rut',
        value: rutFormateado,
        type: 'text'
      }
    };
    
    onChange(syntheticEvent);
  };
  return (
    <>
      <div className="inputs-box">
        <label className="form-label">Correo electrónico</label>
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email || ''}
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
            value={formData.apellido }
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
          value={formData.Rut || ''}
          onChange={handleRutChange}
          placeholder="12345678-9"
        />
        {formData.Rut && formData.Rut.includes('-') && !validarRut(formData.Rut) && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
            RUT inválido. Verifique el número ingresado.
          </div>
        )}
      </div>

      <div className="inputs-box">
        <label className="form-label">Fecha de nacimiento</label>
        <div className="date-inputs">
          <input
            className="form-input date-input"
            type="number"
            name="dia"
            placeholder="DD"
            value={formData.dia }
            onChange={onChange}
          />

           {/* Mes */}
  <select
    className="form-select date-input"
    name="mes"
    value={formData.mes}
    onChange={onChange}
  >
    <option value="">Mes</option>
    {[
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ].map((mes, i) => (
      <option key={i + 1} value={i + 1}>
        {mes}
      </option>
    ))}
  </select>

          <input
            className="form-input date-input"
            type="number"
            name="ano"
            placeholder="AAAA"
            value={formData.ano || ''}
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
            value={formData.codeArea || ''}
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
            value={formData.telefono }
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