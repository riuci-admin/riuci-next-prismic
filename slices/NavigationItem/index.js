import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.NavigationItemSlice} NavigationItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationItemSlice>} NavigationItemProps
 * @param { NavigationItemProps }
 */
const NavigationItem = ({ slice }) => (
  <section>
    <div>{slice.primary.name} </div>
  </section>
);

export default NavigationItem;
