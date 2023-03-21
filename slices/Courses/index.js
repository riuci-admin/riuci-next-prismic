import { asDate } from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.CoursesSlice} CoursesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CoursesSlice>} CoursesProps
 * @param { CoursesProps }
 */
const Courses = ({ slice }) => (
  <section className="py">
    <div className="frame flex flex-col">
      <h1 className="mb-10">{slice.primary.title}</h1>
      {slice.items.map((item, i) => (
        <div
          key={i}
          className="card mb-12 overflow-auto border-[1px] border-neutral-100 bg-base-100 shadow-xl md:card-side"
        >
          <figure
            className="h-72 bg-cover md:h-auto md:w-1/2"
            style={{
              backgroundImage: `url('${item.image.url}')`,
            }}
          ></figure>
          <div className="card-body md:w-1/2">
            <h3 className="text-left">{item.topic}</h3>
            <div className="course">
              <PrismicRichText field={item.text} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Courses;
