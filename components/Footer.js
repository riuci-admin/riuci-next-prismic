import { SliceZone } from "@prismicio/react";
import Image from "next/image";
import { components } from "slices";

export const Footer = ({ footer }) => (
  <footer>
    <div className="relative flex h-[20rem] w-full items-center justify-center overflow-hidden">
      <Image
        src={`${footer.data.background.url}&bri=100`}
        alt={footer.data.background.alt}
        className="bg-neutral-800 object-cover"
        fill
      />
      <div className="z-0 flex w-[17rem] flex-col items-center justify-center text-center text-sm text-white">
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
