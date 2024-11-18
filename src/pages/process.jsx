import React from 'react'
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Stepper from '../components/stepper.jsx';
import Upload from '../components/Upload.jsx';

export default function Process () {

  const allSteps = [
    {
      name: "Upload file",
      Component: () => {
        return (
        <div className='step-content .upload-page-container'>
          <Upload/>
        </div>
      )
      },
    },
    {
      name: "Processing file",
      Component: () => {
        return <div className='step-content'>Processing your file.</div>;
      },
    },
    {
      name: "Review results",
      Component: () => {
        return <div className='step-content'>Reviewing the processed file.</div>;
      },
    },
  ];
  

  return (
    <>
        <Header/>
        <div className="stepper-container">          
        <h1 className='stepper-title'>Evaluate your document</h1>
        <Stepper steps={allSteps}/>
        </div>
        <Footer/>
    </>
  )
}
