import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function navTogle() {
    setIsOpen(!isOpen);
  }

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <section
        className={`bg-black text-white ${isOpen ? "invisible" : "visible"}`}
      >
        <p className="text-base p-2 text-center font-thin tracking-widest">
          Sale is on! 25% off sitewide using TEES25 at checkout
        </p>
      </section>
      <section className="lg:h-20 md:h-[50px] h-[100%] w-[100%]">
        <nav className="flex justify-between items-center h-full lg:border md:border bg-lightyellow lg:bg-white md:bg-white">
          <span
            className={`lg:w-[15%] md:w-[15%] w-[30%] h-full ${
              isOpen ? "hidden" : "flex"
            } items-center lg:border-r-2 md:border-r-2 bg-lightyellow p-3 lg:text-2xl md:text-lg text-lg lg:py-[7px] lg:font-extrabold md:font-extrabold font-medium justify-center`}
          >
            <NavLink to={"/"}> T SHOP</NavLink>
          </span>
          <ul className="lg:flex md:flex h-full items-center w-[50%] hidden lg:ml-[22%] md:ml-[40%]">
            <li
              className={`border-r-2 lg:py-[3.4%] lg:px-[10%] md:py-[2.8%] md:px-[6%] hover:bg-black hover:text-lightyellow transition duration-300 ease-in-out cursor-pointer ${
                isActive("/new") ? "bg-black text-lightyellow" : ""
              }`}
            >
              <NavLink
                to={"/new"}
                className="py-3 px-5"
              >
                New
              </NavLink>
            </li>
            <li
              className={`border-r-2 lg:py-[3.4%] lg:px-[10%] md:py-[2.8%] md:px-[6%] hover:bg-black hover:text-lightyellow transition duration-300 ease-in-out cursor-pointer ${
                isActive("/women") ? "bg-black text-lightyellow" : ""
              }`}
            >
              <NavLink
                to={"/women"}
                className="py-3 px-5"
              >
                Women
              </NavLink>
            </li>
            <li
              className={`border-r-2 lg:py-[3.4%] lg:px-[10%] md:py-[2.8%] md:px-[6%] hover:bg-black hover:text-lightyellow transition duration-300 ease-in-out cursor-pointer ${
                isActive("/men") ? "bg-black text-lightyellow" : ""
              }`}
            >
              <NavLink
                to={"/men"}
                className="py-3 px-5"
              >
                Men
              </NavLink>
            </li>
            <li className="flex w-full items-center justify-center gap-4">
              <FaUserCircle className="lg:text-3xl md:text-lg lg:ml-4" />{" "}
              <span className="hover:opacity-75 cursor-pointer lg:text-xl">
                Log In
              </span>
              <GiShoppingBag className="lg:text-3xl md:text-lg" />
            </li>
          </ul>
          <div className="">
            <div
              className={`lg:hidden md:hidden flex h-full justify-end py-[15px] px-5 ${
                isOpen ? "bg-white" : "bg-lightyellow"
              } `}
            >
              <span
                className={`flex w-full items-center ${
                  isOpen ? "visible" : "invisible"
                }  justify-center gap-4`}
              >
                <FaUserCircle className="text-lg" />
                <span className="hover:opacity-75 text-lg cursor-pointer mb-1">
                  Log In
                </span>
              </span>
              <span>
                {isOpen ? (
                  <ImCross
                    className="text-2xl mr-3 cursor-pointer"
                    onClick={navTogle}
                  />
                ) : (
                  <GiHamburgerMenu
                    className="text-3xl mr-3 cursor-pointer"
                    onClick={navTogle}
                  />
                )}
              </span>
            </div>
            <ul
              className={`items-center w-[100vw] lg:hidden md:hidden flex-col p-5 gap-10 bg-white h-[100vh] ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              <li
                className={`hover:bg-black hover:text-lightyellow transition duration-300 ease-in-out cursor-pointer py-3 px-14 font-bold ${
                  isActive("/new") ? "bg-black text-lightyellow" : ""
                }`}
              >
                <NavLink
                  to={"/new"}
                  className="py-3 px-5"
                  onClick={navTogle}
                >
                  New
                </NavLink>
              </li>
              <li
                className={`hover:bg-black hover:text-lightyellow transition duration-300 ease-in-out cursor-pointer py-3 px-14 font-bold ${
                  isActive("/women") ? "bg-black text-lightyellow" : ""
                }`}
              >
                <NavLink
                  to={"/women"}
                  className="py-3 px-5"
                  onClick={navTogle}
                >
                  Women
                </NavLink>
              </li>
              <li
                className={`hover:bg-black hover:text-lightyellow transition duration-300 ease-in-out cursor-pointer py-3 px-14 font-bold ${
                  isActive("/men") ? "bg-black text-lightyellow" : ""
                }`}
              >
                <NavLink
                  to={"/men"}
                  className="py-3 px-5"
                  onClick={navTogle}
                >
                  Men
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
