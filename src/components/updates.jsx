import React from 'react';

export default function Updates() {
  return (
    <>
    <div className="updates-container">
    <div className="updates-header">
      Recent Updates
    </div>
    <div className="updates">
      <div className="update">
        <div className="update-title">2024 Reserve update</div>
        <div className="update-date">16 January 2024</div>
        <div className="update-content">
          Get the latest updates on Bangladesh's Foreign Reserves..
        <a href="#" className="read-more">Read More</a>
        </div>
      </div>
      <div className="update">
        <div className="update-title">New Tax Reports</div>
        <div className="update-date">12 January 2024</div>
        <div className="update-content">
          Learn about the newly released tax reports..
        <a href="#" className="read-more">Read More</a>
        </div>
      </div>
      <div className="update">
        <div className="update-title">New Project report</div>
        <div className="update-date">5 January 2024</div>
        <div className="update-content">
          Budgets on the recent mega projects..
        <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}
