import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.EventsSlice} EventsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EventsSlice>} EventsProps
 * @param { EventsProps }
 */
const Events = ({ slice }) => (
  <section className="bg-neutral-100">
    <div className="frame py flex flex-col">
      <h1 className="mb-10">{slice.primary.title}</h1>
      {slice.items.map(
        (item, i) =>
          item.visible && (
            <div
              key={i}
              className="card mb-14 min-h-[348px] overflow-auto bg-white shadow-xl md:card-side last:mb-0"
            >
              <figure
                className="h-72 bg-cover md:h-auto md:w-1/2"
                style={{
                  backgroundImage: `url('${item.image.url}')`,
                }}
              ></figure>
              <div className="card-body md:w-1/2">
                <h3 className="text-left">{item.topic}</h3>
                <div>
                  <PrismicRichText field={item.text} />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  </section>
);

export default Events;
