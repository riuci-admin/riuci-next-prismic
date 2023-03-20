import { MemberDirectory } from "components/MemberDirectory";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.NetworkMembersSlice} NetworkMembersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NetworkMembersSlice>} NetworkMembersProps
 * @param { NetworkMembersProps }
 */
const NetworkMembers = ({ slice }) => (
  <section className="bg-neutral-100">
    <div className="frame py pb-24">
      <h1 className="mb-10 text-center">{slice.primary.title}</h1>
      <MemberDirectory primary={slice.primary} items={slice.items} />
    </div>
  </section>
);

export default NetworkMembers;
