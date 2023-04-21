import { SliceZone } from "@prismicio/react";
import Image from "next/image";
import { components } from "slices";

export const Footer = ({ footer }) => (
  <footer>
    <div className="relative h-[20rem]">
      <Image
        className="w-full bg-neutral-800 object-cover"
        src={`${footer.data.background.url}&bri=100`}
        alt={footer.data.background.alt}
        fill
      />
      <div className="absolute left-1/2 top-1/2 w-[17rem] -translate-x-1/2 -translate-y-1/2 text-center text-sm text-white">
        <div className="pb-1">{footer.data.text}</div>
        <div>
          <a
            href={`mailto:${footer.data.email}`}
            className="font-semibold text-green-soft hover:text-green-light"
          >
            {footer.data.email}
          </a>
        </div>
        <div className="flex justify-center">
          <SliceZone slices={footer.data.slices} components={components} />
        </div>
        <div className="mt-4 text-xs text-neutral-400">
          <div>{footer.data.riuci_description}</div>
          <div>
            RIUCI {footer.data.bamboo} © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  </footer>
);
