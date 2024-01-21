"use client";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="p-6 flex flex-row items-center w-auto">
        <div className="flex flex-row cursor-pointer lg:hidden z-10">
          <div className="w-auto h-auto absolute flex flex-col items-center right-5 top-10 text-center pr-2">
            <ul onClick={openNav}>
              <li
                className={
                  open
                    ? "animate-rotateUp text-white text-2xl border-2 my-2 w-10"
                    : "animate-rotateUpRev text-white text-2xl border-2 my-2 w-10"
                }
              ></li>
              <li
                className={
                  open
                    ? "animate-fading text-white text-2xl border-2 my-2 w-10"
                    : "animate-fadingRev text-white text-2xl border-2 my-2 w-10"
                }
              ></li>
              <li
                className={
                  open
                    ? "animate-rotateDwn text-white text-2xl border-2 my-2 w-10"
                    : "animate-rotateDwnRev text-white text-2xl border-2 my-2 w-10"
                }
              ></li>
            </ul>
            <ul
              className={
                open
                  ? "animate-fadingRev backdrop-blur-sm text-white"
                  : "animate-fading backdrop-blur-sm text-white"
              }
            >
              <li
                className={
                  open
                    ? "animate-extension1 my-3 p-2 mx-2 text-xl"
                    : "my-3 p-2 mx-2 text-xl"
                }
              >
                <Link href="/services">Services</Link>
              </li>
              <li
                className={
                  open
                    ? "animate-extension2 my-3 p-2 mx-2 text-xl"
                    : "my-3 p-2 mx-2 text-xl"
                }
              >
                <Link href="/book">Book Now</Link>
              </li>
              <li
                className={
                  open
                    ? "animate-extension3 mb-10 p-2 mx-2 text-xl"
                    : "mb-10 p-2 mx-2 text-xl"
                }
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex text-white">
            <li className="mx-10 underline underline-offset-8">
              <Link href="/services">Services</Link>
            </li>
            <li className="mx-10 underline underline-offset-8">
              <Link href="/book">Book Now</Link>
            </li>
            <li className="mx-10 underline underline-offset-8">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
