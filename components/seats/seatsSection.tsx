"use client";
import { scheduleList } from "../schedule";
import SectionTitle from "../sectionTitle";
import Seat from "./seat";
import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const daysList = [
  //@ts-ignore
  ...new Set(scheduleList.map((item) => item.date)),
];
const SeatsSection = () => {
  return (
    <div id="seats">
      <SectionTitle title="seats" />
      {/* <ComboboxDemo /> */}
      <AnimatedTabs />
      <div className="flex flex-wrap gap-1">
        <Seat
          seats={75}
          title="Esala Perahera 2023"
          price={{ row1: 85, row2: 50, row3: 45 }}
          place="Quenns corridor"
        />
        <Seat
          seats={50}
          title="Esala Perahera 2023"
          price={{ row1: 59, row2: 49, row3: 45 }}
          place="nimali shopping center"
        />
        <Seat
          seats={75}
          title="Esala Perahera 2023"
          price={{ row1: 59, row2: 49, row3: 45 }}
          place="Aroma cafe"
        />
        <Seat
          seats={60}
          title="Esala Perahera 2023"
          price={{ row1: 59, row2: 49, row3: 45 }}
          place="Outside Balaji "
        />
      </div>
    </div>
  );
};

export default SeatsSection;

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(daysList[0]);

  return (
    <div className="flex flex-wrap justify-center my-3">
      {daysList.map((day) => (
        <motion.button
          animate={{ color: activeTab === day ? "black" : "" }}
          transition={{
            color: {
              delay: activeTab === day ? 0.4 : 0,
            },
          }}
          key={day}
          onClick={() => setActiveTab(day)}
          className={twMerge(
            `relative rounded-full px-3 py-1.5  text-base md:text-lg font-bold text-white mx-1 my-1 outline-yellow-700 transition focus-visible:outline-2 ${
              activeTab === day
                ? "text-black"
                : "hover:text-yellow-400/60 bg-yellow-400/10"
            } `
          )}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === day && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 bg-yellow-400 -z-10"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {day}
        </motion.button>
      ))}
    </div>
  );
}
