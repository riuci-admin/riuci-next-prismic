import { TeamMember } from "components/TeamMember";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ExchangeKnowledgeTeamSlice} ExchangeKnowledgeTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExchangeKnowledgeTeamSlice>} ExchangeKnowledgeTeamProps
 * @param { ExchangeKnowledgeTeamProps }
 */
const ExchangeKnowledgeTeam = ({ slice }) => (
  <section className="bg-white">
    <div className="frame py pb-16">
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

export default ExchangeKnowledgeTeam;
