import { useGlobalContext } from "@/app/context/appContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { GrClose } from "react-icons/gr";

function Hstory() {
  // const { isHistoryOpen, setIsHistoryOpen, historyModelRef } =
  //   useGlobalContext();
  const [isHistoryModelOpen, setIsHistoryModelOpen] = useState(false);
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (!modelRef.current?.contains(e.target)) {
        setIsHistoryModelOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <>
      <motion.div className="my-10" onClick={() => setIsHistoryModelOpen(true)}>
        <h2 className="my-8 text-4xl capitalize">History of perahera</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 " />
          <div className="relative flex overflow-hidden rounded-lg">
            {/* left - text */}
            <section className="max-w-md md:max-w-2xl">
              <p className="relative paragraph line-clamp-[10] ">
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
      <AnimatePresence>
        {isHistoryModelOpen && (
          <div ref={modelRef}>
            <Model setIsHistoryModelOpen={setIsHistoryModelOpen} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hstory;

const Model = ({
  setIsHistoryModelOpen,
}: {
  setIsHistoryModelOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // //@ts-expect-error
  // const { historyModelRef } = useGlobalContext();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed flex-col xl:flex-row top-0 left-0 z-50 w-full h-full m-auto bg-slate-900/10 backdrop-blur-[2px]"
      layout="size"
    >
      <div className="absolute inset-0 m-auto max-w-7xl max-h-[60vh]">
        <h2 className="my-2 text-4xl capitalize">History of perahera</h2>
        <div className="relative backdrop-blur-sm">
          <button
            className="absolute z-10 primary-btn top-2 right-2"
            onClick={() => setIsHistoryModelOpen(false)}
          >
            <GrClose />
          </button>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900/20" />
          <div className="relative flex w-full h-full rounded-lg">
            {/* left - text */}
            <section className="max-h-[60vh] overflow-y-scroll  md:max-w-2xl">
              <p className="relative text-left paragraph [&br]:my-3">
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
            <section className="absolute top-0 right-0 w-1/2 h-full overflow-hidden shadow-inner -z-10 shadow-black">
              <Image
                src={"/imgs/img-2.jpg"}
                fill
                alt=""
                className="hidden object-cover xl:inline-block max-h-[60vh]"
              />
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
