"use client";

import React, { useState } from "react";
import db from "@/../Data/db.json";
import Image from "next/image";

interface FlavorProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Cookies {
  [key: string]: FlavorProps[];
}

const Flavor: React.FC = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorProps | null>(
    null
  );

  const Popover = (flavor: FlavorProps) => {
    setSelectedFlavor(flavor);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[8vw] gap-y-[3vh] place-content-between">
      {Object.keys(db.flavors).map((category) => (
        <div key={category}>
          <h5 className="my-2 uppercase">{category}</h5>
          <ul>
          {(db.flavors as Cookies)[category as keyof Cookies].map(
              (flavor: FlavorProps, index: number) => (
                <div key={index} className="relative">
                  <li
                    id="Cookie"
                    className="flex flex-row justify-between w-full my-2 py-1 border-y border-black/15"
                    onClick={() => Popover(flavor)}
                  >
                    <h6 className="text-black hover:text-primary active:text-primary cursor-pointer">
                      {flavor.name}
                    </h6>
                    <p>${flavor.price}</p>
                  </li>
                </div>
              )
            )}
          </ul>
        </div>
      ))}
      {selectedFlavor && (
        <div
          id="popover"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
        >
          <div className="relative bg-white lg:w-[30vw] w-[80vw] rounded-xl">
            <Image
              className="w-full h-[40vh] object-cover rounded-t-xl"
              src={selectedFlavor.image}
              alt={selectedFlavor.name}
              width={500}
              height={500}
              quality={100}
            />
            <div className="p-4">
              <h2 className="text-lg">{selectedFlavor.name}</h2>
              <p>{selectedFlavor.description}</p>
              <p className="text-primary font-semibold">${selectedFlavor.price}</p>
              <button id="close" className="absolute top-0 right-0 text-primary px-4 bg-none font-extralight text-6xl" onClick={() => setSelectedFlavor(null)}>&times;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flavor;
