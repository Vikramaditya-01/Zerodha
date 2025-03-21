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
      <Rightimage />
      <Univers />
    </>
  );
}

export default ProductsPage;
