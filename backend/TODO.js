import {
  createElementToEnd,
  createElementWithText,
  addCSSClass
} from './htmlGenerater.js';

export function createTODO(parentId, data) {
  const parent = document.getElementById(parentId);
  if (!parent) {
    console.warn(`Элемент с id "${parentId}" не найден`);
    return;
  }

  const container = createElementToEnd("div", parent);
  if (!container) return;

  container.id = `todo-${data.id}`;
  addCSSClass("TODO", container);

  createElementWithText("span", container, null, data.title);
  const statusText = data.completed ? "Выполнено" : "Не выполнено";
  createElementWithText("span", container, null, statusText);
}

export async function loadTodosForUser(userId, containerId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const todos = await response.json();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    todos.forEach(todo => {
      createTODO(containerId, todo);
    });
  } catch (error) {
    console.error("Ошибка при загрузке TODO:", error);
    createElementWithText("div", containerId, null, "Не удалось загрузить задачи");
  }
}
