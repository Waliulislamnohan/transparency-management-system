import React from 'react'
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Stepper from '../components/stepper.jsx';

export default function Process () {

  const allSteps = [
    {
      name: "Upload file",
      Component: () => <div>Upload your document here.</div>,
    },
    {
      name: "Processing file",
      Component: () => <div>Proecessing your file.</div>,
    },
    {
      name: "Review results",
      Component: () => <div>Reviewing the processed file.</div>,
    }
  ]

  return (
    <>
        <Header/>
        <Stepper steps={allSteps}/>
        <Footer/>
    </>
  )
}
