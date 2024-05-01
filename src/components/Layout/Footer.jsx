import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <section className="lg:border-t md:border-t flex lg:flex-row md:flex-row flex-col border-black lg:h-[40vh] md:h-[40vh]">
          <div className="flex items-center flex-col lg:w-[40%] md:w-[40.8%] lg:border-r md:h-full border-black bg-black text-white p-3 lg:p-[6px]">
            <div className="flex lg:flex-col flex-col md:flex-col items-center h-full justify-center">
              <h4 className="lg:mb-6 mb-2 text-white text-2xl font-bold">
                T SHOP
              </h4>
              <p className="mb-1 text-sm text-blue-600">info@tshirt.com</p>
              <p className="text-sm">
                <span>Tel : </span>123-542-5432
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-around lg:border-r w-full h-full border-black p-4 ">
            <div className="w-full flex  justify-center">
              <ul className="w-full flex flex-col">
                <li className="text-lg mb-3">Shop</li>
                <li className="text-sm font-normal mb-2 cursor-pointer">New</li>
                <li className="text-sm font-normal mb-2 cursor-pointer">Men</li>
                <li className="text-sm font-normal mb-2 cursor-pointer">
                  Women
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-center">
              <ul className="w-full flex flex-col">
                <li className="text-lg mb-3">Our Store</li>
                <li className="text-sm font-normal mb-2 cursor-pointer">
                  About Us
                </li>
                <li className="text-sm font-normal mb-2 cursor-pointer">
                  Subscribe
                </li>
                <li className="text-sm font-normal mb-2 cursor-pointer">FAQ</li>
              </ul>
            </div>
            <div className="w-full flex justify-center" >
              <ul className="w-full flex flex-col">
                <li className="text-lg mb-3">Terms & Conditions</li>
                <li className="text-sm font-normal mb-2 cursor-pointer">
                  Store Policy
                </li>
                <li className="text-sm font-normal mb-2 cursor-pointer">
                  Shiping & Returns
                </li>
                <li className="text-sm font-normal mb-2 cursor-pointer">
                  Pyment Methods
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex items-center flex-col lg:flex-row md:flex-row">
          <div className="flex  items-center lg:w-[38.6%] md:w-[38.6%] w-full p-8 lg:border-r md:border-r  h-[10vh]  border-b border-t  border-black">
            <div className="flex justify-evenly w-full">
              <span className="text-lg">
                <FaFacebookF />
              </span>
              <span className="text-lg">
                <FaInstagram />
              </span>
              <span className="text-lg">
                <FaPinterestP />
              </span>
              <span className="text-lg">
                <FaYoutube />
              </span>
              <span className="text-lg">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div className=" bg-lightyellow w-full flex  lg:h-[10vh] md:h-[10.8vh] p-4 justify-center items-center border-b border-t">
            <p className=" text-center text-sm">
              &copy; by T Shop.Powerd and secured By{" "}
              <a
                href="https://www.instagram.com/mr_rupesh_._/"
                className="underline underline-offset-1"
              >
                Rupesh Pradhan
              </a>{" "}
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
