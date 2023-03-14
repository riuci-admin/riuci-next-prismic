import { PrismicRichText } from "@prismicio/react";
import { MemberDirectory } from "components/MemberDirectory";
import { TeamCoordinator } from "components/TeamCoordinator";
import { TeamLeader } from "components/TeamLeader";
import { TeamMember } from "components/TeamMember";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ManagementTeamSlice} ManagementTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ManagementTeamSlice>} ManagementTeamProps
 * @param { ManagementTeamProps }
 */
const ManagementTeam = ({ slice }) => (
  <section className="bg-neutral-100">
    <div className="frame py">
      <h1>{slice.primary.title}</h1>
      <div className="mx-auto max-w-3xl">
        <PrismicRichText field={slice.primary.description} />
      </div>
      <h2 className="mt-10 text-center">{slice.primary.team_title}</h2>
      <TeamCoordinator
        coordinator_photo={slice.primary.coordinator_photo}
        coordinator={slice.primary.coordinator}
        coordinator_title={slice.primary.coordinator_title}
      />
      <div className="frame mt-5 grid grid-cols-1 gap-7 py-7 text-center lg:grid-cols-3">
        <div>
          <TeamLeader
            leader_photo={slice.primary.gkt_leader_photo}
            leader={slice.primary.gkt_leader}
            leader_title={slice.primary.gkt_leader_title}
          />
          <TeamMember
            member_photo={slice.primary.gkt_member_1_photo}
            member={slice.primary.gkt_member_1}
          />
          <TeamMember
            member_photo={slice.primary.gkt_member_2_photo}
            member={slice.primary.gkt_member_2}
          />
          <TeamMember
            member_photo={slice.primary.gkt_member_3_photo}
            member={slice.primary.gkt_member_3}
          />
          <TeamMember
            member_photo={slice.primary.gkt_member_4_photo}
            member={slice.primary.gkt_member_4}
          />
          <TeamMember
            member_photo={slice.primary.gkt_member_5_photo}
            member={slice.primary.gkt_member_5}
          />
        </div>

        <div>
          <TeamLeader
            leader_photo={slice.primary.ekt_leader_photo}
            leader={slice.primary.ekt_leader}
            leader_title={slice.primary.ekt_leader_title}
          />
          <TeamMember
            member_photo={slice.primary.ekt_member_1_photo}
            member={slice.primary.ekt_member_1}
          />
          <TeamMember
            member_photo={slice.primary.ekt_member_2_photo}
            member={slice.primary.ekt_member_2}
          />
          <TeamMember
            member_photo={slice.primary.ekt_member_3_photo}
            member={slice.primary.ekt_member_3}
          />
          <TeamMember
            member_photo={slice.primary.ekt_member_4_photo}
            member={slice.primary.ekt_member_4}
          />
          <TeamMember
            member_photo={slice.primary.ekt_member_5_photo}
            member={slice.primary.ekt_member_5}
          />
          <TeamMember
            member_photo={slice.primary.ekt_member_6_photo}
            member={slice.primary.ekt_member_6}
          />
        </div>

        <div>
          <TeamLeader
            leader_photo={slice.primary.mkt_leader_photo}
            leader={slice.primary.mkt_leader}
            leader_title={slice.primary.mkt_leader_title}
          />
          <TeamMember
            member_photo={slice.primary.mkt_member_1_photo}
            member={slice.primary.mkt_member_1}
          />
          <TeamMember
            member_photo={slice.primary.mkt_member_2_photo}
            member={slice.primary.mkt_member_2}
          />
          <TeamMember
            member_photo={slice.primary.mkt_member_3_photo}
            member={slice.primary.mkt_member_3}
          />
          <TeamMember
            member_photo={slice.primary.mkt_member_4_photo}
            member={slice.primary.mkt_member_4}
          />
          <TeamMember
            member_photo={slice.primary.mkt_member_5_photo}
            member={slice.primary.mkt_member_5}
          />
        </div>
      </div>

      <MemberDirectory
        directory_title={slice.primary.directory_title}
        country_header={slice.primary.country_header}
        institution_header={slice.primary.institution_header}
        delegate_header={slice.primary.delegate_header}
        name_header={slice.primary.name_header}
        email_header={slice.primary.email_header}
        items={slice.items}
      />
    </div>
  </section>
);

export default ManagementTeam;
