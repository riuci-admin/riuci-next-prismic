import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param { TextBlockProps }
 */
const TextBlock = ({ slice }) => (
  <section className="frame flex max-w-xl flex-col items-center">
    <div className="text-green-dark">
      <PrismicRichText field={slice.primary.title} />
    </div>
    <PrismicRichText field={slice.primary.description} />
  </section>
);

export default TextBlock;
