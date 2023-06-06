"use client";
import { useState } from "react";
import Hero from "../components/hero";
import History from "../components/history ";
import { motion } from "framer-motion";
import Schedule from "../components/schedule";
import Carousel from "../components/carousel";
import Offers from "@/components/offers";
import ImgAndText from "@/components/imgAndText";

export default function Home() {
  const [showFullAbout, setShowFullAbout] = useState(false);

  const images = [
    "https://cdn.pixabay.com/photo/2023/05/15/14/35/cat-7995231__340.jpg",
    "https://cdn.pixabay.com/photo/2023/05/15/14/20/museum-7995207_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/02/19/15/path-7965967_640.jpg",
  ];

  return (
    <main>
      <Hero />
      <div className="max-w-4xl px-1 mx-auto text-center ">
        {/* intro */}
        <div className="py-2 rounded-lg bg-yellow-500/5">
          <h2 className="my-2 text-4xl">
            Discover the Colorful History and Traditions of Kandy Perahera
          </h2>
          {/* about perehera section */}
          <motion.div
            layout
            transition={{ layout: { duration: 0.5 } }}
            className="overflow-hidden "
          >
            <motion.p
              layout="position"
              className={` ${
                !showFullAbout && "line-clamp-5"
              } md:line-clamp-none paragraph`}
            >
              Kandy Perahera is one of the most important cultural events in Sri
              Lanka, and it&rsquo;s a festival that is steeped in tradition and
              history. This annual event, which takes place in the city of
              Kandy, is a celebration of the sacred Tooth Relic of the Buddha,
              which is housed in the Temple of the Tooth. The festival dates
              back over 250 years, and it has evolved over time to become the
              grand spectacle that it is today.
              <br /> During the festival, participants from all over Sri Lanka
              come together to take part in colorful processions, traditional
              dances, and other performances that showcase the rich culture and
              heritage of the island. The festival lasts for ten days, and each
              day is filled with events that are both entertaining and
              educational. <br />
              So we&rsquo;ll provide you with all the information you need to
              know about Kandy Perahera. From the festival&rsquo;s history and
              significance to its schedule and locations, we&rsquo;ll cover
              everything you need to plan your visit and make the most of your
              experience. So come along and join us as we explore this amazing
              festival and everything it has to offer!
            </motion.p>
            <motion.span
              layout="position"
              className="inline-block px-2 text-sm text-black capitalize bg-yellow-500 rounded-full font-canveat hover:cursor-pointer md:hidden"
              onClick={() => setShowFullAbout(!showFullAbout)}
            >
              {showFullAbout ? "show less" : "continue reading"}
            </motion.span>
          </motion.div>
          {/* end about perehera section */}
        </div>
        {/* history section */}
        <History />
        <ImgAndText swipOrder paragraph="test para" title="test title" />
        <ImgAndText
          paragraph="hello helloo test"
          title="test title 2"
          buttonText="test button"
        />
        <Schedule />
        <Offers />

        {/* <Carousel /> */}
      </div>
    </main>
  );
}
