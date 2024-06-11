import { React, useRef } from "react";
import { motion, useInView } from "framer-motion";
import homebaner1 from "../../images/homebaner1.webp";
import homebaner2 from "../../images/homebaner2.webp";
import homebaner3 from "../../images/homebaner3.webp";
import homebaner4 from "../../images/homebaner4.webp";
import product1Image from "../../images/product1.webp";
import { MdOutlineElectricBolt } from "react-icons/md";
import { LuMoveRight, LuMoveLeft } from "react-icons/lu";

function Home() {
  // Create refs for each product item
  const product1 = useRef(null);
  const product2 = useRef(null);
  const product3 = useRef(null);
  const product4 = useRef(null);
  const product5 = useRef(null);
  const product6 = useRef(null);
  const product7 = useRef(null);
  const product8 = useRef(null);

  const isProductView1 = useInView(product1, { once: true });
  const isProductView2 = useInView(product2, { once: true });
  const isProductView3 = useInView(product3, { once: true });
  const isProductView4 = useInView(product4, { once: true });
  const isProductView5 = useInView(product5, { once: true });
  const isProductView6 = useInView(product6, { once: true });
  const isProductView7 = useInView(product7, { once: true });
  const isProductView8 = useInView(product8, { once: true });

  const products = [
    { ref: product1, isInView: isProductView1 },
    { ref: product2, isInView: isProductView2 },
    { ref: product3, isInView: isProductView3 },
    { ref: product4, isInView: isProductView4 },
    { ref: product5, isInView: isProductView5 },
    { ref: product6, isInView: isProductView6 },
    { ref: product7, isInView: isProductView7 },
    { ref: product8, isInView: isProductView8 },
  ];

  // Refs for each span
  const span1 = useRef(null);
  const span2 = useRef(null);
  const span3 = useRef(null);
  const span4 = useRef(null);

  // UseInView hooks for each span
  const inView1 = useInView(span1, { triggerOnce: true });
  const inView2 = useInView(span2, { triggerOnce: true });
  const inView3 = useInView(span3, { triggerOnce: true });
  const inView4 = useInView(span4, { triggerOnce: true });

  //refs for arrow
  const arrow1 = useRef(null);
  const arrow2 = useRef(null);

  //arrowView Hooks for arrows
  const arrowView1 = useInView(arrow1, { once: true });
  const arrowView2 = useInView(arrow2, { once: true });

  return (
    <>
      <section className="flex flex-col justify-center items-center py-[5%] ">
        <h1 className="text-5xl font-extrabold lg:mb-1 mb-5">T SHOP</h1>
        <motion.p
          className="px-[5%] py-[0.4%] bg-lightyellow"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          There's One for Everyone
        </motion.p>
      </section>
      <section className="flex gap-2 w-full lg:h-[65vh]">
        <div className="group/item overflow-hidden w-[30%] h-full cursor-pointer group-hover/item:visible">
          <img
            src={homebaner2}
            className="w-full h-full transition duration-300 transform hover:scale-110"
            alt="banner Image"
          ></img>
          <p className="-translate-y-[140%] text-center text-2xl font-thin tracking-widest text-black group/edit invisible group-hover/item:visible">
            Shop Women
          </p>
        </div>
        <div className="group/item overflow-hidden w-[60%] h-[23vh] lg:h-full cursor-pointer">
          <img
            src={homebaner1}
            className="w-full h-full transition duration-300 transform hover:scale-110"
            alt="banner Image"
          ></img>
          <p className="-translate-y-[140%] text-center text-2xl font-thin tracking-widest text-black group/edit invisible group-hover/item:visible">
            Shop New
          </p>
        </div>
        <div className="group/item overflow-hidden w-[30%] h-full cursor-pointer group-hover/item:visible">
          <img
            src={homebaner3}
            className="w-full h-full transition duration-300 transform hover:scale-110"
            alt="banner Image"
          ></img>
          <p className="-translate-y-[140%] text-center text-2xl font-thin tracking-widest text-black group/edit invisible group-hover/item:visible">
            Shop Men
          </p>
        </div>
      </section>
      <section className="mt-9">
        <h1 className="text-3xl font-extrabold text-center p-9">New Drops</h1>
        <div className="grid flex-col items-center gap-3 grid-rows-4 lg:grid-rows-2 md:grid-rows-2 grid-flow-col lg:gap-10 justify-center">
          {products.map((product, index) => (
            <motion.div
              key={index}
              ref={product.ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: product.isInView ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="cursor-pointer"
            >
              <div className="overflow-hidden w-full lg:h-80 md:h-56 h-44">
                <img
                  src={product1Image}
                  className="w-full h-full transition duration-300 transform hover:scale-125"
                  alt="image"
                />
              </div>
              <div className="mt-2">
                <p className="text-base">I'm a product</p>
                <p className="text-sm mt-1">$15.00</p>
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
      <section className="lg:h-[90vh] md:h-[50vh] h-full">
        <div className="h-full flex flex-col lg:flex-row md:flex-row">
          <div className="bg-gradient-to-t from-lightyellow to-white lg:w-[70%] md:w-[70%] w-full h-full flex flex-col justify-center lg:gap-4 gap-2 p-5 items-center">
            <motion.span
              className="lg:text-7xl"
              ref={span1}
              initial={{ y: 50, opacity: 0 }}
              animate={inView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <MdOutlineElectricBolt />
            </motion.span>
            <motion.span
              className="lg:text-xl font-[400]"
              ref={span2}
              initial={{ y: 50, opacity: 0 }}
              animate={inView2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SALE IS ON
            </motion.span>
            <motion.span
              className="lg:text-9xl font-bold tracking-wide"
              ref={span3}
              initial={{ y: 50, opacity: 0 }}
              animate={inView3 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              25% OFF
            </motion.span>
            <motion.span
              className="lg:text-lg font-thin text-center"
              ref={span4}
              initial={{ y: 50, opacity: 0 }}
              animate={inView4 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              25% off sitewide using TEES25 at checkout
            </motion.span>
          </div>
          <div className="h-full lg:w-[30%] md:w-[30%]">
            <img
              className="md:h-full lg:h-full w-full h-[60vh]"
              src={homebaner4}
              alt="image"
            ></img>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:h-56 md:h-44 h-32 flex justify-evenly flex-col lg:flex-row md:flex-row p-3 gap-1 items-center">
          <motion.div
            ref={arrow1}
            initial={{ x: -100, opacity: 0 }}
            animate={arrowView1 ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <LuMoveRight className="text-5xl rotate-90 lg:rotate-0 md:rotate-0" />
          </motion.div>
          <a className="cursor-pointer">
            <h1 className="underline font-bold tracking-wide text-center lg:text-3xl text-xl">
              GET 10% OFF YOUR FIRST ORDER!
            </h1>
          </a>
          <motion.div
            ref={arrow1}
            initial={{ x: 100, opacity: 0 }}
            animate={arrowView1 ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <LuMoveLeft className="text-5xl rotate-90 lg:rotate-0 md:rotate-0" />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
