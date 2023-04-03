import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param { TextBlockProps }
 */
const TextBlock = ({ slice }) => (
  <section>
    <div className="frame py flex max-w-xl flex-col items-center text-center">
      <div className="text-green-dark">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <PrismicRichText field={slice.primary.description} />
    </div>
  </section>
);

export default TextBlock;
