import {
  createElementWithText,
  setEvent
} from './htmlGenerater.js';

import { loadTodosForUser } from './TODO.js';

export class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
  }

  createUserOnMenu(container, containerForTODO) {
    const userElement = createElementWithText("div", container, "userItem", this.username);
    userElement.id = `user${this.id}`;
    userElement.dataset.userId = this.id;


    setEvent('click', () => {
      window.location.hash = `#userID:${this.id}`;
      const todoContainer = document.getElementById(containerForTODO);
      if (todoContainer) {
        todoContainer.innerHTML = "";
      }
      loadTodosForUser(this.id, containerForTODO);
      renderBreadcrumbs(this.id, this.username);
    }, userElement);
  }
}

export async function loadUsersToMenu(containerId, todoContainerId) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    users.forEach(userData => {
      const user = new User(userData);
      user.createUserOnMenu(container, todoContainerId);
    });
  } catch (error) {
    console.error("Ошибка при загрузке пользователей:", error);
    createElementWithText("div", containerId, null, "Не удалось загрузить пользователей");
  }
}
