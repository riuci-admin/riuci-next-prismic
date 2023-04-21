const prismic = require("@prismicio/client");
const sm = require("./sm.json");

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    reactStrictMode: true,
    images: {
      domains: [
        "riuci.cdn.prismic.io",
        "images.prismic.io",
        "cdnjs.cloudflare.com",
      ],
    },
    i18n: {
      locales,
      defaultLocale: "es-es",
    },
  };
};

module.exports = nextConfig;
