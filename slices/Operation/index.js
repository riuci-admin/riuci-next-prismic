import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.OperationSlice} OperationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OperationSlice>} OperationProps
 * @param { OperationProps }
 */
const Operation = ({ slice }) => (
  <section className="frame py md:max-w-2xl lg:max-w-5xl">
    <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2">
      <h1 className="text-center text-green-dark lg:col-span-2">
        {slice.primary.title}
      </h1>
      <div className="mx-auto">
        <PrismicNextImage field={slice.primary.image} />
      </div>
      <div>
        <PrismicRichText field={slice.primary.text} />
      </div>
    </div>
    <div className="mt-9 grid items-center gap-7 lg:grid-cols-2">
      <h2 className="mt-7 text-center text-green-dark lg:col-span-2">
        {slice.primary.manifest_title}
      </h2>
      <div className="order-1 lg:order-none">
        <PrismicRichText field={slice.primary.manifest_text} />
      </div>
      <PrismicNextImage field={slice.primary.manifest_image} />
    </div>
    <div className="mt-4">
      <table className="table-zebra mx-auto table">
        <tbody>
          {slice?.items?.map((item, i) => (
            <tr key={i}>
              <td className="max-w-[7rem] whitespace-normal md:max-w-full">
                {item.member_name}
              </td>
              <td className="max-w-md whitespace-normal">
                {item.member_place}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="my-7 flex flex-col items-center">
      <a
        role="button"
        className="btn-primary btn text-white hover:text-green-soft"
        href={slice.primary.manifest_link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {slice.primary.manifest_document}
      </a>
    </div>
  </section>
);

export default Operation;
