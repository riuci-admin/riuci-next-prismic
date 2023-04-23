import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section>
    <div class="hero relative flex w-full items-center justify-center overflow-hidden md:h-[calc(100vh-6.5rem)]">
      <Image
        src={`${slice.primary.background.url}&w=1280&bri=-25&blur=35`}
        alt={slice.primary.background.alt}
        className="object-cover"
        fill
      />
      <div class="hero-content flex flex-col items-center justify-center py-9 text-center text-white">
        <div className="max-w-xl fill-none px-2 lg:max-w-2xl lg:px-8">
          <h1 className="text-white">{slice.primary.title}</h1>
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
