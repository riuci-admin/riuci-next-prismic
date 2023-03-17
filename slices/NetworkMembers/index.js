import { MemberDirectory } from "components/MemberDirectory";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.NetworkMembersSlice} NetworkMembersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NetworkMembersSlice>} NetworkMembersProps
 * @param { NetworkMembersProps }
 */
const NetworkMembers = ({ slice }) => (
  <section className="py bg-white pb-16">
    <h1 className="mb-10 text-center">{slice.primary.title}</h1>
    <MemberDirectory
      country_header={slice.primary.country_header}
      institution_header={slice.primary.institution_header}
      delegate_header={slice.primary.delegate_header}
      name_header={slice.primary.name_header}
      email_header={slice.primary.email_header}
      items={slice.items}
    />
  </section>
);

export default NetworkMembers;
