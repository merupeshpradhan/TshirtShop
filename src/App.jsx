import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import New from "./components/New/New";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
