import { initLayout } from './layout.js';
import { initNavigation } from './navigation.js';
import { handleUserSelected, handlePostSelected } from './handlers.js';
import { loadUsersToMenu } from './Users.js';
import { handleHashNavigation } from './endpoint.js';

export function initApp() {
  const body = document.getElementById("body");

  initLayout(body);

  const nav = document.getElementById("topNavMenu");
  initNavigation(nav);

  window.onUserSelected = handleUserSelected;
  window.onPostSelected = handlePostSelected;

  loadUsersToMenu("users", "todo");

  window.addEventListener("hashchange", handleHashNavigation);
  window.addEventListener("DOMContentLoaded", handleHashNavigation);
}
