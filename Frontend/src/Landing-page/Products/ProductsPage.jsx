import React from 'react';
import ProductHeroSection from './ProductHeroSection';
import LeftImage from './LeftImage';
import Rightimage from './Rightimage';
import Univers from './Univers';

function ProductsPage() {
  return (
    <div className="products-page">
      <ProductHeroSection />
      
      <div className="products-content">
        <h2>Our Products</h2>
        <p>Discover our wide range of financial products designed to meet your investment needs.</p>
        
        <div className="products-section">
          <LeftImage />
          <div className="section-content">
            <h3>Trading Solutions</h3>
            <p>Our advanced trading platforms offer seamless execution and real-time market data.</p>
          </div>
        </div>
        
        <div className="products-section">
          <div className="section-content">
            <h3>Investment Tools</h3>
            <p>Powerful tools to help you make informed investment decisions and grow your portfolio.</p>
          </div>
          <Rightimage />
        </div>
        
        <div className="products-universe">
          <h3>Product Universe</h3>
          <Univers />
          <p>Explore our complete range of financial products and services.</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;

