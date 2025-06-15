import aws from "astro-sst";

export default defineConfig({
  output: "server",
  adapter: aws()
});
