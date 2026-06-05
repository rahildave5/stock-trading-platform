import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/Home/homePage.jsx";
import Signup from ".//landing_page/signup/signUp.jsx";
import About from "./landing_page/About/aboutPage.jsx";
//import Products from "./landing_page/pricing/pricingPage.jsx";
import Pricing from "./landing_page/pricing/pricingPage.jsx";
import Support from "./landing_page/support/supportPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/products" element={<Products />} /> */}
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  </BrowserRouter>,
);
