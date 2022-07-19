import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import SignedSection from "./src/objects/SignedSection";
import EndCard from "./src/components/EndCard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
   ${SignedSection()}
   ${EndCard()}
  `
);

