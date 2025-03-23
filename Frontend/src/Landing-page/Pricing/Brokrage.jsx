import React from 'react';
function Brokrage() {
    return ( 
        <div className="container mt-4 ">
      <div className="row border-top mt-5"> 
        <div className="col-md-8 mt-5">
          <h4 className="text-primary">Brokerage calculator</h4>
          <ul className="list-unstyled mt-3 text-muted fs-8">
            <li>
              <strong>Call & Trade and RMS auto-squareoff:</strong> Additional charges of ₹50 + GST per order.
            </li>
            <li className="mt-2 fs-8">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mt-2 fs-8">
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mt-2 fs-8">
              <strong>For NRI account (non-PIS):</strong> 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li className="mt-2 fs-8">
              <strong>For NRI account (PIS):</strong> 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li className="mt-2 fs-8">
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-md-4 text-primary mt-5">
          <h5>List of charges</h5>
        </div>
      </div>
    </div>
     );
}

export default Brokrage;