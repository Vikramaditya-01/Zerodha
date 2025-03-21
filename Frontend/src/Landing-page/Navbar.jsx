import React from "react";

function Navbar() {
  return (
   
      <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="Media/images/logo.svg" alt="logo" style={{width:'30%'}} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                 Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Support
                </a>
              </li>
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;