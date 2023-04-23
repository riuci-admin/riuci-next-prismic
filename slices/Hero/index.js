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
    <div className="relative flex w-full items-center justify-center overflow-hidden md:h-[calc(100vh-6.5rem)]">
      <Image
        src={`${slice.primary.background.url}&w=1280&bri=-25&blur=35`}
        alt={slice.primary.background.alt}
        className="object-cover"
        fill
      />
      <div className="z-0 flex max-w-xl flex-col items-center justify-center px-6 py-11 text-center text-white lg:max-w-2xl">
        <h1 className="text-white">{slice.primary.title}</h1>
        <PrismicRichText field={slice.primary.text} />
      </div>
    </div>
  </section>
);

export default Hero;
