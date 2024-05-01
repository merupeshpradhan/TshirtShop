import React from "react";
import homebaner1 from "../../images/homebaner1.webp";
import homebaner2 from "../../images/homebaner2.webp";
import homebaner3 from "../../images/homebaner3.webp";
import homebaner4 from "../../images/homebaner4.webp";
import product1 from "../../images/product1.webp";
import { MdOutlineElectricBolt } from "react-icons/md";
import { LuMoveRight } from "react-icons/lu";
import { LuMoveLeft } from "react-icons/lu";

function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center py-[5%] ">
        <h1 className="text-5xl font-extrabold lg:mb-1 mb-5">T SHOP</h1>
        <p className="bg-lightyellow px-[5%] py-[0.4%]">
          There's One for Everyone{" "}
        </p>
      </section>
      {/* <section className="flex gap-2 w-full lg:h-[60vh]">
        <div className=" group/item overflow-hidden w-[20%] h-full cursor-pointer group-hover/item:visible">
          <img
            src={homebaner2}
            className="w-full h-full transition duration-300 transform hover:scale-110"
            alt="baner Image"
          ></img>
          <p className="-translate-y-[140%] text-center text-2xl font-thin tracking-widest text-black group/edit invisible group-hover/item:visible">
            Shop Women
          </p>
        </div>
        <div className=" group/item overflow-hidden w-[60%] h-[23vh] lg:h-full cursor-pointer ">
          <img
            src={homebaner1}
            className="w-full h-full transition duration-300 transform hover:scale-110"
            alt="baner Image"
          ></img>
          <p className="-translate-y-[140%] text-center text-2xl font-thin tracking-widest text-black group/edit invisible group-hover/item:visible">
            Shop New
          </p>
        </div>
        <div className=" group/item overflow-hidden w-[20%] h-full cursor-pointer group-hover/item:visible">
          <img
            src={homebaner3}
            className="w-full h-full transition duration-300 transform hover:scale-110"
            alt="baner Image"
          ></img>
          <p className="-translate-y-[140%] text-center text-2xl font-thin tracking-widest text-black group/edit invisible group-hover/item:visible">
            Shop Men
          </p>
        </div>
      </section> */}
      <section className="mt-9">
        <h1 className="text-3xl font-extrabold text-center p-9">New Drops</h1>
        <div className="  grid flex-col items-center gap-3  grid-rows-4 lg:grid-rows-2 md:grid-rows-2 grid-flow-col lg:gap-10 justify-center">
          <div className="cursor-pointer">
            <div className="overflow-hidden w-full lg:h-80 md:h-56 h-44 ">
              <img
                src={product1}
                className="w-full h-full transition duration-300 transform hover:scale-125 "
                alt="image"
              ></img>
            </div>
            <div className="mt-2">
              <p className="text-base">I'm a product</p>
              <p className="text-sm mt-1">$15.00</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="overflow-hidden w-full lg:h-80 md:h-56 h-44 ">
              <img
                src={product1}
                className="w-full h-full transition duration-300 transform hover:scale-125 "
                alt="image"
              ></img>
            </div>
            <div className="mt-2">
              <p className="text-base">I'm a product</p>
              <p className="text-sm mt-1">$15.00</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="overflow-hidden w-full lg:h-80 md:h-56 h-44 ">
              <img
                src={product1}
                className="w-full h-full transition duration-300 transform hover:scale-125 "
                alt="image"
              ></img>
            </div>
            <div className="mt-2">
              <p className="text-base">I'm a product</p>
              <p className="text-sm mt-1">$15.00</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="overflow-hidden w-full lg:h-80 md:h-56 h-44 ">
              <img
                src={product1}
                className="w-full h-full transition duration-300 transform hover:scale-125 "
                alt="image"
              ></img>
            </div>
            <div className="mt-2">
              <p className="text-base">I'm a product</p>
              <p className="text-sm mt-1">$15.00</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="overflow-hidden w-full lg:h-80 md:h-56 h-44 ">
              <img
                src={product1}
                className="w-full h-full transition duration-300 transform hover:scale-125 "
                alt="image"
              ></img>
            </div>
            <div className="mt-2">
              <p className="text-base">I'm a product</p>
              <p className="text-sm mt-1">$15.00</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="overflow-hidden w-full lg:h-80 md:h-56 h-44 ">
              <img
                src={product1}
                className="w-full h-full transition duration-300 transform hover:scale-125 "
                alt="image"
              ></img>
            </div>
            <div className="mt-2">
              <p className="text-base">I'm a product</p>
              <p className="text-sm mt-1">$15.00</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="overflow-hidden w-full lg:h-80 md:h-56 h-44 ">
              <img
                src={product1}
                className="w-full h-full transition duration-300 transform hover:scale-125 "
                alt="image"
              ></img>
            </div>
            <div className="mt-2">
              <p className="text-base">I'm a product</p>
              <p className="text-sm mt-1">$15.00</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="overflow-hidden w-full lg:h-80 md:h-56 h-44 ">
              <img
                src={product1}
                className="w-full h-full transition duration-300 transform hover:scale-125 "
                alt="image"
              ></img>
            </div>
            <div className="mt-2">
              <p className="text-base">I'm a product</p>
              <p className="text-sm mt-1">$15.00</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:h-[15vh] mt-5 mb-5">
          <button className="bg-black text-lightyellow  px-10 py-2 hover:bg-lightyellow hover:text-black hover:border-2 transition duration-200 ease-out hover:ease-in">
            Shop Now
          </button>
        </div>
      </section>
      <section className="lg:h-[90vh] md:h-[50vh] h-full">
        <div className="h-full flex flex-col lg:flex-row md:flex-row">
          <div className="bg-gradient-to-t from-lightyellow to-white lg:w-[70%] md:w-[70%] w-full h-full flex flex-col justify-center lg:gap-4 gap-2 p-5 items-center">
            <span className="lg:text-7xl">
              <MdOutlineElectricBolt />{" "}
            </span>
            <span className="lg:text-xl font-[400]">SALE IS ON</span>
            <span className="lg:text-9xl font-bold tracking-wide">25% OFF</span>
            <span className="lg:text-lg font-thin text-center">
              25% off sitewide using TEES25 at checkout
            </span>
          </div>
          <div className="h-full lg:w-[30%] md:w-[30%] ">
            <img className="md:h-full lg:h-full w-full h-[60vh]" src={homebaner4} alt="image"></img>
          </div>
        </div>
      </section>
      <section>
        <div className="4h-56:h-44 h-32 flex justify-evenly flex-col lg:flex-row md:flex-row p-3 gap-1 items-center ">
          <LuMoveRight className="text-5xl rotate-90 lg:rotate-0 md:rotate-0"/>
          <a className="cursor-pointer">
            <h1 className="underline font-bold tracking-wide text-center lg:text-3xl text-xl">GET 10% OFF YOUR FIRST ORDER!</h1>
          </a>
          <LuMoveLeft className="text-5xl rotate-90 lg:rotate-0 md:rotate-0"/>
        </div>
      </section>
    </>
  );
}

export default Home;
