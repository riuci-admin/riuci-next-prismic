import { PrismicNextImage } from "@prismicio/next";

export const TeamCoordinator = ({
  coordinator_photo,
  coordinator,
  coordinator_title,
}) => (
  <div className="card mx-auto max-w-[23rem] bg-white shadow-xl">
    <figure className="flex justify-center pt-7">
      <PrismicNextImage field={coordinator_photo} width={120} />
    </figure>
    <div className="card-body text-center leading-snug">
      <div className="font-semibold">{coordinator}</div>
      <div className="font-semibold text-green-dark">{coordinator_title}</div>
    </div>
  </div>
);
