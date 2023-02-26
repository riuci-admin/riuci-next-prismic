import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section
    style={{
      backgroundImage: `url('${slice.primary.background.url}&w=1280&bri=-25&blur=35')`,
    }}
    className="w-full bg-cover bg-fixed"
  >
    <div className="frame flex max-w-2xl flex-col py-7 text-center text-white">
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.text} />
    </div>
  </section>
);

export default Hero;
