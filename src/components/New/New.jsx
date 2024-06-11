import React from "react";
import NewDrops from "./NewDrops";
import SideBar from "../Layout/SideBar";

function New() {
  return (
    <>
      <section className="flex justify-evenly">
        <SideBar pathname="New Drops"/>
        <NewDrops />
      </section>
    </>
  );
}

export default New;
