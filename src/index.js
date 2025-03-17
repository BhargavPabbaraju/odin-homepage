import "./styles.css";
import portraitImg from "../assets/portrait.jpg";
import { renderSocials } from "./socials";

function renderImage(id, image) {
  const img = document.getElementById(id);
  img.src = image;
}

function renderInitialContent() {
  renderImage("portrait-img", portraitImg);
  renderSocials();
}

renderInitialContent();
