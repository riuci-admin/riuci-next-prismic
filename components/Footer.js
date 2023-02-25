import { SliceZone } from "@prismicio/react";
import { components } from "slices";

export const Footer = ({ footer }) => (
  <footer className="absolute bottom-0 flex h-72 w-full flex-col items-center justify-center bg-neutral-800 text-sm text-white">
    <div>
      <span>{footer.data.text}</span>
      <a
        href={`mailto:${footer.data.email}`}
        className="ml-1 font-semibold text-green-soft hover:text-green-light"
      >
        {footer.data.email}
      </a>
    </div>
    <SliceZone slices={footer.data.slices} components={components} />
    <div className="text-center text-xs">
      <div className="w-72">{footer.data.riuci_description}</div>
      <div className="mt-3">
        RIUCI {footer.data.bamboo} © {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);
