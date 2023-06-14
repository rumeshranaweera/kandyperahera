"use  client";
import { motion } from "framer-motion";
import { HiClock, HiMapPin } from "react-icons/hi2";
import { FaChair } from "react-icons/fa";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Seat = ({
  seats,
  title,
  price,
  place,
}: {
  seats: number;
  title: string;
  price: { row1: number; row2: number; row3: number };
  place: string;
}) => {
  const [selectedRow, setSelectedRow] = useState<"row1" | "row2" | "row3">(
    "row1"
  );
  console.log(selectedRow);
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
          ${price[selectedRow]}
        </div>
      </div>
      {/* bottom */}
      <div className="py-2 space-y-1">
        <div className="flex items-end">
          <HiMapPin size={28} className="inline-block text-yellow-400 " />{" "}
          <p className="inline-block text-xl font-bold capitalize">{place}</p>
        </div>
        <div className="flex items-end">
          <HiClock size={28} className="inline-block text-yellow-400 " />{" "}
          <p className="inline-block text-xl font-bold capitalize">8.32 PM</p>
        </div>
        <div className="flex items-end">
          <FaChair size={28} className="inline-block text-yellow-400 " />{" "}
          <p className="inline-block text-xl font-bold capitalize">
            {Object.keys(price).map((num) => (
              <span
                key={num}
                onClick={() => setSelectedRow(num as typeof selectedRow)}
                className={twMerge(
                  "px-3 py-1 ml-1 transition-colors bg-yellow-400/10 rounded-full bgye cursor-pointer",
                  selectedRow === num && "bg-yellow-400 text-black"
                )}
              >
                {num.at(-1)}
              </span>
            ))}{" "}
            Row{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Seat;
