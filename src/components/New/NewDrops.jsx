import React from "react";
import product1 from "../../images/product1.webp";

function NewDrops() {
  return (
    <>
      <section className="lg:w-[70%] md:w-[70%] w-full px-6 flex flex-col">
        <div className="lg:py-16 md:py-16 py-5 lg:px-5 md:px-5 ">
          <h1 className="lg:text-5xl md:text-5xl text-2xl font-[700] tracking-wide">New Drops</h1>
        </div>
        <div className="flex justify-center items-center">
          <section className="w-full flex flex-col justify-center">
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
        </div>
      </section>
    </>
  );
}

export default NewDrops;
