import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import { Hambuger } from "./Hambuger";

export const Navbar = () => {

  return (
    <nav className="flex flex-row justify-between items-center">
      <Link href="/">
        <Image src="/Logo.png" alt="logo" width={150} height={200} quality={100} placeholder="empty" />
      </Link>
      <div id="Nav_Links">
        <Link className="navItem" href="/">Home</Link>
        <Link className="navItem" href="#">Menu</Link>
        <Link className="navItem" href="#">Testimonials</Link>
      </div>
      <Button style='hidden md:flex' text='Order'/>
      <Hambuger />
    </nav>
  );
};
