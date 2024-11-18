import React, { useState, useRef, useEffect } from 'react';

export default function Stepper({ steps = [] }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margin, setMargin] = useState({ marginLeft: 0, marginRight: 0 });
  const stepRef = useRef([]);

  if (!steps.length) {
    return <></>;
  }

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[steps.length - 1].offsetWidth / 2,
    });
  }, [stepRef, steps.length]);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === steps.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => {
      if (prevStep > 1) {
        return prevStep - 1;
      }
      return prevStep; // Prevent going below step 1
    });
  };

  const ActiveComponent = steps[currentStep - 1].Component;
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <>
      <div className="stepper">
        {steps.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step 
                ${currentStep > index + 1 || isComplete ? 'complete' : ''} 
                ${currentStep === index + 1 ? 'active' : ''}`}
            >
              <div className="step-index">
                {currentStep > index + 1 || isComplete ? <span>&#10003;</span> : index + 1}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
            marginLeft: `${margin.marginLeft}px`,
            marginRight: `${margin.marginRight}px`,
          }}
        >
          <div
            className="progress"
            style={{
              width: `${progressPercentage}%`,
            }}
          ></div>
        </div>
      </div>

      <ActiveComponent />

            
      {!isComplete && 
      ( 
      <div className='step-btns'>
      <button className="step-btn" onClick={handlePrev} disabled={currentStep === 1}>Back</button>
      <button className='step-btn' onClick={handleNext} 
      style={{
        backgroundColor: currentStep === steps.length ? '#3C88DA' : '',
        color: currentStep === steps.length ? '#fff' : ''
      }}>{currentStep === steps.length ? "Finish" : "Next"}</button>
      </div>
         )}

    </>
  );
}
