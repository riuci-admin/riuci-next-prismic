import { PrismicNextImage } from "@prismicio/next";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ExternalRepositoriesSlice} ExternalRepositoriesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExternalRepositoriesSlice>} ExternalRepositoriesProps
 * @param { ExternalRepositoriesProps }
 */
const ExternalRepositories = ({ slice }) => (
  <section className="py bg-neutral-100">
    <h1>{slice.primary.title}</h1>
    <div className="frame mb-8 flex flex-wrap items-center justify-center gap-10 text-center">
      {slice.items.map((item, i) => (
        <a
          key={i}
          className="card h-72 w-80 border-[1px] bg-white p-8 font-medium shadow-xl hover:border-[1px] hover:border-green-100 hover:bg-green-light hover:text-green-dark hover:shadow-green-200"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>{item.name}</div>
          <figure className="rounded-sm pt-5">
            <PrismicNextImage field={item.logo} />
          </figure>
        </a>
      ))}
    </div>
  </section>
);

export default ExternalRepositories;
