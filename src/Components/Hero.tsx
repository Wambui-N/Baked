import Image from "next/image";
import React from "react";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <div id="Hero" className="flex lg:flex-row lg:items-center flex-col w-full h-auto lg:gap-8 gap-[2vh]">
      <div className="md:basis-1/2 flex flex-col lg:gap-[1vw] md:gap-[0.5vw] justify-center h-full">
        <h1>Infusing magic into every bite</h1>
        <p>
          Our cookies are made with the finest ingredients and are baked fresh
          daily. We offer a variety of flavors that are sure to satisfy your
          sweet tooth.
        </p>
        <p>
          Our cookies are perfect for any occasion, whether it be a birthday
          party, wedding, or just a special treat for yourself. We also offer
          custom cookie designs for special events. Contact us today to place
          your order!
        </p>
        <Button 
          text="Order Now"
          style="my-2 px-4 py-3 lg:w-full md:w-1/3 bg-primary text-white hover:bg-white hover:text-primary transition duration-300 ease-in-out"
        />
      </div>
      <Image
        className="border-[1px] rounded-3xl object-cover object-center border-primary lg:basis-1/2 w-full lg:h-[60vh] md:h-[40vh] h-[30vh]"
        src="/Hero Img.png"
        alt="Cookies"
        width={500}
        height={500}
        quality={100}
      />
    </div>
  );
};
