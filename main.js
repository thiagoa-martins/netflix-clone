import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import JoinNetflix from "./src/objects/JoinNetflix";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${JoinNetflix()}
  `
);

