import React, { useEffect } from "react";
import Header from "../components/header.jsx";
import Updates from "../components/updates.jsx";
import Footer from "../components/footer.jsx";
import BarCh from "../components/barChart.jsx";
import PieCh from "../components/pieChart.jsx";

export default function Budgets() {
  useEffect(() => {
    document.title = "Budgets and Operations";
  });

  return (
    <>
      <Header />
      <div className="budget-main">
        <Updates />
        <div className="chart">
          <BarCh />
        </div>
      </div>
      <PieCh />
      <Footer />
    </>
  );
}
