"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useRef } from "react";
import Carousel from "./carousel";

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center h-screen mb-10 overflow-hidden "
    >
      <motion.div
        initial={{ opacity: 0.1, scale: 1.2, rotate: "-4deg" }}
        animate={{ opacity: 1, scale: 1, rotate: "0deg" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5, type: "tween", ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden"
        property="ture"
      >
        <div className="absolute inset-0 z-10 pointer-events-none select-none radial-gradient" />
        <Carousel />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{ y }}
        className={"relative text-5xl sm:text-7xl font-semibold text-center "}
      >
        <h1 className="z-20 inline-block pb-1 text-5xl text-white border-b-2 border-yellow-900/50 2xl:text- lg:">
          The Kandy Esala Perahera
        </h1>
        <motion.h4
          className="max-w-2xl text-2xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          Kandy Perahera: Vibrant annual festival in Sri Lanka featuring
          decorated elephants, dancers, and drummers celebrating the Sacred
          Tooth Relic.
        </motion.h4>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute left-0 right-0 flex justify-center w-10 h-10 mx-auto bottom-12 "
      >
        <BsChevronDoubleDown
          className="font-extrabold animate-bounce"
          size={40}
        />
      </motion.div>
      <motion.h6
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 5 }}
        className="absolute bottom-0 text-xs right-2 hover:text-yellow-500 md:bottom-2"
      >
        images source : kandyesalaperahera.com
      </motion.h6>
    </section>
  );
}

export default Hero;
