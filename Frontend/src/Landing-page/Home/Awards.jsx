import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Image */}
        <div className="col-6 p-5">
          <img src="Media/images/largestBroker.svg" alt="Largest Broker" />
        </div>

        {/* Right Content */}
        <div className="col-6 p-5 mt-5">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity Derivatives</li>
                <li className="mb-2">Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="mb-2">Stocks and IPOs</li>
                <li className="mb-2">Direct Mutual Funds</li>
                <li className="mb-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <img
            src="Media/images/pressLogos.png"
            alt="Press Logos"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
