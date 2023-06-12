import SectionTitle from "../sectionTitle";
import Seat from "./seat";
import { scheduleList } from "../schedule";

const daysList = [
  //@ts-ignore
  ...new Set(scheduleList.map((item) => item.date)),
];
const SeatsSection = () => {
  console.log(daysList);
  return (
    <div id="seats">
      <SectionTitle title="seats" />
      {/* <ComboboxDemo /> */}
      <AnimatedTabs />
      <div className="flex flex-wrap">
        <Seat seats={5} />
        <Seat seats={13} />
        <Seat seats={8} />
        <Seat seats={20} />
      </div>
    </div>
  );
};

export default SeatsSection;

import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(daysList[0]);

  return (
    <div className="flex flex-wrap items-center justify-center my-3 space-x-1 space-y-1">
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
            `relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-yellow-700 transition focus-visible:outline-2 ${
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
