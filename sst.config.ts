/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "personal-site",
            removal: input?.stage === "production" ? "retain" : "remove",
            protect: ["production"].includes(input?.stage),
            home: "aws",
        };
    },
    async run() {
        new sst.aws.StaticSite("PersonalSite", {
            errorPage: "404.html",
            build: {
                command: "yarn build",
                output: "public",
            },
            domain: {
                name: "adamdlear.com",
                redirects: ["www.adamdlear.com"],
            },
        });
    },
});
