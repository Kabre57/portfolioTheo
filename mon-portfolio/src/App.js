import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Composent/Header";
import Sidebar from "./Composent/Sidebar";
import Home from "./Composent/home";
import About from "./Composent/About";
import Services from "./Composent/Services";
import Contact from "./Composent/Contact";
import Footer from "./Composent/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;