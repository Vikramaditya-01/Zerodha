import React from 'react';
function OpenAccount() {
    return ( 
        <div
    className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 text-center"
    >
      <h1 className="fs-2 text-muted">Open a Zerodha account</h1>
      <p className="mt-3">
      Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      <button className="btn btn-primary mt-3 fs-5" style={{width : "15%" , margin : "0 auto"}}>Sign Up for Free</button>
    </div>
     );
}

export default OpenAccount;