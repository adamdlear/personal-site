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
        new sst.aws.Astro("PersonalSite", {
            domain: {
                name: "adamdlear.com",
                redirects: ["www.adamdlear.com"],
                dns: sst.aws.dns({ zone: "Z08100281IZ4D4IAXD0LA" }),
            },
        });
    },
});
