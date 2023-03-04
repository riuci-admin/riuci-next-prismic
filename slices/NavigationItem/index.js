import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.NavigationItemSlice} NavigationItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationItemSlice>} NavigationItemProps
 * @param { NavigationItemProps }
 */
const NavigationItem = ({ slice }) => (
  <section className="py">
    <PrismicRichText field={slice.primary.title} />
    <PrismicRichText field={slice.primary.description} />
  </section>
);

export default NavigationItem;
