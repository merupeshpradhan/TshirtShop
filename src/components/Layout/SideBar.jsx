import React from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { BsDash } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function SideBar({ pathname }) {
  return (
    <>
      <section className="w-[20%] lg:block md:block hidden">
        <div className="">
          <div className=" flex flex-col py-10 gap-8">
            <div className="flex text-base items-center tracking-wider gap-4 ">
              <span className="">Home</span>
              <span>
                <TfiAngleRight />
              </span>
              <span>{pathname}</span>
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex w-full justify-center">
                <span className="text-xl font-normal border-b w-[100%] py-2">
                  Browser By
                </span>
              </div>
              <span className="font-light cursor-pointer">
                {" "}
                <NavLink to={"/AllProducts"}>All Products</NavLink>
              </span>
              <span className="font-light cursor-pointer"><NavLink to={"/men"}>Men</NavLink></span>
              <span className="font-light cursor-pointer">
                <NavLink to={"/new"}>New Drops</NavLink>
              </span>
              <span className="font-light cursor-pointer"><NavLink to={"/women"}>Women</NavLink></span>
            </div>
            <div className="flex flex-col justify-center items-start gap-4 border-b cursor-pointer">
              <div className="flex w-full justify-center">
                <span className="text-xl font-normal border-b w-[100%] py-2">
                  Filter By
                </span>
              </div>
              <div className="flex justify-between w-full items-center">
                <span className="font-thin ml-1">Size</span>
                <span className="mr-1">
                  <BsDash />
                </span>
              </div>
              <span className=" flex items-center  gap-6">
                <input type="checkbox" className="font-thin" />
                <label>Large</label>
              </span>
              <span className=" flex items-center gap-6">
                <input type="checkbox" className="font-thin" />
                <label>Medium</label>
              </span>
              <span className=" flex items-center gap-6 mb-4">
                <input type="checkbox" className="font-thin" />
                <label>Small</label>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default SideBar;
