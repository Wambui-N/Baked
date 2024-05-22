import Image from "next/image";
import React from "react";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <div id="Hero" className="hero">
      <div className="heroText">
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
          style="my-2 px-4 py-3 bg-primary text-white hover:bg-white hover:text-primary transition duration-300 ease-in-out"
        />
      </div>
      <Image
        className="heroImg"
        src="/Hero Img.png"
        alt="Cookies"
        width={500}
        height={500}
        quality={100}
      />
    </div>
  );
};
