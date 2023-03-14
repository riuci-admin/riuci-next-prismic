import { PrismicNextImage } from "@prismicio/next";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ObjectivesSlice} ObjectivesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ObjectivesSlice>} ObjectivesProps
 * @param { ObjectivesProps }
 */
const Objectives = ({ slice }) => (
  <section className="bg-white">
    <div className="frame py max-w-4xl">
      <div
        className="card image-full h-96 items-center shadow-xl md:bg-bottom"
        style={{
          backgroundImage: `url('${slice.primary.general_image.url}&w=896')`,
        }}
      >
        <div className="card-body items-center text-center">
          <h1 className="text-4xl text-green-dark">
            {slice.primary.general_title}
          </h1>
          <p className="max-w-md text-xl text-black">
            {slice.primary.general_description}
          </p>
        </div>
      </div>
      <h2 className="mt-10 pt-3 text-left">{slice.primary.specific_title}</h2>
      <p>{slice.primary.specific_description}</p>
      <div className="grid gap-11 py-7 md:grid-cols-2">
        {slice?.items?.map((item, i) => (
          <div
            key={i}
            className="card bg-white shadow-xl md:last:col-span-2 md:last:mx-auto md:last:w-1/2"
          >
            <figure>
              <PrismicNextImage field={item.objective_image} />
            </figure>
            <div className="card-body">
              <h3 className="text-left">{item.objective_title}</h3>
              <p>{item.objective_description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Objectives;
