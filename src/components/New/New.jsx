import React from "react";

import SideBar from "./SideBar";
import NewDrops from "./NewDrops";

function New() {
  return (
    <>
      <section className="flex justify-evenly">
        <SideBar />
        <NewDrops/>
      </section>
    </>
  );
}

export default New;
