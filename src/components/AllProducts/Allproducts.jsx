import React from "react";
import SideBar from "../Layout/SideBar";
import Products from "./Products";


function Allproducts() {
  return (
    <section className="flex justify-evenly">
      <SideBar pathname="All Products"/>
      <Products/>
    </section>
  );
}

export default Allproducts;
