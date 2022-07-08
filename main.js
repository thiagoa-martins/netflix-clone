import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import LogoNetflix from "./src/components/LogoNetflix";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
    ${LogoNetflix()}
  `
);

