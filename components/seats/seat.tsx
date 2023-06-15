"use  client";
import { motion } from "framer-motion";
import { HiClock, HiMapPin, HiCalendar } from "react-icons/hi2";
import { FaChair } from "react-icons/fa";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useStore } from "@/store/store";

type ListType = {
  placeName: string;
  availableDays: number[];
};
const Seat = ({ itemData }: { itemData: ListType }) => {
  // const orderdList = useStore((state) => state.addOrder);
  const [selectedRow, setSelectedRow] = useState(1);
  console.log(itemData.placeName);
  // const addToList = () => {
  //   orderdList({ place: places, selectedRow });
  // };
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      initial={{ y: 10, opacity: 0.9 }}
      className="relative p-2 m-1 mx-auto overflow-hidden border-4 border-yellow-400 border-dashed rounded-lg md:w-[45%] h-52 group text-start"
    >
      <div className="relative grid min-w-full grid-cols-4 pb-1 text-3xl font-extrabold border-b-4 border-yellow-400">
        <h3 className="col-span-3">{itemData.placeName}</h3>
        <div className="flex items-end justify-center h-16 text-black -translate-y-4 rounded-b-lg bg-gradient-to-t from-yellow-400 from-70%">
          ${85}
        </div>
      </div>
      {/* bottom */}
      <div className="py-2 space-y-1">
        <div className="flex items-end">
          <HiCalendar size={28} className="inline-block text-yellow-400 " />{" "}
          <p className="inline-block text-xl font-bold capitalize">
            {itemData.availableDays.map((day) => (
              <span
                key={day}
                onClick={() => setSelectedRow(day)}
                className={twMerge(
                  "px-3 py-1 mr-1 transition-colors bg-yellow-400/10 rounded-full bgye cursor-pointer",
                  selectedRow === day && "bg-yellow-400 text-black"
                )}
              >
                {day}
              </span>
            ))}
          </p>
        </div>
        <div className="flex items-end">
          <HiClock size={28} className="inline-block text-yellow-400 " />
          <p className="inline-block text-xl font-bold capitalize">8.30 PM</p>
        </div>
        <div className="flex items-end">
          <FaChair size={28} className="inline-block text-yellow-400 " />
          <p className="inline-block text-xl font-bold capitalize">
            {/* {Object.keys(price).map((num) => (
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
            ))} */}
            front Row
          </p>
        </div>
      </div>
      <button
        // onClick={addToList}
        className="absolute px-4 py-2 font-bold text-black bg-yellow-400 rounded-lg bottom-2 right-2"
      >
        Add
      </button>
    </motion.div>
  );
};

export default Seat;
