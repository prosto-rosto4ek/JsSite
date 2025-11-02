import { renderBreadcrumbs } from './breadcrumbs.js';
import { loadTodosForUser } from './TODO.js';

export function handleHashNavigation() {
      const hash = window.location.hash.replace("#", ""); 
      const [prefix, idStr] = hash.split(":");

      const todoContainer = document.getElementById("todo");
      if (todoContainer) {
        todoContainer.innerHTML = "";
      }

      if (prefix === "userID" && !isNaN(parseInt(idStr))) {
        const userId = parseInt(idStr);

        // Найдём DOM-элемент пользователя
        const userEl = document.querySelector(`[data-user-id="${userId}"]`);
        const username = userEl ? userEl.textContent : `Пользователь ${userId}`;

        loadTodosForUser(userId, "todo");
        renderBreadcrumbs(userId, username);
      } else {
        renderBreadcrumbs(); // только "Главная"
      }
    }