import { registerApplication, start } from "single-spa";
import { Estimation } from "./constants/estimation";

registerApplication({
  name: "@aizon-bigfinite/micro-header",
  app: () => System.import("@aizon-bigfinite/micro-header"),
  activeWhen: ["/"],
  customProps: {
    authToken: "123456789x0",
    agileEstimation: Estimation.StoryPoints,
  },
});

registerApplication({
  name: "@aizon-bigfinite/micro-home",
  app: () =>
    System.import(
      "@aizon-bigfinite/micro-home"
    ),
    activeWhen: [(location) => location.pathname === "/"],
    customProps: {
      authToken: "123456789x0",
      agileEstimation: Estimation.StoryPoints,
    },
});



registerApplication({
  name: "@aizon-bigfinite/micro-pointing-poker",
  app: () => System.import("@aizon-bigfinite/micro-pointing-poker"),
  activeWhen: ["/pointing-poker"],
  customProps: {
    authToken: "123456789x0",
    agileEstimation: Estimation.StoryPoints,
  },
});

start({
  urlRerouteOnly: true,
});
