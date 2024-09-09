import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const baseUrl = "https://www.2mstudio84.fr";

  const staticPages = [
    "",
    "/massage-bien-etre",
    "/massage-sportif",
    "/mobilite-massage",
    "/coaching-massage",
    "/small-group",
    "/autonomie-mobilite",
    "/about-us",
    "/contact",
  ];

  const fields: ISitemapField[] = staticPages.map((page) => ({
    loc: `${baseUrl}${page}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));

  // Génération du sitemap
  const sitemap = await getServerSideSitemap(fields, ctx);

  // Extraction des propriétés pertinentes du sitemap
  const { body, headers } = sitemap;

  // Retour d'un objet compatible avec GetServerSideProps
  return {
    props: {}, // Next.js attend un objet props, même vide
    // Ajout des propriétés du sitemap comme métadonnées supplémentaires
    sitemapBody: body,
    sitemapHeaders: headers,
  };
};

// Default export to prevent next.js errors
export default function Sitemap() {}
