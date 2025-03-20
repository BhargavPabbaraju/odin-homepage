export const SOCIALS = {
  GITHUB: {
    icon: "devicon-github-original",
    name: "Github",
    link: "https://github.com/BhargavPabbaraju",
  },
  LINKEDIN: {
    icon: "devicon-linkedin-plain",
    name: "Linkedin",
    link: "https://linkedin.com/in/BhargavPabbaraju",
  },
  ITCH: {
    icon: "devicon-itch-io",
    name: "Itch",
    link: "https://bhargavpabbaraju.itch.io/",
  },
};

export function renderSocial(social, customLink = null) {
  const i = document.createElement("i");
  i.classList.add(social.icon);
  i.classList.add("dev-icon");

  const link = document.createElement("a");

  link.href = customLink === null ? social.link : customLink;

  link.appendChild(i);

  return link;
}

export function renderSocials() {
  const divs = document.getElementsByClassName("socials");
  Array.from(divs).forEach((div) => {
    div.replaceChildren();
    Object.values(SOCIALS).forEach((social) => {
      div.appendChild(renderSocial(social));
    });
  });
}
