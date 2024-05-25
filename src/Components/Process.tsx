import Image from "next/image";
import React from "react";

export const Process = () => {
  return (
    <div id="flex flex-cols gap-2">
      <h2 className="">Our Process</h2>
      <p className="">
        Our cookies are crafted with the finest, high-quality ingredients,
        ensuring every bite is a delightful experience. Each batch is baked
        fresh daily to guarantee optimal flavor and texture. We pride ourselves
        on offering a wide variety of delicious flavors, each one meticulously
        developed to satisfy your sweet tooth and provide a moment of
        indulgence. Whether you prefer classic tastes or adventurous new
        combinations, our selection has something to please every palate.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[3vw] w-full h-auto overflow-hidden my-4">
        <Image
          className="object-cover object-center rounded-2xl border-[1px] border-primary w-full md:h-auto"
          src="/Image 1.png"
          alt="Mixing ingredients"
          width={500}
          height={500}
          quality={100}
        />
        <Image
          className="object-cover object-center rounded-2xl border-[1px] border-primary w-full md:h-auto"
          src="/Image 2.png"
          alt="Mixing ingredients"
          width={500}
          height={500}
          quality={100}
        />
        <Image
          className="object-cover object-center rounded-2xl border-[1px] border-primary w-full md:h-auto"
          src="/Image 3.png"
          alt="Mixing ingredients"
          width={500}
          height={500}
          quality={100}
        />
      </div>
    </div>
  );
};
