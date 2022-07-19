import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import SignedSection from "./src/objects/SignedSection";
import EndCard from "./src/components/EndCard";
import StoryCards from "./src/objects/StoryCards";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
   ${SignedSection()}
   ${EndCard()}
   ${StoryCards()}
   ${EndCard()}
  `
);

