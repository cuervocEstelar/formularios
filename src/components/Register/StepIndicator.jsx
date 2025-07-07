
import React from "react";

const StepIndicador = ({ currentStep, totalPasos = 2 }) => {



  return (
    <>

      <div className="step-container">

        <div className="ProgressBarContainer">
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>


          <div className="progress-bar">
            {currentStep === 2 && (
              <div className="progress-fill" />
            )}

          </div>

        </div>
        <span className="step-text">{`Paso ${currentStep} de ${totalPasos}`}</span>
      </div>
    </>
  );
};

export default StepIndicador