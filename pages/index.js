import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { Layout } from "components/Layout";
import Head from "next/head";
import { createClient } from "prismicio";
import { components } from "slices";

export default function Index({ locale, page, navigation, settings, footer }) {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
      footer={footer}
    >
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
        <meta name="description" content={page.data.description} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_HOST}/${locale}`} />
        <meta property="og:title" content={prismicH.asText(page.data.title)} />
        <meta property="og:description" content={page.data.description} />
        <meta property="og:image" content={page.data.image.url} />
        <meta property="og:type" content="website" />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const client = createClient();
  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });
  return {
    props: {
      locale,
      page,
      navigation,
      settings,
      footer,
    },
  };
}
