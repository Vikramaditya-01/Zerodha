import React from "react";

function HomeHeroSection() {
  return (
    <div
    className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 text-center"
    style={{ minHeight: "100vh" }}
    >
      <div className="row">
        <img src="Media/images/homeHero.png" className="mb-5" />
      </div>
      <h1 className="mt-5">Invest In Everything</h1>
      <p className="mt-3">
        From Stocks and Options to Futures and Forex, Invest in Everything with
        a single platform.
      </p>
      <button className="btn btn-primary mt-3 fs-5" style={{width : "15%" , margin : "0 auto"}}>Sign Up</button>
    </div>
  );
}

export default HomeHeroSection;
