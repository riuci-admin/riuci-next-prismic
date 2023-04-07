import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.MainActivitiesSlice} MainActivitiesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainActivitiesSlice>} MainActivitiesProps
 * @param { MainActivitiesProps }
 */
const MainActivities = ({ slice }) => (
  <section className="bg-neutral-100">
    <div className="frame py max-w-4xl">
      <h1>{slice.primary.title}</h1>
      <div className="grid grid-cols-2 gap-11 pt-3 md:gap-16 lg:gap-20">
        {slice.items.map((item, i) => (
          <div
            key={i}
            className="card col-span-2 max-w-[25rem] place-self-center bg-white shadow-xl md:col-span-1"
          >
            <figure
              className="h-64 bg-cover"
              style={{
                backgroundImage: `url('${item.image.url}')`,
              }}
            ></figure>
            <div className="card-body h-[11.5rem] text-center">
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MainActivities;
