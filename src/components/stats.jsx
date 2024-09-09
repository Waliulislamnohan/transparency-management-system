import React from 'react';

export default function Footer() {
  return (
    <>   
    <div className="stats-container">
    <div className='stats'>
        <div className='stat'>
            <span><strong><u>$25.56 Billion</u></strong></span><br/>
            <span className='amount-des'>in <strong>Reserves</strong> (Aug,2024)</span>
        </div>
        <div className='stat'>
            <span><strong><u>$23.91 Billion</u></strong></span><br/>
            <span className='amount-des'>from <strong>Remittances</strong> (Aug,2024)</span>
        </div>
        <div className='stat'>
            <span><strong><u>9.95%</u></strong></span><br/>
            <span className='amount-des'>of <strong>Inflation</strong> (Aug,2024)</span>
        </div>
    </div>
    </div>
      
    </>
  )
}
