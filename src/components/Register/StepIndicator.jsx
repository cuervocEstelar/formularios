const StepIndicador = ({ pasoActual = 1, totalPasos = 2 }) => {
  const porcentaje = (pasoActual / totalPasos) * 100;
  return (
    <div className="ProgressBarContainer">
      <div className="step-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
        <span className="step-text">{`Paso ${pasoActual} de ${totalPasos}`}</span>
      </div>
    </div>
  );
};

export default StepIndicador