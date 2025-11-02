import { createElementWithText, setEvent } from './htmlGenerater.js';


export function renderBreadcrumbs(userId = null, username = null) {
  const container = document.getElementById("breadcrumbsMenu");
  if (!container) return;

  container.innerHTML = "";

  const home = createElementWithText("span", container, "breadcrumbItem", "Main");
  setEvent("click", () => {
    window.location.hash = "";
    document.getElementById("todo").innerHTML = "";
    renderBreadcrumbs(); // перерисовать без пользователя
  }, home);

  if (userId && username) {
    //createElementWithText("span", container, null, "/");
    createElementWithText("span", container, "breadcrumbItem", "/"+username);
  }
}

