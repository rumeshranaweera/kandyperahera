"use client";
import SectionTitle from "../sectionTitle";
import Seat from "./seat";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { list } from "@/public/ticketsDetails";

type ListType = {
  categoryName: string;
  places: {
    placeName: string;
    availableDays: number[];
  };
};
const categoryList = [
  { title: "21st-24th kubal perahera", days: [21, 22, 23, 24] },
  { title: "final kubal perahera", days: [25] },
  { title: "26th-29th RANDOLI PERAHERA", days: [26, 27, 28] },
  { title: "FINAL RANDOLI PERAHERA", days: [29] },
  { title: "DAY PERAHERA", days: [30] },
];

const SeatsSection = () => {
  let [activeTab, setActiveTab] = useState(categoryList[0].title);
  const [filterdSeats, setFilterdSeats] = useState<any[]>([]);

  useEffect(() => {
    setFilterdSeats(list.filter((l) => l.categoryName === activeTab)[0].places);
  }, [activeTab]);
  console.log(filterdSeats);

  return (
    <div id="seats">
      <SectionTitle title="seats" />
      <AnimatedTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-wrap gap-1">
        {filterdSeats.map(
          (item: { placeName: string; availableDays: number[] }) => {
            return <Seat itemData={item} />;
          }
        )}
      </div>
    </div>
  );
};

export default SeatsSection;

function AnimatedTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: Function;
}) {
  return (
    <div className="flex flex-wrap justify-center my-3">
      {categoryList.map((day) => (
        <motion.button
          animate={{ color: activeTab === day.title ? "black" : "" }}
          transition={{
            color: {
              delay: activeTab === day.title ? 0.4 : 0,
            },
          }}
          key={day.title}
          onClick={() => setActiveTab(day.title)}
          className={twMerge(
            `relative capitalize rounded-full px-3 py-1.5  text-base md:text-lg font-bold text-white mx-1 my-1 outline-yellow-700 transition focus-visible:outline-2 ${
              activeTab === day.title
                ? "text-black"
                : "hover:text-yellow-400/60 bg-yellow-400/10"
            } `
          )}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === day.title && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 bg-yellow-400 -z-10"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {day.title}
        </motion.button>
      ))}
    </div>
  );
}
