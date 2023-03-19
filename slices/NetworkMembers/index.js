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
      <MemberDirectory
        country_header={slice.primary.country_header}
        institution_header={slice.primary.institution_header}
        delegate_header={slice.primary.delegate_header}
        name_header={slice.primary.name_header}
        email_header={slice.primary.email_header}
        all={slice.primary.all}
        search={slice.primary.search}
        records={slice.primary.records}
        items={slice.items}
      />
    </div>
  </section>
);

export default NetworkMembers;
