import React from "react";
import db from "@/../Data/db.json";

interface FlavorProps {
  name: string;
  description: string;
  price: number;
}

interface Cookies {
    "classic cookies": Cookies[];
    "specialty cookies": Cookies[];
    "shortbread cookies": Cookies[];
    "healthier cookies": Cookies[];
  }

const Flavor = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[8vw] gap-y-[3vh] place-content-between">
      {Object.keys(db.flavors).map((category) => (
        <div>
          <h5 className="my-2 uppercase">{category}</h5>
          <ul>
            {db.flavors[category as keyof Cookies].map((flavor: FlavorProps, index: number) => (
              <li key={index} id="Cookie" className="flex flex-row justify-between w-full my-2 py-1 border-y border-black/15">
                <h6>{flavor.name}</h6>
                <p>{flavor.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Flavor;
