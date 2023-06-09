import { motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Card = ({ seats }: { seats: number }) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      initial={{ y: 10, opacity: 0.9 }}
      className="relative w-full max-w-sm m-1 mx-auto border-2 border-yellow-400 rounded-lg group"
    >
      <a
        href="#"
        className="relative inline-block w-full transition-transform duration-300 ease-in-out transform"
      >
        <div className="rounded-lg">
          <div className="relative flex justify-center overflow-hidden rounded-lg h-60">
            <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image
                src="/seat-0.webp"
                fill
                loading="lazy"
                alt="seat-0"
                placeholder="blur"
                blurDataURL="/seat-0.webp"
              />
            </div>
            <span
              className={twMerge(
                `absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-bold duration-500 bg-yellow-500 rounded-full select-none lg:-translate-y-24 text-black group-hover:translate-y-0`,
                seats < 10 && "bg-red-700 text-slate-200"
              )}
            >
              {" "}
              {seats} seats left{" "}
            </span>
          </div>
          <div className="">
            <div className="flex mx-2 mt-4 ">
              <div className="flex items-center grow">
                <div className="relative w-full text-left">
                  <h4 className="text-2xl font-medium text-white line-clamp-1 md:text-3xl">
                    Soul food balcony
                  </h4>
                  <p className="mt-2 text-sm text-white line-clamp-1">
                    soul food,kandy
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <p className="inline-block px-4 py-2 font-semibold leading-tight text-yellow-400 rounded-full text-primary whitespace-nowrap bg-yellow-400/10">
                  <span className="text-lg uppercase"> $ </span>
                  <span className="text-lg">100</span>
                </p>
              </div>
            </div>
            <div className="pt-3 mt-2 border-t border-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laboriosam labore obcaecati hic fugit exercitationem ad blanditiis
              inventore excepturi cumque!
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Card;
