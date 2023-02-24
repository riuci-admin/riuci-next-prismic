import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "components/RichText";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section className="bg-green-light">
    <div className="frame grid grid-cols-2 gap-10">
      <div>
        <RichText field={slice.primary.title} />
        <RichText field={slice.primary.text} />
      </div>
      <div className="">
        <PrismicNextImage field={slice.primary.background} />
      </div>
    </div>
  </section>
);

export default Hero;
