import { SliceZone } from "@prismicio/react";
import { components } from "slices";

export const Footer = ({ footer }) => (
  <footer className="absolute bottom-0 flex h-72 w-full flex-col items-center justify-center bg-neutral-800 text-sm text-white">
    <div className="text-center">
      <div>{footer.data.text}</div>
      <div>
        <a
          href={`mailto:${footer.data.email}`}
          className="font-semibold text-green-soft hover:text-green-light"
        >
          {footer.data.email}
        </a>
      </div>
    </div>
    <SliceZone slices={footer.data.slices} components={components} />
    <div className="mt-3 text-center text-xs text-neutral-400">
      <div className="w-[17rem]">{footer.data.riuci_description}</div>
      <div className="mt-2">
        RIUCI {footer.data.bamboo} © {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);
