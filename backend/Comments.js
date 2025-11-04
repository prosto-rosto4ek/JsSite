//Comments.js

import {
  createElementToEnd,
  createElementWithText,
  addCSSClass
} from './htmlGenerater.js';

export function createComment(parentId, data) {
  const parent = document.getElementById(parentId);
  if (!parent) return;

  const container = createElementToEnd("div", parent);
  addCSSClass("postItem", container);

  createElementWithText("h3", container, null, data.name);
  createElementWithText("p", container, null, data.body);
  createElementWithText("p", container, null, `Email: ${data.email}`);
}

export async function loadCommentsForPost(postId, containerId = "todo") {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await response.json();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    createElementWithText("h2", container, null, "Комментарии к посту");

    comments.forEach(comment => {
      createComment(containerId, comment);
    });
  } catch (error) {
    console.error("Ошибка при загрузке комментариев:", error);
    createElementWithText("div", containerId, null, "Не удалось загрузить комментарии");
  }
}
