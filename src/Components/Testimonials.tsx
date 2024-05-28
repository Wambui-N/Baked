"use client";

import React, { useState } from "react";
import Link from "next/link";
import db from "@/../Data/db.json";

interface TestimonialProps {
  name: string;
  rating: number;
  testimony: string;
}

const Testimonials = () => {
  const data = db;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="testimonial" className="">
      <h2>Testimonials</h2>
      <div className="relative">
        <div className="my-6 w-full flex flex-col items-center">
          {data.testimonials.map(
            (testimonial: TestimonialProps, index: number) => (
              <div
                key={index}
                className={`${
                  index === currentIndex ? "block" : "hidden"
                } w-[80%] border-[1px] rounded-3xl border-primary flex flex-col gap-3 items-center p-6`}
              >
                <div>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg
                      className="w-7 h-7 inline-block"
                      fill="#3F37D2"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path>
                      </g>
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-center font-semibold">{testimonial.testimony}</p>
                <p className="Capitalize text-primary font-semibold">
                  -{testimonial.name}
                </p>
              </div>
            )
          )}
          {/*The left and right arrows*/}
          <div>
            <div
              onClick={next}
              id="next"
              className="absolute cursor-pointer top-1/3 right-0"
            >
              <svg
                className="w-12 h-12 inline-block"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#3F37D2"
                transform="rotate(90)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M3.9 15L12 6.9l8.1 8.1z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </g>
              </svg>
            </div>
            <div
              onClick={prev}
              id="prev"
              className="absolute cursor-pointer top-1/3 left-0"
            >
              <svg
                className="w-12 h-12 inline-block"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#3F37D2"
                transform="rotate(270)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M3.9 15L12 6.9l8.1 8.1z"></path>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                </g>
              </svg>
            </div>
          </div>

          {/*The dots/circles*/}
          {/* <div className="flex flex-row justify-center gap-2 my-4">
            {data.testimonials.map((_, index: number) => (
              <span
                key={index}
                className={`cursor-pointer rounded-full border-[1px] border-primary bg-transparent w-3 h-3 mx-1
                ${index === currentIndex ? "bg-primary" : "bg-transparent"}`}
              ></span>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
