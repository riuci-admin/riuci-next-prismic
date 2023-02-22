import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../../components/RichText";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section className="bg-green-50 py-16">
    <div className="frame grid grid-cols-2 items-center gap-10">
      <div>
        <RichText
          field={slice.primary.title}
          className="mb-5 text-4xl font-semibold text-green-dark"
        />
        <RichText field={slice.primary.text} className="leading-normal" />
      </div>
      <div className="">
        <PrismicNextImage field={slice.primary.background} />
      </div>
    </div>
  </section>
);

export default Hero;
