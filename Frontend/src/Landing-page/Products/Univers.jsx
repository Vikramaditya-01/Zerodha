import React from 'react';

function Univers() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
                <h1 className='fs-3 mt-5'>The Zerodha Universe</h1>
                <p className="mt-3 mb-5 fs-6">
                    Extend your trading and investment experience even further with our partner platforms
                </p>

                {/** Reusable card format */}
                {[
                    { img: "Media/images/zerodhaFundhouse.png", text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals." },
                    { img: "Media/images/sensibullLogo.svg", text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more." },
                    { img: "https://zerodha.com/static/images/partners/tijori.svg", text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more." },
                    { img: "Media/images/streakLogo.png", text: "Systematic trading platform that allows you to create and backtest strategies without coding." },
                    { img: "Media/images/smallcaseLogo.png", text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs." },
                    { img: "Media/images/dittoLogo.png", text: "Personalized advice on life and health insurance. No spam and no mis-selling." }
                ].map((item, index) => (
                    <div key={index} className='col-lg-4 col-md-6 col-sm-12 p-3 d-flex align-items-stretch'>
                        <div className="partner-card d-flex flex-column align-items-center text-center">
                            <img src={item.img} alt="Partner Logo" className="partner-logo mb-3" />
                            <p className="text-muted text-small">{item.text}</p>
                        </div>
                    </div>
                ))}
                <button className="btn btn-primary mt-3 fs-5" style={{width : "15%" , margin : "0 auto"}}>Sign Up for Free</button>
            </div>
        </div>
    );
}

export default Univers;
