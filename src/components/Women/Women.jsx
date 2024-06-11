import React from "react";
import SideBar from "../Layout/SideBar";
import WomenTshirts from "./WomenTshirts";

function Women() {
  return (
    <section className="flex justify-evenly">
      <SideBar pathname="Women"/>
      <WomenTshirts />
    </section>
  );
}

export default Women;
