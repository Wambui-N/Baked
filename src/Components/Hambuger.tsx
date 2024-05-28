"use client";

import React from "react";
import menu from "./menu.json";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import { Button } from "./Button";

export const Hambuger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>(null);
  const menuVis = isOpen ? "left-0" : "left-[100vw] hidden";

  const toggleMenu = () => {
    if (!isOpen) {
      menuRef.current.playSegments([0, 30], true);
    } else {
      menuRef.current.playSegments([30, 0], true);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={`md:hidden`} onClick={toggleMenu}>
      <Lottie
        className="h-20 p-0"
        lottieRef={menuRef}
        animationData={menu}
        autoplay={false}
        loop={false}
      />
      <div
        className={`${menuVis} bg-white py-20 h-[70vh] w-screen flex flex-col gap-5 absolute rounded-b-3xl drop-shadow-md transition-all ease-in duration-500`}
      >
        <Link className="navItem" href="/">
          Home
        </Link>
        <Link className="navItem" href="#menu">
          Menu
        </Link>
        <Link className="navItem" href="#testimonial">
          Testimonials
        </Link>
        <Button text="Order" style="bg-primary text-white h-auto font-medium text-base rounded-3xl border-[1px] 
  border-primary px-8 leading-3 relative py-2
  hover:bg-white hover:text-primary cursor-pointer transition duration-300 ease-in;"/>
      </div>
    </div>
  );
};
