//breadcrumbs.js
import { createElementWithText, setEvent } from './htmlGenerater.js';

export function renderBreadcrumbs(userId = null, username = null, view = null) {
  const container = document.getElementById("breadcrumbsMenu");
  if (!container) return;

  container.innerHTML = "";

  // Главная
  const home = createElementWithText("span", container, "breadcrumbItem", "Main");
  setEvent("click", () => {
    window.location.hash = "";
    document.getElementById("todo").innerHTML = "";
    window.currentUserId = null;
    window.currentUsername = null;
    window.currentView = null;

    const nav = document.getElementById("topNavMenu");
    if (nav) nav.style.display = "none";

    renderBreadcrumbs();
  }, home);

  // Имя пользователя
  if (userId && username) {
    const userCrumb = createElementWithText("span", container, "breadcrumbItem", "/" + username);
    setEvent("click", () => {
      window.location.hash = `#userID:${userId}`;
      document.getElementById("todo").innerHTML = "";
      window.currentView = null;

      const nav = document.getElementById("topNavMenu");
      if (nav) nav.style.display = "flex";

      renderBreadcrumbs(userId, username);
    }, userCrumb);

    // Выбранный режим (TODO или Posts)
    if (view) {
      createElementWithText("span", container, "breadcrumbItem", "/" + view);
    }
  }
}
