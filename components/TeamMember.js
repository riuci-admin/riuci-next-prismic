import { PrismicNextImage } from "@prismicio/next";

export const TeamMember = ({ photo, member, title }) => (
  <div className="card max-w-[19rem] border-[1px] border-neutral-100 bg-white shadow-xl">
    <div className="avatar mt-5 flex justify-center">
      <div className="w-36 rounded-full">
        <PrismicNextImage
          field={photo}
          imgixParams={{
            fit: "facearea",
            facepad: 4,
          }}
        />
      </div>
    </div>
    <div className="card-body pt-5 text-center leading-tight md:h-36">
      <div className="font-medium">{member}</div>
      {title && (
        <div className="mt-2 text-sm font-semibold text-green-dark">
          {title}
        </div>
      )}
    </div>
  </div>
);
