import { SliceZone } from "@prismicio/react";
import { components } from "slices";

export const Footer = ({ footer }) => (
  <footer
    style={{
      backgroundImage: `url('${footer.data.background.url}&bri=100')`,
    }}
    className="footer footer-center h-64 w-full gap-0 bg-neutral-800 bg-center bg-no-repeat py-10 text-sm text-white md:h-72"
    role="img"
    aria-label={footer.data.background.alt}
  >
    <div className="pb-1">{footer.data.text}</div>
    <div>
      <a
        href={`mailto:${footer.data.email}`}
        className="font-semibold text-green-soft hover:text-green-light"
      >
        {footer.data.email}
      </a>
    </div>
    <SliceZone slices={footer.data.slices} components={components} />
    <div className="mt-4 text-xs text-neutral-400">
      <div className="w-[17rem]">{footer.data.riuci_description}</div>
      <div>
        <div>RIUCI {footer.data.bamboo}</div>
        <div>© {new Date().getFullYear()}</div>
      </div>
    </div>
  </footer>
);
