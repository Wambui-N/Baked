import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import { Hambuger } from "./Hambuger";

export const Navbar = () => {
  return (
    <nav className="border-b-[1px] border-black/25 flex flex-row justify-between items-center lg:p-4 md:p-2 p- sticky top-0 bg-white z-10">
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
        <Link className="navItem" href="#">
          Menu
        </Link>
        <Link className="navItem" href="#">
          Testimonials
        </Link>
      </div>
      <Button style="hidden md:flex" text="Order" />
      <Hambuger />
    </nav>
  );
};
