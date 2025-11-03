//Posts.js
import {
  createElementToEnd,
  createElementWithText,
  addCSSClass
} from './htmlGenerater.js';

export function createPost(parentId, data) {
  const parent = document.getElementById(parentId);
  if (!parent) {
    console.warn(`Элемент с id "${parentId}" не найден`);
    return;
  }

  const container = createElementToEnd("div", parent);
  if (!container) return;

  container.id = `post-${data.id}`;
  addCSSClass("postItem", container);

  createElementWithText("h3", container, null, data.title);
  createElementWithText("p", container, null, data.body);
}

export async function loadPostsForUser(userId, containerId = "todo") {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    posts.forEach(post => {
      createPost(containerId, post);
    });
  } catch (error) {
    console.error("Ошибка при загрузке постов:", error);
    createElementWithText("div", containerId, null, "Не удалось загрузить посты");
  }
}
