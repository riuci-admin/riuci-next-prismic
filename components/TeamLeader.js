import { PrismicNextImage } from "@prismicio/next";

export const TeamLeader = ({ leader_photo, leader, leader_title }) => (
  <div className="card mx-auto mb-7 max-w-[20rem] bg-white shadow-xl lg:h-[21rem]">
    <figure className="flex justify-center pt-7">
      <PrismicNextImage field={leader_photo} width={100} />
    </figure>
    <div className="card-body leading-snug">
      <div className="font-semibold">{leader}</div>
      <div className="font-medium text-green-dark">{leader_title}</div>
    </div>
  </div>
);
