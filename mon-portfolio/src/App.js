import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Composent/Header";
import Home from "./Composent/home";
import Home1 from "./Composent/Home1";
import Mission from "./Composent/Mission";
import About from "./Composent/About";
import Services from "./Composent/Services";
import Contact from "./Composent/Contact";
import Footer from "./Composent/Footer";
import Copyright from "./Composent/Copyright";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home1" element={<Home1 />} />
          <Route path="/Mission" element={<Mission />} />         
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Copyright />      
      </Router>
    </div>
  );
}

export default App;