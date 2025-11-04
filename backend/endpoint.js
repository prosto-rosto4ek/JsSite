//endpoint.js

import { renderBreadcrumbs } from './breadcrumbs.js';
import { loadTodosForUser } from './TODO.js';
import { loadPostsForUser, loadPostsToSidebar } from './Posts.js';
import { loadCommentsForPost } from './Comments.js';
import { loadUsersToMenu } from './Users.js';

export async function handleHashNavigation() {
  const hash = window.location.hash.replace("#", "");
  const [prefix, idStr, view, postPrefix, postIdStr] = hash.split(":");

  const todoContainer = document.getElementById("todo");
  if (todoContainer) {
    todoContainer.innerHTML = "";
  }

  const usersContainer = document.getElementById("users");
  if (usersContainer) {
    usersContainer.innerHTML = "";
  }

  const nav = document.getElementById("topNavMenu");

  if (prefix === "userID" && !isNaN(parseInt(idStr))) {
    const userId = parseInt(idStr);
    const postId = postPrefix === "postID" ? parseInt(postIdStr) : null;

    // Получаем никнейм пользователя
    let username = null;
    const userEl = document.querySelector(`[data-user-id="${userId}"]`);
    if (userEl) {
      username = userEl.textContent;
    } else {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await res.json();
        username = user.username || `Пользователь ${userId}`;
      } catch {
        username = `Пользователь ${userId}`;
      }
    }

    window.currentUserId = userId;
    window.currentUsername = username;
    window.currentView = view || "TODO";

    if (nav) nav.style.display = "flex";

    if (window.currentView === "TODO") {
      loadUsersToMenu("users", "todo");
      loadTodosForUser(userId, "todo");
    } else if (window.currentView === "Posts") {
      if (postId) {
        loadPostsToSidebar(userId, "users");
        loadCommentsForPost(postId, "todo");
      } else {
        loadUsersToMenu("users", "todo");
        loadPostsForUser(userId, "todo");
      }
    }

    renderBreadcrumbs(userId, username, window.currentView, postId);
  } else {
    // Переход на главную (Main)
    window.currentUserId = null;
    window.currentUsername = null;
    window.currentView = null;

    if (nav) nav.style.display = "none";

    loadUsersToMenu("users", "todo");
    renderBreadcrumbs();
  }
}
