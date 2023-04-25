import "styles/globals.css";

import { PrismicProvider } from "@prismicio/react";
import { richTextComponents } from "components/RichTextComponents";
import Link from "next/link";
import Script from "next/script";
import { linkResolver } from "prismicio";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={Link}
      linkResolver={linkResolver}
      richTextComponents={richTextComponents}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6V3WZD4B9L"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6V3WZD4B9L');
        `}
      </Script>
      <Component {...pageProps} />
    </PrismicProvider>
  );
}
