"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useRef } from "react";

const randomval = Math.floor(Math.random() * 7);

const imgUrls = Array.from({ length: 8 }, (_, i) => {
  return `/imgs/img-${i}.jpg`;
});
function Hero() {
  const imageUrl = imgUrls[randomval];
  // console.log(imageUrl);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center h-screen md:max-h-[700px] mb-10 overflow-hidden "
    >
      <motion.div
        initial={{ opacity: 0.1, scale: 1.2, rotate: "-4deg" }}
        animate={{ opacity: 1, scale: 1, rotate: "0deg" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5, type: "tween", ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden"
        property="ture"
      >
        <Image
          src={`${imageUrl}`}
          fill
          alt="conver image"
          className="object-cover overflow-hidden"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      <div className="absolute inset-0 text-center bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{ y }}
        className={"relative text-5xl sm:text-7xl font-semibold text-center "}
      >
        <h1 className="inline-block pb-1 text-5xl text-white border-b-2 border-yellow-900/50 ">
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
        className="absolute left-0 right-0 flex justify-center w-10 h-10 mx-auto bottom-4 "
      >
        <BsChevronDoubleDown
          className="font-extrabold animate-bounce"
          width={40}
        />
      </motion.div>
      <motion.h6
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 5 }}
        className="absolute text-xs right-2 hover:text-yellow-500 bottom-2"
      >
        <a href="https://kandyesalaperahera.com/" target="_blank">
          images source : kandyesalaperahera.com
        </a>
      </motion.h6>
    </section>
  );
}

export default Hero;
