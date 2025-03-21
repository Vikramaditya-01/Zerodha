import React from "react";
import ProductHeroSection from "./ProductHeroSection";
import LeftImage from "./LeftImage";
import Rightimage from "./Rightimage";
import Univers from "./Univers";

function ProductsPage() {
  return (
    <>
      <ProductHeroSection />
      <LeftImage
        imageURL="Media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Rightimage
        imageURL="Media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftImage
        imageURL="Media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore="Coin"
        googlePlay=""
        appStore=""
      />
      <Rightimage
        imageURL="Media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftImage
        imageURL="Media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        googlePlay=""
        appStore=""
      />
      <p className="text-center text-gray-500 fs-5 mt-10">
        Want to know more about our technology stack? Check out the{" "}
        <a href="https://zerodha.tech/">Zerodha.tech</a> blog.
      </p>
      <Univers />
    </>
  );
}

export default ProductsPage;
