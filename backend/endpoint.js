//endpoint.js
import { renderBreadcrumbs } from './breadcrumbs.js';
import { loadTodosForUser } from './TODO.js';
import { loadPostsForUser } from './Posts.js';

export function handleHashNavigation() {
  const hash = window.location.hash.replace("#", "");
  const [prefix, idStr, view] = hash.split(":");

  const todoContainer = document.getElementById("todo");
  if (todoContainer) {
    todoContainer.innerHTML = "";
  }

  const nav = document.getElementById("topNavMenu");

  if (prefix === "userID" && !isNaN(parseInt(idStr))) {
    const userId = parseInt(idStr);
    const userEl = document.querySelector(`[data-user-id="${userId}"]`);
    const username = userEl ? userEl.textContent : `Пользователь ${userId}`;

    window.currentUserId = userId;
    window.currentUsername = username;
    window.currentView = view || null;

    if (nav) nav.style.display = "flex"; // ✅ показать меню

    if (view === "TODO") {
      loadTodosForUser(userId, "todo");
    } else if (view === "Posts") {
      loadPostsForUser(userId, "todo");
    }

    renderBreadcrumbs(userId, username, window.currentView);
  } else {
    window.currentUserId = null;
    window.currentUsername = null;
    window.currentView = null;

    if (nav) nav.style.display = "none"; // ✅ скрыть меню только если пользователь не выбран

    renderBreadcrumbs();
  }
}
