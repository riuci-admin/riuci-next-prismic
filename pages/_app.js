import "styles/globals.css";
import "styles/icons.css";

import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import { richTextComponents } from "components/RichTextComponents";
import Link from "next/link";
import { linkResolver, repositoryName } from "prismicio";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={Link}
      linkResolver={linkResolver}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
