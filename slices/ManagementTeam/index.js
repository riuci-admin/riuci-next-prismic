import { PrismicRichText } from "@prismicio/react";
import { MemberDirectory } from "components/MemberDirectory";
import { TeamMember } from "components/TeamMember";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.ManagementTeamSlice} ManagementTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ManagementTeamSlice>} ManagementTeamProps
 * @param { ManagementTeamProps }
 */
const ManagementTeam = ({ slice }) => (
  <>
    <section className="py bg-white">
      <h1>{slice.primary.title}</h1>
      <div className="mx-auto max-w-3xl">
        <PrismicRichText field={slice.primary.description} />
      </div>
    </section>

    <section className="bg-white pt-3 pb-16">
      <div className="frame">
        <h2 className="mb-12 text-center">{slice.primary.team_title}</h2>
        <div className="flex flex-wrap justify-center gap-7 md:gap-14">
          <TeamMember
            photo={slice.primary.coordinator_photo}
            member={slice.primary.coordinator}
            title={slice.primary.coordinator_title}
          />
          <TeamMember
            photo={slice.primary.gkt_leader_photo}
            member={slice.primary.gkt_leader}
          />
          <TeamMember
            photo={slice.primary.ekt_leader_photo}
            member={slice.primary.ekt_leader}
          />
          <TeamMember
            photo={slice.primary.mkt_leader_photo}
            member={slice.primary.mkt_leader}
          />
          <TeamMember
            photo={slice.primary.ekt_member_1_photo}
            member={slice.primary.ekt_member_1}
          />
        </div>
      </div>
    </section>

    <section className="py bg-neutral-100 pb-16">
      <div className="frame">
        <h2 className="mb-12 text-center">{slice.primary.gkt_title}</h2>
        <div className="flex flex-wrap justify-center gap-7 md:gap-14">
          <TeamMember
            photo={slice.primary.gkt_leader_photo}
            member={slice.primary.gkt_leader}
            title={slice.primary.gkt_leader_title}
          />
          <TeamMember
            photo={slice.primary.gkt_member_1_photo}
            member={slice.primary.gkt_member_1}
          />
          <TeamMember
            photo={slice.primary.gkt_member_2_photo}
            member={slice.primary.gkt_member_2}
          />
          <TeamMember
            photo={slice.primary.gkt_member_3_photo}
            member={slice.primary.gkt_member_3}
          />
          <TeamMember
            photo={slice.primary.gkt_member_4_photo}
            member={slice.primary.gkt_member_4}
          />
          <TeamMember
            photo={slice.primary.gkt_member_5_photo}
            member={slice.primary.gkt_member_5}
          />
        </div>
      </div>
    </section>

    <section className="py bg-white pb-16">
      <div className="frame">
        <h2 className="mb-12 text-center">{slice.primary.ekt_title}</h2>
        <div className="flex flex-wrap justify-center gap-7 md:gap-14">
          <TeamMember
            photo={slice.primary.ekt_leader_photo}
            member={slice.primary.ekt_leader}
            title={slice.primary.ekt_leader_title}
          />
          <TeamMember
            photo={slice.primary.ekt_member_1_photo}
            member={slice.primary.ekt_member_1}
          />
          <TeamMember
            photo={slice.primary.ekt_member_2_photo}
            member={slice.primary.ekt_member_2}
          />
          <TeamMember
            photo={slice.primary.ekt_member_3_photo}
            member={slice.primary.ekt_member_3}
          />
          <TeamMember
            photo={slice.primary.ekt_member_4_photo}
            member={slice.primary.ekt_member_4}
          />
          <TeamMember
            photo={slice.primary.ekt_member_5_photo}
            member={slice.primary.ekt_member_5}
          />
          <TeamMember
            photo={slice.primary.ekt_member_6_photo}
            member={slice.primary.ekt_member_6}
          />
        </div>
      </div>
    </section>

    <section className="py bg-neutral-100 pb-16">
      <div className="frame">
        <h2 className="mb-12 text-center">{slice.primary.mkt_title}</h2>
        <div className="flex flex-wrap justify-center gap-7 md:gap-14">
          <TeamMember
            photo={slice.primary.mkt_leader_photo}
            member={slice.primary.mkt_leader}
            title={slice.primary.mkt_leader_title}
          />
          <TeamMember
            photo={slice.primary.mkt_member_1_photo}
            member={slice.primary.mkt_member_1}
          />
          <TeamMember
            photo={slice.primary.mkt_member_2_photo}
            member={slice.primary.mkt_member_2}
          />
          <TeamMember
            photo={slice.primary.mkt_member_3_photo}
            member={slice.primary.mkt_member_3}
          />
          <TeamMember
            photo={slice.primary.mkt_member_4_photo}
            member={slice.primary.mkt_member_4}
          />
          <TeamMember
            photo={slice.primary.mkt_member_5_photo}
            member={slice.primary.mkt_member_5}
          />
        </div>
      </div>
    </section>

    <section className="py bg-white pb-16">
      <h3 className="mb-7 text-center">{slice.primary.directory_title}</h3>
      <MemberDirectory
        country_header={slice.primary.country_header}
        institution_header={slice.primary.institution_header}
        delegate_header={slice.primary.delegate_header}
        name_header={slice.primary.name_header}
        email_header={slice.primary.email_header}
        items={slice.items}
      />
    </section>
  </>
);

export default ManagementTeam;
