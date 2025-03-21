import React from "react";
function AboutHeroSection() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-2">
        <h1 className="fs-3 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top text-muted fs-6" style={{lineHeight: "2.5" , fontSize: "1.2rem"}}>
        <div className="col-6 p-5 mr-5"> 
          <p>
            We kick-started operations on the{" "}
            <strong>15th of August, 2010</strong> with the goal of breaking all
            barriers that traders and investors face in India in terms of cost,
            support, and technology. We named the company{" "}
            <strong>Zerodha</strong>, a combination of <strong>Zero</strong> and{" "}
            <strong>"Rodha"</strong>, the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the <strong>biggest stock broker in India.</strong>
          </p>
          <p>
            Over <strong>1+ Crore clients</strong> place millions of orders
            every day through our powerful ecosystem of investment platforms,
            contributing over{" "}
            <strong>15% of all Indian retail trading volumes.</strong>
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className="text-primary">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="#" className="text-primary">
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="#" className="text-primary">
              saying about us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHeroSection;
