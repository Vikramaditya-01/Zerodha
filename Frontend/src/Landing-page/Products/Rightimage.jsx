import React from "react";

function Rightimage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
            <div className="mt-3">
              <a href={learnMore} style={{marginLeft : "10%"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
        <div className="col-md-6 p-5 text-center">
          <img src={imageURL} alt={productName} className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

export default Rightimage;
