import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Skills from "./Component/Skills";
import About from "./Component/About";
import Project from "./Component/Project";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HeroSection />}></Route>
          <Route exact path="/Skills" element={<Skills />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Project" element={<Project />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
