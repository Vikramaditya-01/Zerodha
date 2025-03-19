import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-4">
          <h1 className="mt-3">Unbeatable Pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-primary fw-bold">
            See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer */}
        <div className="col-2"></div>

        {/* Right Section */}
        <div className="col-6 mt-5">
          <div className="row text-center">
            <div className="col p-3 border">
                <h1 className="mb-3">₹0</h1>
                <p>Free equity delivery and <br/>direct mutual funds </p>
            </div>
            <div className="col p-3 border">
                <h1 className="mb-3">₹20</h1>
                <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;