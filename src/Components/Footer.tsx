import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 border-t border-black/25 pt-[8vh]">
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="logo"
          width={500}
          height={500}
          quality={100}
          placeholder="empty"
          className="h-[10vh] w-auto"
        />
      </Link>
      <div className="flex flex-col items-center lg:w-[90%] w-full">
        <div className="flex flex-row justify-between w-full my-2 py-1 border-y border-black/15">
          <p>Call Us</p>
          <p>+254000000000</p>
        </div>
        <div className="flex flex-row justify-between w-full my-2 py-1 border-y border-black/15">
          <p>Email Us</p>
          <p>backed024@gmail.com</p>
        </div>
        <Button
          text="Make an Order"
          style="my-2 px-4 py-3 w-1/3 bg-primary text-white hover:bg-white hover:text-primary transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};
