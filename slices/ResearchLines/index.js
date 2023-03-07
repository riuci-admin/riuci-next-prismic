import BambooSVG from "components/BambooSVG";
import React from "react";
/**
 * @typedef {import("@prismicio/client").Content.ResearchLinesSlice} ResearchLinesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResearchLinesSlice>} ResearchLinesProps
 * @param { ResearchLinesProps }
 */
const ResearchLines = ({ slice }) => (
  <section className="py bg-neutral-100">
    <div className="frame pb-11 pt-3">
      <h2 className="text-center text-green-dark">{slice.primary.title}</h2>
      <div className="grid grid-cols-1 gap-11 pt-3 md:grid-cols-2 md:gap-11 lg:grid-cols-3">
        {slice.items.map((item, i) => (
          <div className="card bg-white shadow-xl" key={i}>
            <div className="card-body flex items-center text-center">
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
