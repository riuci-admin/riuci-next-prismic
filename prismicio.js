import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";

import slicemachine from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(slicemachine.apiEndpoint);
/**
 * The project's Prismic Link Resolver. This function determines the URL for a
 * given Prismic document.
 *
 * A Link Resolver is used rather than a Route Resolver because we need to
 * resolve URLs for documents' `alternate_languages` items. The
 * `alternate_languages` array does not include URLs.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc) => {
  if (doc.type === "page") {
    return doc.uid === "home" || doc.uid === "inicio" ? "/" : `/${doc.uid}`;
  }
  return "/";
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = ({ req, ...config } = {}) => {
  return prismic.createClient(slicemachine.repositoryName, config);
};
