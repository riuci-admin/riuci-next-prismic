import { TeamMember } from "components/TeamMember";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ManageKnowledgeTeamSlice} ManageKnowledgeTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ManageKnowledgeTeamSlice>} ManageKnowledgeTeamProps
 * @param { ManageKnowledgeTeamProps }
 */
const ManageKnowledgeTeam = ({ slice }) => (
  <section className="py bg-neutral-100 pb-16">
    <div className="frame">
      <h2 className="mb-7 text-center md:mb-10">{slice.primary.title}</h2>
      <div className="flex flex-wrap justify-center gap-9 md:gap-14">
        <TeamMember
          photo={slice.primary.coordinator_photo}
          member={slice.primary.coordinator}
          title={slice.primary.coordinator_title}
        />
        {slice.items.map((item, i) => (
          <TeamMember key={i} photo={item.member_photo} member={item.member} />
        ))}
      </div>
    </div>
  </section>
);

export default ManageKnowledgeTeam;
