export const icons = {
  OPEN_IN_NEW: "open_in_new",
};

export function renderIcon(iconText, iconLink = null, external = false) {
  const span = renderSpan(iconText);
  if (iconLink === null) {
    return span;
  }
  const link = document.createElement("a");
  link.href = iconLink;
  link.appendChild(span);
  if (external) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  return link;
}

function renderSpan(iconText) {
  const span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.innerText = iconText;
  return span;
}
