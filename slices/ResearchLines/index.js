import BambooSVG from "components/BambooSVG";
import React from "react";
/**
 * @typedef {import("@prismicio/client").Content.ResearchLinesSlice} ResearchLinesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResearchLinesSlice>} ResearchLinesProps
 * @param { ResearchLinesProps }
 */
const ResearchLines = ({ slice }) => (
  <section className="bg-neutral-100">
    <div className="frame">
      <h2 className="text-center md:pb-3">{slice.primary.title}</h2>
      <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2 md:gap-11 lg:grid-cols-3">
        {slice.items.map((item, i) => (
          <div className="grid grid-cols-12" key={i}>
            <span className="col-span-2 text-3xl text-green-dark">
              {item.icon === "bamboo" ? (
                <BambooSVG />
              ) : (
                <i className={`fa-solid fa-${item.icon} mt-1`}></i>
              )}
            </span>
            <span className="col-span-10">{item.topic}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchLines;
