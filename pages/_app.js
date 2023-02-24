import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, linkResolver } from "prismicio";

import "styles/globals.css";
import "styles/icons.css";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={Link} linkResolver={linkResolver}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
