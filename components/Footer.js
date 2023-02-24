import { SliceZone } from "@prismicio/react";
import { components } from "slices";

export const Footer = ({ footer }) => (
  <footer className="absolute bottom-0 flex h-48 w-full flex-col items-center justify-center bg-gray-50 text-sm">
    <div>
      <span>{footer.data.text}</span>
      <a
        href={`mailto:${footer.data.email}`}
        className="ml-1 font-semibold text-green-dark hover:text-green-soft"
      >
        {footer.data.email}
      </a>
    </div>
    <SliceZone slices={footer.data.slices} components={components} />
    <div className="text-xs">
      RIUCI - Copyright © {new Date().getFullYear()}
    </div>
  </footer>
);
