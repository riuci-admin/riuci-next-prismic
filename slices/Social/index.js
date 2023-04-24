import Image from "next/image";
import React from "react";
/**
 * @typedef {import("@prismicio/client").Content.SocialSlice} SocialSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SocialSlice>} SocialProps
 * @param { SocialProps }
 */
const Social = ({ slice }) => (
  <div className="flex flex-row gap-4 pb-3 pt-1">
    {slice.items.map((item, i) => (
      <div key={i}>
        <a
          href={item.platform_link.url}
          alt={item.platform_alt_text}
          title={item.platform_alt_text}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-green-soft"
        >
          <Image
            src={`svg/${item.icon}.svg`}
            alt={item.icon}
            width={24}
            height={24}
            className="mt-1 h-6"
          />
        </a>
      </div>
    ))}
  </div>
);

export default Social;
