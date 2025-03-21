import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Landing-page/Home/Homepage";
import Signup from "./Landing-page/Signup/Signup";
import AboutPage from "./Landing-page/About/AboutPage";
import PricingPage from "./Landing-page/Pricing/pricingPage";
import ProductsPage from "./Landing-page/Products/ProductsPage";
import SupportPage from "./Landing-page/Support/SupportPage";
import Navbar from "./Landing-page/Navbar";
import Footer from "./Landing-page/Footer";
import NotFound from "./Landing-page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
