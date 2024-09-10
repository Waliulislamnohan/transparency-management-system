import React, { useEffect } from 'react';
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

export default function Budgets() {

  useEffect(()=>{
    document.title = "Budgets and Operations"
  })

  return (
    <>
      <Header/>
      <main style={{ height: '67vh' }}>
      </main>
      <Footer/>
    </>
  )
}

