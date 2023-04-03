import { PrismicRichText } from "@prismicio/react";
import { TeamMember } from "components/TeamMember";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ManagementTeamSlice} ManagementTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ManagementTeamSlice>} ManagementTeamProps
 * @param { ManagementTeamProps }
 */
const ManagementTeam = ({ slice }) => (
  <section className="bg-white">
    <div className="frame py">
      <h1>{slice.primary.title}</h1>
      <div className="mx-auto max-w-3xl">
        <PrismicRichText field={slice.primary.description} />
      </div>
      <div className="pb-5 pt-12">
        <h2 className="mb-7 text-center md:mb-10">
          {slice.primary.team_title}
        </h2>
        <div className="flex flex-wrap justify-center gap-9 md:gap-14">
          <TeamMember
            photo={slice.primary.coordinator_photo}
            member={slice.primary.coordinator}
            title={slice.primary.coordinator_title}
          />
          {slice?.items?.map((item, i) => (
            <TeamMember
              key={i}
              photo={item.member_photo}
              member={item.member}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ManagementTeam;
