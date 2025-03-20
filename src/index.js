import "./styles.css";
import "./header-styles.css";
import "./project-styles.css";
import "./footer-styles.css";

import portraitImg from "../assets/portrait.jpg";
import * as socials from "./socials";
import { projects } from "./projects";
import { icons, renderIcon } from "./icons";

function renderImage(id, image) {
  const img = document.getElementById(id);
  img.src = image;
}

function renderProject(project) {
  const div = document.createElement("div");
  div.classList.add("project");

  const img = document.createElement("img");
  img.src = project.screenshot;
  div.appendChild(img);

  const row = document.createElement("div");
  div.appendChild(row);

  const name = document.createElement("span");
  name.classList.add("project-name");
  name.innerText = project.name;
  row.appendChild(name);

  const links = document.createElement("div");
  links.classList.add("project-links");
  row.appendChild(links);

  const github = socials.renderSocial(socials.SOCIALS.GITHUB, project.github);
  github.classList.add("project-github");
  links.appendChild(github);

  const preview = renderIcon(icons.OPEN_IN_NEW, project.preview, true);
  preview.classList.add("project-preview");
  links.appendChild(preview);

  const desc = document.createElement("div");
  desc.classList.add("project-desc");
  div.appendChild(desc);
  desc.innerText = project.desc;

  return div;
}

function renderProjects() {
  const div = document.getElementById("projects");
  div.replaceChildren();
  projects.forEach((project) => {
    div.appendChild(renderProject(project));
  });
}

function renderInitialContent() {
  renderImage("portrait-img", portraitImg);
  socials.renderSocials();
  renderProjects();
}

renderInitialContent();
