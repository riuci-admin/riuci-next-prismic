import { SliceZone } from "@prismicio/react";
import { components } from "slices";

export const Footer = ({ footer }) => (
  <footer
    style={{
      backgroundImage: `url('${footer.data.background.url}&bri=100')`,
    }}
    className="absolute bottom-0 flex h-64 w-full flex-col items-center justify-center bg-neutral-800 bg-center text-sm text-white md:h-72"
  >
    <div className="text-center">
      <div className="pb-1">{footer.data.text}</div>
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
    <div className="mt-4 text-center text-xs text-neutral-400">
      <div className="w-[17rem]">{footer.data.riuci_description}</div>
      <div className="mt-2">RIUCI {footer.data.bamboo}</div>
      <div>© {new Date().getFullYear()}</div>
    </div>
  </footer>
);
