import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Composent/Header";
import Home from "./Composent/Home";
import ScrollIndicator from "./Composent/ScrollIndicator";
import Mission from "./Composent/Mission";
import About from "./Composent/About";
import Services from "./Composent/Services";
import Blog from "./Composent/Blog";
import Faqs from "./Composent/Faqs";
import PrivacyTerms from "./Composent/PrivacyTerms";
import Team from "./Composent/Team";
import Contact from "./Composent/Contact";
import Footer from "./Composent/Footer";
import Copyright from "./Composent/Copyright";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="header-spacing" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/PrivacyTerms" element={<PrivacyTerms />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Copyright />
        <ScrollIndicator />
      </Router>
    </div>
  );
}

export default App;