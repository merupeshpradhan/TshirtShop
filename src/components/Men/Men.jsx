import React from "react";
import SideBar from "../Layout/SideBar";
import MenTshirts from "./MenTshirts";

function Men() {
  return (
    <section className="flex justify-evenly">
      <SideBar pathname="Men"/>
      <MenTshirts />
    </section>
  );
}

export default Men;
