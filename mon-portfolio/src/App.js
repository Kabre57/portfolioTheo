import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Composent/Header";
import Home from "./Composent/Home";
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
          <Route path="/Mission" element={<Mission />} />         
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Copyright />      
      </Router>
    </div>
  );
}

export default App;