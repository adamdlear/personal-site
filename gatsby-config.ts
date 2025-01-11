import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `My Personal Portfolio`,
        siteUrl: `https://www.adam-lear.com`,
    },
    plugins: ["gatsby-plugin-postcss"],
};

export default config;
