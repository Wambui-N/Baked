import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center">
      <Link href="/">
        <Image src="/Logo.png" alt="logo" width={150} height={200} />
      </Link>
      <div>
        <Link className="navItem" href="/">Home</Link>
        <Link className="navItem" href="/">Menu</Link>
        <Link className="navItem" href="/">Testimonials</Link>
      </div>
      <Button />
      
    </nav>
  );
};
