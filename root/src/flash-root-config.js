import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ({ pathname }) => pathname === '/root',
});

registerApplication({
  name: "@flash/header",
  app: () => System.import("@flash/header"),
  activeWhen: ['/'],
});

registerApplication({
  name: "@flash/user",
  app: () => System.import("@flash/user"),
  activeWhen: ({ pathname }) => pathname === '/users',
});

registerApplication({
  name: "@flash/project",
  app: () => System.import("@flash/project"),
  activeWhen: ({ pathname }) => pathname === '/projects',
});

start({
  urlRerouteOnly: true,
});
