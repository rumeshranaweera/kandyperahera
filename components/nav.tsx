"use client";
import { useStore } from "@/store/store";
import Logo from "./logos";
import { HiShoppingBag, HiMenu, HiX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useRef } from "react";
import SectionTitle from "./sectionTitle";
import { AnimatePresence, motion } from "framer-motion";

function Nav() {
  const orderList = useStore((state) => state.orderList);

  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <header className="fixed h-[72px] top-0 z-40 w-screen border border-transparent shadow-xl border-b-yellow-800/20 bg-slate-900/30 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-5xl gap-1 px-3 py-4 mx-auto ">
        {/* left */}
        <div className="">
          <Logo logoAnimation />
        </div>
        {/* middle */}

        <div className="justify-end hidden px-3 md:flex grow">
          <Link href={"/explore"} className="text-xl font-bold capitalize ">
            explore
          </Link>
        </div>
        {/* right */}
        <div className="hidden gap-2 md:flex">
          <Link href="/#seats">
            <button className="primary-btn">Tickets</button>
          </Link>
          <Link
            href={"/checkout"}
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
              {orderList.length}
            </span>
          </Link>
        </div>
        {/* mobile */}
        <div className="flex gap-2 md:hidden">
          <Link
            href={"/checkout"}
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
              {orderList.length}
            </span>
          </Link>
          <button onClick={() => dialogRef?.current?.showModal()}>
            <HiMenu size={40} />
          </button>
        </div>

        <dialog
          ref={dialogRef}
          className="w-11/12 max-w-sm p-0 text-center outline-none text-slate-100 rounded-3xl h-fit ring-0 bg-slate-900/70 backdrop-blur-lg backdrop:backdrop-blur-sm"
          onClick={(e) => {
            const target = e.target as HTMLDialogElement;
            if (target.nodeName === "DIALOG") target.close();
          }}
        >
          <div className="p-2 divide-y-4 divide-yellow-400">
            {/* top */}
            <div className="flex justify-between px-4 ">
              <h3 className="text-3xl text-left ">MENU</h3>
              <button onClick={() => dialogRef?.current?.close()}>
                <HiX size={40} />
              </button>
            </div>
            <div className="flex flex-col py-4 my-4 text-2xl font-bold gap-y-4 ">
              <Link href="/#seats">
                <button
                  onClick={() => dialogRef?.current?.close()}
                  className=""
                >
                  Tickets
                </button>
              </Link>
              <Link href="/explore">
                <button onClick={() => dialogRef?.current?.close()}>
                  Explore
                </button>
              </Link>
              <Link href="/checkout">
                <button onClick={() => dialogRef?.current?.close()}>
                  Cart
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      </nav>
    </header>
  );
}

export default Nav;
