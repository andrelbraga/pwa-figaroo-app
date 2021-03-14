import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "@/main";

/* Disable Workbox Mode Debug */
declare const self: ServiceWorkerGlobalScope;
self.__WB_DISABLE_DEV_LOGS =
  process.env.NODE_ENV === "development" ? false : true;
/* ---- */

ReactDOM.render(<App />, document.getElementById("root"));

/* Register do service worker */
serviceWorkerRegistration.register();
