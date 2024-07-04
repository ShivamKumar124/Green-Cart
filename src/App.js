import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Headergreen from "./Component/Headergreen"
import Navbarg from "./Component/navbargreen";
import SellerSection from "./Component/SellerSection";
import Homegreen from "./Component/Homegreen";
import SustainabilityReportsSection from "./Component/Sustainability";
import EducationSection from "./Component/Educationsection";
import Orders from "./Component/Orders";
import Checkout from "./Component/Checkout";
import Thanks from "./Component/Thanks";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/green"
            element={[<Headergreen />, <Navbarg />, <Homegreen />, <Footer />]}
          />
          <Route
            path="/"
            element={[<Header />, <NavBar />, <Home />, <Footer />]}
          />
          <Route
            path="/seller"
            element={[
              <Headergreen />,
              <Navbarg />,
              <SellerSection />,
              <Footer />,
            ]}
          />
          <Route
            path="/sustainability"
            element={[
              <Headergreen />,
              <Navbarg />,
              <SustainabilityReportsSection />,
              <Footer />,
            ]}
          />

          <Route
            path="/education"
            element={[
              <Headergreen />,
              <Navbarg />,
              <EducationSection />,
              <Footer />,
            ]}
          />
          <Route path="/orders" element={[<Header />, <Navbarg />, <Orders/>]} />
          <Route path="/checkout" element={[<Header />, <Checkout/>, <Footer/>  ]}/>
          <Route path="/dashboard" element={[<Header />, <Navbarg />]} />
          <Route path="/thanks" element={[<Header />, <Thanks/>]}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
