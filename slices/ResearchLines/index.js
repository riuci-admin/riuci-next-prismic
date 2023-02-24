import React from "react";
/**
 * @typedef {import("@prismicio/client").Content.ResearchLinesSlice} ResearchLinesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResearchLinesSlice>} ResearchLinesProps
 * @param { ResearchLinesProps }
 */
const ResearchLines = ({ slice }) => (
  <section className="frame py-16">
    <h2 className="text-center">{slice.primary.title}</h2>
    <div className="grid grid-cols-3 gap-11 pt-5">
      {slice.items.map((item, i) => (
        <div className="grid grid-cols-6" key={i}>
          <span className="text-3xl text-green-dark">
            <i className={`fa-solid fa-${item.icon}`}></i>
          </span>
          <span className="col-span-5">{item.topic}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ResearchLines;
