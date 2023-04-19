import BambooSVG from "components/BambooSVG";
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
          <div key={i} className="card h-52 w-80 bg-white shadow-xl">
            <div className="card-body flex items-center justify-center text-center md:justify-start">
              <div className="pb-3 text-5xl text-green-dark opacity-80">
                {item.icon === "bamboo" ? (
                  <BambooSVG />
                ) : (
                  <i className={`fa-solid fa-${item.icon}`}></i>
                )}
              </div>
              <div className="pb-1 font-medium">{item.topic}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchLines;
