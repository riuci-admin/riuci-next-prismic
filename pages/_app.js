import "styles/globals.css";

import { PrismicProvider } from "@prismicio/react";
import { Analytics } from "@vercel/analytics/react";
import { richTextComponents } from "components/RichTextComponents";
import Link from "next/link";
import { linkResolver } from "prismicio";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={Link}
      linkResolver={linkResolver}
      richTextComponents={richTextComponents}
    >
      <Component {...pageProps} />
      <Analytics />
    </PrismicProvider>
  );
}
