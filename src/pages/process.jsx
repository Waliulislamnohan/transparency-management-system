import React from 'react'
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Stepper from '../components/stepper.jsx';

export default function Process () {

  const allSteps = [
    {
      name: "Upload file",
      Component: () => {
        return <div style={{ height: "30vh"}}>Upload your document here.</div>;
      },
    },
    {
      name: "Processing file",
      Component: () => {
        return <div style={{ height: "30vh" }}>Processing your file.</div>;
      },
    },
    {
      name: "Review results",
      Component: () => {
        return <div style={{ height: "30vh" }}>Reviewing the processed file.</div>;
      },
    },
  ];
  

  return (
    <>
        <Header/>
        <div className="stepper-container">          
        <Stepper steps={allSteps}/>
        </div>
        <Footer/>
    </>
  )
}
