"use client";

import { motion } from "framer-motion";
import Logo from "./logos";

function Nav() {
  return (
    <header className="fixed top-0 z-40 w-screen border border-transparent shadow-xl border-b-yellow-800/20 bg-slate-900/30 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-5xl px-3 py-4 mx-auto">
        {/* left */}
        <div className="">
          <Logo logoanimation={true} />
        </div>
        {/* right */}
        <div>
          <motion.button
            whileTap={{ scale: 1.1 }}
            className="h-10 px-3 py-1 font-semibold text-black bg-yellow-500 rounded-full font-canveat hover:bg-yellow-600 "
          >
            Tickets
          </motion.button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
