import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

function Hstory() {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <motion.div layoutId="history" onClick={() => setIsopen(!isopen)}>
        <h2 className="my-2 text-4xl capitalize">History of perahera</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 " />
          <div className="relative flex overflow-hidden rounded-lg">
            {/* left - text */}
            <section className="max-w-md md:max-w-2xl">
              <p className="relative paragraph line-clamp-[10] hover:cursor-pointer">
                Kandy Perahara is a traditional festival that takes place
                annually in Kandy, Sri Lanka. The festival has a long and rich
                history, dating back to the early 18th century. The festival is
                dedicated to the Sacred Tooth Relic, which is believed to be the
                left canine tooth of Lord Buddha.
                <br />
                The origins of Kandy Perahara can be traced back to the reign of
                King Kirthi Sri Rajasinghe, who ruled Kandy from 1747 to 1781.
                The king established the festival as a way to honor the Sacred
                Tooth Relic and to showcase the cultural and religious
                traditions of the Kandyan Kingdom. The first Kandy Perahara was
                held in 1755, and the festival has continued to be celebrated
                every year since then.
                <br />
                Over the years, Kandy Perahara has evolved and grown in size and
                scope. During the British colonial period, the festival was
                suppressed, but it was revived in the early 20th century with
                the help of local Buddhist leaders. In the post-independence
                period, the festival has become a major cultural event, drawing
                visitors from all over the world.
                <br />
                Today, Kandy Perahara is one of the most important festivals in
                Sri Lanka, and it is recognized as a UNESCO World Heritage
                cultural event. The festival features a grand procession of
                decorated elephants, dancers, drummers, and other performers,
                who parade through the streets of Kandy over ten nights. The
                procession culminates in a traditional water-cutting ceremony,
                in which water from the Mahaweli River is used to purify the
                streets after the parade.
                <br />
                Kandy Perahara is not just a celebration of Sri Lankan culture
                and tradition, but also a testament to the resilience and
                enduring spirit of the Sri Lankan people. Despite political
                upheaval, natural disasters, and other challenges, the festival
                has continued to be a symbol of hope and renewal, and a source
                of inspiration for generations of Sri Lankans. Regenerate
                response
              </p>
            </section>
            {/* right - photos */}
            <section className="absolute top-0 right-0 w-1/2 h-full shadow-inner -z-10 shadow-black">
              <Image
                src={"/imgs/img-2.jpg"}
                fill
                alt=""
                className="object-cover "
              />
            </section>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>{/* <Model setIsopen={setIsopen} /> */}</AnimatePresence>
    </>
  );
}

export default Hstory;

const Model = ({ setIsopen }: { setIsopen: any }) => {
  return (
    <motion.div
      layoutId="history"
      className="fixed top-0 left-0 z-50 w-full h-full m-auto"
      layout="size"
    >
      <motion.div
        onClick={() => setIsopen(false)}
        className="relative w-full m-auto my-auto max-h-60 xl:max-h-96 max-w-7xl"
      >
        <h2 className="my-2 text-4xl capitalize">History of perahera</h2>
        <div className="relative bg-slate-100/40 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 " />

          <div className="relative flex overflow-hidden rounded-lg">
            {/* left - text */}
            <section className=" md:max-w-2xl">
              <p className="relative overflow-auto xl:overflow-auto paragraph hover:cursor-pointer">
                Kandy Perahara is a traditional festival that takes place
                annually in Kandy, Sri Lanka. The festival has a long and rich
                history, dating back to the early 18th century. The festival is
                dedicated to the Sacred Tooth Relic, which is believed to be the
                left canine tooth of Lord Buddha.
                <br />
                The origins of Kandy Perahara can be traced back to the reign of
                King Kirthi Sri Rajasinghe, who ruled Kandy from 1747 to 1781.
                The king established the festival as a way to honor the Sacred
                Tooth Relic and to showcase the cultural and religious
                traditions of the Kandyan Kingdom. The first Kandy Perahara was
                held in 1755, and the festival has continued to be celebrated
                every year since then.
                <br />
                Over the years, Kandy Perahara has evolved and grown in size and
                scope. During the British colonial period, the festival was
                suppressed, but it was revived in the early 20th century with
                the help of local Buddhist leaders. In the post-independence
                period, the festival has become a major cultural event, drawing
                visitors from all over the world.
                <br />
                Today, Kandy Perahara is one of the most important festivals in
                Sri Lanka, and it is recognized as a UNESCO World Heritage
                cultural event. The festival features a grand procession of
                decorated elephants, dancers, drummers, and other performers,
                who parade through the streets of Kandy over ten nights. The
                procession culminates in a traditional water-cutting ceremony,
                in which water from the Mahaweli River is used to purify the
                streets after the parade.
                <br />
                Kandy Perahara is not just a celebration of Sri Lankan culture
                and tradition, but also a testament to the resilience and
                enduring spirit of the Sri Lankan people. Despite political
                upheaval, natural disasters, and other challenges, the festival
                has continued to be a symbol of hope and renewal, and a source
                of inspiration for generations of Sri Lankans. Regenerate
                response
              </p>
            </section>

            {/* right - photos */}
            <section className="absolute top-0 right-0 w-1/2 h-full shadow-inner -z-10 shadow-black">
              <Image
                src={"/imgs/img-2.jpg"}
                fill
                alt=""
                className="hidden object-cover xl:inline-block"
              />
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
