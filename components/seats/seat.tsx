import { motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { HiClock, HiMapPin } from "react-icons/hi2";
import { FaChair } from "react-icons/fa";

const Seat = ({
  seats,
  title,
  price,
}: {
  seats: number;
  title: string;
  price: number;
}) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      initial={{ y: 10, opacity: 0.9 }}
      className="relative p-2 m-1 mx-auto overflow-hidden border-4 border-yellow-400 border-dashed rounded-lg md:w-[45%] h-52 group text-start"
    >
      <div className="relative grid min-w-full grid-cols-4 pb-1 text-3xl font-extrabold border-b-4 border-yellow-400">
        <h3 className="col-span-3">{title}</h3>
        <div className="flex items-end justify-center h-16 text-black -translate-y-4 rounded-b-lg bg-gradient-to-t from-yellow-400 from-70%">
          ${price}
        </div>
      </div>
      {/* bottom */}
      <div className="py-2 space-y-1">
        <div className="flex items-end">
          <HiMapPin size={28} className="inline-block text-yellow-400 " />{" "}
          <p className="inline-block text-xl font-bold capitalize">
            Queens' corrido
          </p>
        </div>
        <div className="flex items-end">
          <HiClock size={28} className="inline-block text-yellow-400 " />{" "}
          <p className="inline-block text-xl font-bold capitalize">8.32 PM</p>
        </div>
        <div className="flex items-end">
          <FaChair size={28} className="inline-block text-yellow-400 " />{" "}
          <p className="inline-block text-xl font-bold capitalize">1st Row </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Seat;
