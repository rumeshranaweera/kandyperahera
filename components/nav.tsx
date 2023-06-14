"use client";
import Logo from "./logos";
import { HiShoppingBag } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

function Nav() {
  return (
    <header className="fixed h-[72px] top-0 z-40 w-screen border border-transparent shadow-xl border-b-yellow-800/20 bg-slate-900/30 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-5xl px-3 py-4 mx-auto">
        {/* left */}
        <div className="">
          <Logo logoAnimation />
        </div>
        {/* right */}
        <AnimatePresence>
          <div className="flex gap-2">
            <a href="#seats">
              <button className="primary-btn">Tickets</button>
            </a>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={twMerge(
                "relative "
                // orderList.length <= 0 && "hidden"
              )}
            >
              <HiShoppingBag
                size={40}
                className="cursor-pointer hover:text-yellow-400"
              />
              <span className="absolute top-0 right-0 px-1 text-xs font-bold text-black bg-yellow-400 rounded-full pointer-events-none md:-right-1 md:px-2 md:text-sm">
                3
              </span>
            </motion.div>
          </div>
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Nav;
