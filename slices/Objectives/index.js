import Image from "next/image";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ObjectivesSlice} ObjectivesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ObjectivesSlice>} ObjectivesProps
 * @param { ObjectivesProps }
 */
const Objectives = ({ slice }) => (
  <section className="bg-white">
    <div className="frame py max-w-4xl">
      <div className="relative">
        <Image
          className="card h-96 object-cover shadow-xl"
          src={slice.primary.general_image.url}
          alt={slice.primary.general_image.alt}
          width={848}
          height={384}
        />
        <div className="card-body absolute left-1/2 top-1/2 min-w-[20rem] -translate-x-1/2 -translate-y-1/2 items-center text-center">
          <h1 className="text-4xl text-green-dark">
            {slice.primary.general_title}
          </h1>
          <p className="max-w-md text-lg text-black md:text-xl">
            {slice.primary.general_description}
          </p>
        </div>
      </div>
      <h2 className="mt-10 pt-3 text-left">{slice.primary.specific_title}</h2>
      <p>{slice.primary.specific_description}</p>
      <div className="grid gap-11 pt-7 md:grid-cols-2">
        {slice?.items?.map((item, i) => (
          <div
            key={i}
            className="card bg-white shadow-xl md:last:col-span-2 md:last:mx-auto md:last:w-1/2"
          >
            <figure>
              <Image
                src={item.objective_image.url}
                alt={item.objective_image.alt}
                width={750}
                height={400}
                sizes="100vw, (min-width: 769px) 50vw"
              />
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
