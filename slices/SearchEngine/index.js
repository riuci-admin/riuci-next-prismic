import { PrismicNextImage } from "@prismicio/next";
import va from "@vercel/analytics";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.SearchEngineSlice} SearchEngineSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SearchEngineSlice>} SearchEngineProps
 * @param { SearchEngineProps }
 */
const SearchEngine = ({ slice }) => (
  <section>
    <div className="frame py max-w-2xl">
      <h1>{slice.primary.title}</h1>
      <p className="text-center">{slice.primary.text}</p>
      <div className="mt-9 flex justify-center">
        <a
          className="card max-w-[39rem] border-[1px] bg-white p-9 font-medium shadow-xl hover:border-[1px] hover:border-green-100 hover:bg-green-light hover:text-green-dark hover:shadow-green-200"
          href={slice.primary.link.url}
          title={slice.primary.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="rounded-lg">
            <PrismicNextImage
              field={slice.primary.image}
              priority
              onClick={() => va.track("Search Engine")}
            />
          </figure>
        </a>
      </div>
    </div>
  </section>
);

export default SearchEngine;
