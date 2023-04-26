const prismic = require("@prismicio/client");
const slicemachine = require("./slicemachine.config.json");

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(slicemachine.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    reactStrictMode: true,
    images: {
      domains: ["images.prismic.io"],
    },
    i18n: {
      locales,
      defaultLocale: "es-es",
    },
  };
};

module.exports = nextConfig;
