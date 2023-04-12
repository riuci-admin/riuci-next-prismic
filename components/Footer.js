import { SliceZone } from "@prismicio/react";
import { components } from "slices";

export const Footer = ({ footer }) => (
  <footer
    style={{
      backgroundImage: `url('${footer.data.background.url}&bri=100')`,
    }}
    className="footer footer-center w-full bg-neutral-800 bg-center bg-no-repeat"
    role="img"
    aria-label={footer.data.background.alt}
  >
    <div className="w-[17rem] gap-0 py-20 text-sm text-white">
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
        <div>{footer.data.riuci_description}</div>
        <div>
          <div>
            RIUCI {footer.data.bamboo} © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  </footer>
);
