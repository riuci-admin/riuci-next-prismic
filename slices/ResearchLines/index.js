import BambooSVG from "components/BambooSVG";
import Image from "next/image";
import React from "react";
/**
 * @typedef {import("@prismicio/client").Content.ResearchLinesSlice} ResearchLinesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResearchLinesSlice>} ResearchLinesProps
 * @param { ResearchLinesProps }
 */
const ResearchLines = ({ slice }) => (
  <section className="bg-neutral-100">
    <div className="frame py">
      <h2>{slice.primary.title}</h2>
      <div className="flex flex-wrap justify-center gap-11 pt-3 md:gap-14">
        {slice.items.map((item, i) => (
          <div key={i} className="card h-auto w-80 bg-white shadow-xl">
            <figure>
              <div className="relative mt-7 h-14 w-14 opacity-80">
                <Image src={`svg/${item.icon}.svg`} alt={item.icon} fill />
              </div>
            </figure>
            <div className="card-body flex items-center justify-center px-7 pb-8 pt-5 text-center md:justify-start">
              <div className="font-medium">{item.topic}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchLines;
