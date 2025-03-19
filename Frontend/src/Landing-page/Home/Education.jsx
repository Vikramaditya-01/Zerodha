import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
            <img src="Media/images/education.svg" alt="education" style={{width:"70%"}}/>
        </div>

        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market educator</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education platform,
            covering everything from the basics to advanced trading strategies.
          </p>
          <a href="#" className="text-primary fw-bold">
            Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" className="text-primary fw-bold">
            Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;