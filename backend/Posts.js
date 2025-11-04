//Posts.js
import {
  createElementToEnd,
  createElementWithText,
  addCSSClass,
  setEvent
} from './htmlGenerater.js';

// Посты в правом блоке (todo), кликабельные
export async function loadPostsForUser(userId, containerId = "todo") {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    posts.forEach(post => {
      const containerEl = createElementToEnd("div", container);
      containerEl.id = `post-${post.id}`;
      addCSSClass("postItem", containerEl);

      createElementWithText("h3", containerEl, null, post.title);
      createElementWithText("p", containerEl, null, post.body);

      setEvent("click", () => {
        window.onPostSelected(post.id);
      }, containerEl);
    });
  } catch (error) {
    console.error("Ошибка при загрузке постов:", error);
    createElementWithText("div", containerId, null, "Не удалось загрузить посты");
  }
}

// Посты в левом меню (sidebar), кликабельные
export async function loadPostsToSidebar(userId, containerId = "users") {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    container.classList.add("chooseUserMenu");

    posts.forEach(post => {
      const postEl = createElementWithText("div", container, "userItem", post.title);
      postEl.id = `post-${post.id}`;
      postEl.dataset.postId = post.id;

      setEvent("click", () => {
        window.onPostSelected(post.id);
      }, postEl);
    });
  } catch (error) {
    console.error("Ошибка при загрузке постов в меню:", error);
    createElementWithText("div", containerId, null, "Не удалось загрузить посты");
  }
}
