import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.MembershipSlice} MembershipSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MembershipSlice>} MembershipProps
 * @param { MembershipProps }
 */
const Membership = ({ slice }) => (
  <section>
    <div className="frame py max-w-2xl">
      <h1>{slice.primary.title}</h1>
      <PrismicRichText field={slice.primary.description} />
    </div>
  </section>
);

export default Membership;
