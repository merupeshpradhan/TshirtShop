import { React, useRef } from "react";
import womenTshirt1 from "../../images/womenTshirt1.webp";
import womenTshirt2 from "../../images/womenTshirt2.webp";
import womenTshirt3 from "../../images/womenTshirt3.webp";
import womenTshirt4 from "../../images/womenTshirt4.webp";
import womenTshirt5 from "../../images/womenTshirt5.webp";
import womenTshirt6 from "../../images/womenTshirt6.webp";
import womenTshirt7 from "../../images/womenTshirt7.webp";
import womenTshirt8 from "../../images/womenTshirt8.webp";
import { motion, useInView } from "framer-motion";

function WomenTshirts() {
  // ref for each div
  const refh1 = useRef(null);
  const refDiv = useRef(null);

  // view hooks for div
  const h1View = useInView(refh1, { once: true });
  const DivView = useInView(refDiv, { once: true });

  const products = [
    { name: "I'm a product", src: womenTshirt6, price: "$15.00" },
    { name: "I'm a product", src: womenTshirt8, price: "$15.00" },
    { name: "I'm a product", src: womenTshirt2, price: "$15.00" },
    { name: "I'm a product", src: womenTshirt7, price: "$15.00" },  
    { name: "I'm a product", src: womenTshirt4, price: "$15.00" },
    { name: "I'm a product", src: womenTshirt1, price: "$15.00" },
    { name: "I'm a product", src: womenTshirt3, price: "$15.00" },
    { name: "I'm a product", src: womenTshirt5, price: "$15.00" },
  ];

  return (
    <>
      <section className="lg:w-[70%] md:w-[70%] w-full px-6 flex flex-col">
        <div className="lg:py-16 md:py-16 py-5 lg:px-5 md:px-5 ">
          <motion.h1
            className="lg:text-5xl md:text-5xl text-2xl font-[700] tracking-wide"
            ref={refh1}
            initial={{ opacity: 0 }}
            animate={{ opacity: h1View ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            Women
          </motion.h1>
        </div>
        <div className="flex justify-center items-center">
          <section className="w-full flex flex-col justify-center">
            <div className="grid flex-col items-center gap-3 grid-rows-4 lg:grid-rows-2 md:grid-rows-2 grid-flow-col lg:gap-10 justify-center">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="cursor-pointer"
                  ref={refDiv}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: DivView ? 1 : 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="overflow-hidden w-full lg:h-72 md:h-56 h-44">
                    <img
                      src={product.src}
                      className="w-full h-full transition duration-300 transform hover:scale-125"
                      alt={product.name}
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-base">{product.name}</p>
                    <p className="text-sm mt-1">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center items-center lg:h-[15vh] mt-5 mb-5">
              <button className="bg-black text-lightyellow px-10 py-2 hover:bg-lightyellow hover:text-black hover:border-2 transition duration-200 ease-out hover:ease-in">
                Shop Now
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default WomenTshirts;
