import { websocket } from "./websocket";
import { navigation } from "./navigation";

document.addEventListener("DOMContentLoaded", () =>
  [navigation, websocket].forEach((fn) => fn.apply(null))
);
