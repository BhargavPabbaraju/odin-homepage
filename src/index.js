import "./styles.css";
import "./header-styles.css";
import "./project-styles.css";
import "./footer-styles.css";

import portraitImg from "../assets/portrait.jpg";
import codeImg from "../assets/code-1.png";
import codeImg2 from "../assets/code-2.png";
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
  row.classList.add("project-row");
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

function renderContactInfo() {
  const phone = document.getElementById("phone-no");
  phone.replaceChildren();
  phone.appendChild(renderIcon(icons.CALL));
  const ph = document.createElement("span");
  ph.innerText = socials.SOCIALS.PHONE;
  phone.appendChild(ph);

  const mail = document.getElementById("email");
  mail.replaceChildren();
  mail.appendChild(renderIcon(icons.MAIL));
  const m = document.createElement("span");
  m.innerText = socials.SOCIALS.MAIL;
  mail.appendChild(m);
}

function renderInitialContent() {
  renderImage("portrait-img", portraitImg);
  renderImage("code-img", codeImg);
  socials.renderSocials();
  renderProjects();
  renderContactInfo();
}

renderInitialContent();

function changeCodeImage(query) {
  console.log(query);
  if (query.matches) {
    renderImage("code-img", codeImg2);
  } else {
    renderImage("code-img", codeImg);
  }
}

var query = window.matchMedia("(min-width: 1200px)");
changeCodeImage(query);
query.addEventListener("change", function () {
  changeCodeImage(query);
});
