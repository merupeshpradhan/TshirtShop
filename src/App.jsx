import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import New from "./components/New/New";
import NewDrops from "./components/New/NewDrops";
import Allproducts from "./components/AllProducts/Allproducts";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/newDrops" element={<NewDrops />} />
          <Route path="/AllProducts" element={<Allproducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
