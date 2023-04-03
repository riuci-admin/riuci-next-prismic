import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section
    className="hero h-[calc(100vh-6.5rem)] bg-cover bg-fixed"
    role="img"
    aria-label={slice.primary.background.alt}
    style={{
      backgroundImage: `url('${slice.primary.background.url}&w=1280&bri=-25&blur=35')`,
    }}
  >
    <div className="hero-content py-14 text-center text-white md:py-16 lg:py-24">
      <div className="max-w-xl px-2 lg:max-w-2xl lg:px-8">
        <h1 className="text-white">{slice.primary.title}</h1>
        <PrismicRichText field={slice.primary.text} />
      </div>
    </div>
  </section>
);

export default Hero;
