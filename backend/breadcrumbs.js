//breadcrumbs.js

import { createElementWithText, setEvent } from './htmlGenerater.js';

export function renderBreadcrumbs(userId = null, username = null, view = null, postId = null) {
  const container = document.getElementById("breadcrumbsMenu");
  if (!container) return;

  container.innerHTML = "";

  const home = createElementWithText("span", container, "breadcrumbItem", "Main");
  setEvent("click", () => {
    window.location.hash = "";
  }, home);

  if (userId && username) {
    const userCrumb = createElementWithText("span", container, "breadcrumbItem", "/" + username);
    setEvent("click", () => {
      window.location.hash = `#userID:${userId}`;
    }, userCrumb);

    if (view) {
      const viewCrumb = createElementWithText("span", container, "breadcrumbItem", "/" + view);
      setEvent("click", () => {
        window.location.hash = `#userID:${userId}:${view}`;
      }, viewCrumb);

      if (postId) {
  // Попробуем найти заголовок поста в DOM
  let postTitle = document.querySelector(`#post-${postId} h3`)?.textContent;

  // Если не найден — пробуем найти в левом меню
  if (!postTitle) {
    postTitle = document.querySelector(`#post-${postId}`)?.textContent;
  }

  // Если всё ещё не найден — подгружаем с сервера
  if (!postTitle) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(post => {
        const title = post.title || `Пост ${postId}`;
        createElementWithText("span", container, "breadcrumbItem", "/" + title);
      })
      .catch(() => {
        createElementWithText("span", container, "breadcrumbItem", `/Пост ${postId}`);
      });
  } else {
    createElementWithText("span", container, "breadcrumbItem", "/" + postTitle);
  }
}

    }
  }
}
