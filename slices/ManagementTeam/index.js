import { PrismicRichText } from "@prismicio/react";
import { TeamMember } from "components/TeamMember";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ManagementTeamSlice} ManagementTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ManagementTeamSlice>} ManagementTeamProps
 * @param { ManagementTeamProps }
 */
const ManagementTeam = ({ slice }) => (
  <section className="py bg-white">
    <h1>{slice.primary.title}</h1>
    <div className="mx-auto max-w-3xl">
      <PrismicRichText field={slice.primary.description} />
    </div>
    <div className="frame pt-14 pb-5">
      <h2 className="mb-10 text-center">{slice.primary.team_title}</h2>
      <div className="flex flex-wrap justify-center gap-7 md:gap-14">
        <TeamMember
          photo={slice.primary.coordinator_photo}
          member={slice.primary.coordinator}
          title={slice.primary.coordinator_title}
        />
        {slice?.items?.map((item, i) => (
          <TeamMember key={i} photo={item.member_photo} member={item.member} />
        ))}
      </div>
    </div>
  </section>
);

export default ManagementTeam;
