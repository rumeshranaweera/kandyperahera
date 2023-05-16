"use client";

import { motion } from "framer-motion";
import Logo from "./logos";

function Nav() {
  return (
    <header className="fixed h-[72px] top-0 z-40 w-screen border border-transparent shadow-xl border-b-yellow-800/20 bg-slate-900/30 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-5xl px-3 py-4 mx-auto">
        {/* left */}
        <div className="">
          <Logo logoAnimation />
        </div>
        {/* right */}
        <div>
          <motion.button whileTap={{ scale: 1.1 }} className="primary-btn">
            Tickets
          </motion.button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
