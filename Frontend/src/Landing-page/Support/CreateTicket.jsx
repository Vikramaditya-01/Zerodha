import React from 'react';
function CreateTicket() {
    return ( 
        <div className="container my-5">
        {/* Heading */}
        <h4 className="mb-4">To create a ticket, select a relevant topic</h4>
        
        {/* Row 1 */}
        <div className="row mb-4">
          {/* Column 1 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">
              <i className="fas fa-user-circle me-2"></i> Account Opening
            </h5>
            <ul className="list-unstyled">
              <li>Resident individual</li>
              <li>Minor</li>
              <li>Non Resident Indian (NRI) new</li>
              <li>Company, Partnership, HUF and LLP</li>
              <li>Glossary</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">
              <i className="fas fa-id-card me-2"></i> Your Zerodha Account
            </h5>
            <ul className="list-unstyled">
              <li>Your Profile</li>
              <li>Account modification</li>
              <li>Client Master Report (CMR) &amp; Depository Participant (DP) info</li>
              <li>Nomination</li>
              <li>Transfer and conversion of securities</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-md-4">
            <h5 className="mb-3">
              <i className="fas fa-chart-line me-2"></i> Kite
            </h5>
            <ul className="list-unstyled">
              <li>IPO</li>
              <li>Trading FAQs</li>
              <li>Margin Trading Facility (MTF) &amp; Margins</li>
              <li>Market and orders</li>
              <li>Alerts and Nudges</li>
              <li>General help</li>
            </ul>
          </div>
        </div>
  
        {/* Row 2 */}
        <div className="row">
          {/* Column 4 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">
              <i className="fas fa-dollar-sign me-2"></i> Funds
            </h5>
            <ul className="list-unstyled">
              <li>Add money</li>
              <li>Withdraw money</li>
              <li>Bank account details</li>
              <li>eMandates</li>
            </ul>
          </div>
          {/* Column 5 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">
              <i className="fas fa-desktop me-2"></i> Console
            </h5>
            <ul className="list-unstyled">
              <li>Portfolio</li>
              <li>Holdings</li>
              <li>Funds statement</li>
              <li>Reports</li>
              <li>Profile</li>
              <li>SIPs</li>
            </ul>
          </div>
          {/* Column 6 */}
          <div className="col-md-4">
            <h5 className="mb-3">
              <i className="fas fa-coins me-2"></i> Coin
            </h5>
            <ul className="list-unstyled">
              <li>Understanding mutual funds</li>
              <li>Coin app</li>
              <li>Coin web</li>
              <li>Transactions and reports</li>
              <li>National Pension Scheme (NPS)</li>
            </ul>
          </div>
        </div>
      </div>
     );
}

export default CreateTicket;