import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.FirstAssemblySlice} FirstAssemblySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FirstAssemblySlice>} FirstAssemblyProps
 * @param { FirstAssemblyProps }
 */
const FirstAssembly = ({ slice }) => (
  <section className="bg-neutral-100">
    <div className="frame py md:max-w-4xl">
      <h1>
        {slice.primary.title}
        <div className="py-3 text-2xl">{slice.primary.date}</div>
      </h1>
      {slice.items.map((item, i) => (
        <div key={i} className="mb-12 last:mb-0">
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h2 className="w-full text-center">{item.subtitle}</h2>
              <div className="grid grid-cols-2 items-center gap-5 md:min-h-[280px] md:gap-9">
                <div className="col-span-2 flex justify-center md:col-span-1">
                  <PrismicNextImage field={item.image} priority />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <PrismicRichText field={item.description} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FirstAssembly;
