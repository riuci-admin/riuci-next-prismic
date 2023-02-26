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
          <div
            className="flex h-40 flex-col items-center rounded-md border-[1px] border-neutral-300 p-5 text-center shadow-md"
            key={i}
          >
            <div className="pb-3 text-3xl text-green-dark">
              {item.icon === "bamboo" ? (
                <BambooSVG />
              ) : (
                <i className={`fa-solid fa-${item.icon} mt-1`}></i>
              )}
            </div>
            <div>{item.topic}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchLines;
