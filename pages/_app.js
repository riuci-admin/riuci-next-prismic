import "styles/globals.css";
import "styles/icons.css";

import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import Link from "next/link";
import { linkResolver, repositoryName } from "prismicio";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={Link} linkResolver={linkResolver}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
