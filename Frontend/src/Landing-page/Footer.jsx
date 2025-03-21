import React from 'react';
function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }} role="contentinfo">
      <div className="container border-top mt-5 pt-5">
        <div className="row mt-5">
          <div className="col-md-3">
            <img 
              src="Media/images/logo.svg" 
              alt="Zerodha logo" 
              style={{ width: "50%" }} 
            />
            <p>&copy; 2010 - {new Date().getFullYear()}, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#about">About</a></li>
              <li><a className="footer-link" href="#products">Products</a></li>
              <li><a className="footer-link" href="#pricing">Pricing</a></li>
              <li><a className="footer-link" href="#referral-programme">Referral Programme</a></li>
              <li><a className="footer-link" href="#careers">Careers</a></li>
              <li><a className="footer-link" href="#zerodha-tech">Zerodha.tech</a></li>
              <li><a className="footer-link" href="#open-source">Open Source</a></li>
              <li><a className="footer-link" href="#press-media">Press & Media</a></li>
              <li><a className="footer-link" href="#zerodha-cares">Zerodha Cares (CSR)</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#contact-us">Contact Us</a></li>
              <li><a className="footer-link" href="#support-portal">Support Portal</a></li>
              <li><a className="footer-link" href="#z-connect-blog">Z-Connect Blog</a></li>
              <li><a className="footer-link" href="#list-of-charges">List of Charges</a></li>
              <li><a className="footer-link" href="#downloads-resources">Downloads & Resources</a></li>
              <li><a className="footer-link" href="#videos">Videos</a></li>
              <li><a className="footer-link" href="#market-overview">Market Overview</a></li>
              <li><a className="footer-link" href="#file-complaint">How to File a Complaint?</a></li>
              <li><a className="footer-link" href="#complaint-status">Complaint Status</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#open-account">Open an Account</a></li>
              <li><a className="footer-link" href="#fund-transfer">Fund Transfer</a></li>
              <li><a className="footer-link" href="#60-days-challenge">60 Days Challenge</a></li>
            </ul>
          </div>
        </div>
        <div className="text-muted mt-5" style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633. CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238.
          </p>
          <p>
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, and for DP related issues, write to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on the SCORES portal. Mandatory details include Name, PAN, Address, Mobile Number, and E-mail ID. Benefits: Effective communication and speedy grievance redressal.
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism.
          </p>
          <p>
            Investments in the securities market are subject to market risks; read all related documents carefully before investing.
          </p>
          <p>
            Attention Investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker/depository participant to receive OTPs directly from the depository on your registered contacts. 3) Check your consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive transaction details directly from the Exchange on your registered contacts at the end of the day. KYC is a one-time exercise—once done through a SEBI registered intermediary (broker, DP, Mutual Fund, etc.), you need not repeat the process with another intermediary."
          </p>
          <p>
            Dear Investor, if subscribing to an IPO, there is no need to issue a cheque. Instead, write your bank account number and sign the IPO application form to authorize payment in case of allotment. If not allotted, the funds remain in your bank account. As a business, we do not provide stock tips, nor have we authorized anyone to trade on your behalf. If you encounter anyone claiming affiliation with Zerodha offering such services, please create a ticket <a href="#ticket">here</a>.
          </p>
        </div>
        <div className="row mt-4"> 
          <div className="col text-center">
            <ul className="list-inline footer-bottom-links">
              <li className="list-inline-item"><a className="footer-link" href="#nse">NSE</a></li>
              <li className="list-inline-item"><a className="footer-link" href="#bse">BSE</a></li>
              <li className="list-inline-item"><a className="footer-link" href="#mcx">MCX</a></li>
              <li className="list-inline-item"><a className="footer-link" href="#terms">Terms &amp; Conditions</a></li>
              <li className="list-inline-item"><a className="footer-link" href="#policies">Policies &amp; Procedures</a></li>
              <li className="list-inline-item"><a className="footer-link" href="#privacy">Privacy Policy</a></li>
              <li className="list-inline-item"><a className="footer-link" href="#disclosure">Disclosure</a></li>
              <li className="list-inline-item"><a className="footer-link" href="#investor-attention">For Investor's Attention</a></li>
              <li className="list-inline-item"><a className="footer-link" href="#investor-charter">Investor Charter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
