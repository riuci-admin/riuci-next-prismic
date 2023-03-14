import { PrismicNextImage } from "@prismicio/next";

export const TeamMember = ({ member_photo, member }) => (
  <div className="card mx-auto mb-7 max-w-[18rem] bg-white shadow-xl lg:h-60">
    <figure className="flex justify-center pt-7">
      <PrismicNextImage field={member_photo} width={80} />
    </figure>
    <div className="card-body items-center px-7 pt-4 pb-7 text-center lg:py-4">
      <div className="font-medium leading-snug">{member}</div>
    </div>
  </div>
);
