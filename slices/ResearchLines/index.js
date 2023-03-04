import BambooSVG from "components/BambooSVG";
import React from "react";
/**
 * @typedef {import("@prismicio/client").Content.ResearchLinesSlice} ResearchLinesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResearchLinesSlice>} ResearchLinesProps
 * @param { ResearchLinesProps }
 */
const ResearchLines = ({ slice }) => (
  <section className="py bg-neutral-50">
    <div className="frame pb-7">
      <h2 className="text-center text-green-dark md:pb-3">
        {slice.primary.title}
      </h2>
      <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2 md:gap-11 lg:grid-cols-3">
        {slice.items.map((item, i) => (
          <div className="card bg-white shadow-xl" key={i}>
            <div className="card-body flex items-center text-center">
              <div className="pb-3 text-5xl text-green-dark opacity-80">
                {item.icon === "bamboo" ? (
                  <BambooSVG />
                ) : (
                  <i className={`fa-solid fa-${item.icon} mt-1`}></i>
                )}
              </div>
              <div className="font-medium">{item.topic}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchLines;
