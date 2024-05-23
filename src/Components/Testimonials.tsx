import React from "react";
import db from "@/../Data/db.json";

interface TestimonialProps {
  name: string;
  rating: number;
  testimony: string;
}

const Testimonials = () => {
  const data = db;
  return (
    <div>
      <h2>Testimonials</h2>
      <div className="my-6">
        {data.testimonials.map((testimonial: TestimonialProps) => (
          <div className="border-[1px] rounded-3xl border-primary flex flex-col gap-3 items-center p-6">
            <div>
              {Array(testimonial.rating).fill(
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
              )}
            </div>
            <p className="text-lg font-semibold">{testimonial.testimony}</p>
            <p className="Capitalize text-primary font-semibold">
              -{testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
