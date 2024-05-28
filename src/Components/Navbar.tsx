import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import { Hambuger } from "./Hambuger";

export const Navbar = () => {
  return (
    <nav className="border-b-[1px] border-black/25 flex flex-row justify-between items-center lg:py-4 md:py-2 sticky top-0 bg-white z-10">
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="logo"
          width={300}
          height={300}
          quality={100}
          placeholder="empty"
          className="h-[6vh] w-auto"
        />
      </Link>
      <div id="Nav_Links">
        <Link className="navItem" href="/">
          Home
        </Link>
        <Link className="navItem" href="#menu">
          Menu
        </Link>
        <Link className="navItem" href="#testimonial">
          Testimonials
        </Link>
      </div>
      <Button
        style="hidden md:flex h-auto text-primary font-medium text-base rounded-3xl border-[1px] 
  border-primary px-8 leading-3 relative bg-white py-2
  hover:bg-primary hover:text-white cursor-pointer transition duration-300 ease-in"
        text="Order"
      />
      <Hambuger />
    </nav>
  );
};
