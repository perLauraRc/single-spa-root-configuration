import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@aizon-bigfinite/micro-header",
  app: () => System.import("@aizon-bigfinite/micro-header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
