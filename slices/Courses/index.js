import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.CoursesSlice} CoursesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CoursesSlice>} CoursesProps
 * @param { CoursesProps }
 */
const Courses = ({ slice }) => (
  <section className="bg-neutral-100">
    <div className="frame py flex flex-col">
      <h1 className="mb-10">{slice.primary.title}</h1>
      {slice.items.map(
        (item, i) =>
          item.visible && (
            <div
              key={i}
              className="card mb-14 min-h-[348px] overflow-auto bg-white shadow-xl md:card-side last:mb-0"
            >
              <div className="relative h-72 md:h-auto md:w-1/2">
                <Image
                  className="object-cover"
                  src={item.image.url.split("?")[0]}
                  alt={item.image.alt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority
                  fill
                />
              </div>
              <div className="card-body md:w-1/2">
                <h2 className="mb-2 text-left text-xl">{item.topic}</h2>
                <div>
                  <PrismicRichText field={item.text} />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  </section>
);

export default Courses;
