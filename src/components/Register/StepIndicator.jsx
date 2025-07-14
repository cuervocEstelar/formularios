const StepIndicador = ({ currentStep, totalSteps }) => {

  
  return (
    <>
    <div className="ProgressBarContainer">
      <div className="step-container">
        <div className="progress-bar">
           <div className="progress-fill"/> 
        </div>
      </div>
      <div className="step-container">
        <div className="progress-bar">
          {currentStep >= 2 && <div className="progress-fill"/> }
        </div>
      </div>
    </div>

 <span className="step-text">{`Paso ${currentStep} de ${totalSteps}`}</span>
   <h2 className="register-title">Regístrate</h2>
  </>
  );
};

export default StepIndicador