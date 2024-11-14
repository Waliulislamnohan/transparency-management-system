import React, { useState } from 'react'

export default function Stepper ({steps= []}) {

    const [currentStep, setCurrentStep] = useState(1)
    const [isComplete,setIsComplete]  = useState(false)

    if(!steps.length){
        return(<></>)
    }

    const handleNext = () =>{
        setCurrentStep(prevStep => {
            if(prevStep === steps.length){
               setIsComplete(true)
               return prevStep;
            }
            else{
                return prevStep +  1;
            }
        })
    }

    const ActiveComponent = steps[currentStep - 1].Component;
    const progressPercentage = ((currentStep - 1) / steps.length) * 100;

  return (
    <>
        <div className="stepper">
            {steps.map((step,index) => {
           return ( 
                <div key={step.name} className={`step 
                ${currentStep > index+1 || isComplete ? "complete" : ""} 
                ${currentStep === index+1? "active" : ""}`}
                >
                    <div className="step-index">
                    {currentStep > index+1 || isComplete ? <span>&#10003;</span> : index +1 }
                    </div> 
                    <div className="step-name">{step.name}</div>               
                </div>
                )
            })}
            <div className="progress-bar">
                <div className='progress' style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
        
        <ActiveComponent />

       {!isComplete && 
      ( 
      <button className='step-btn' onClick={handleNext}>
        {currentStep === steps.length ? "Finish" : "Next"}
      </button>
         )}
    </>
  )
}