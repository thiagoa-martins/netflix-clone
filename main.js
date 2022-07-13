import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import SignedSection from "./src/objects/SignedSection";
import StoryHeader from "./src/objects/StoryHeader";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
   ${SignedSection()}
  `
);

