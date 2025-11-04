import { createElementWithText } from './htmlGenerater.js';

export function initNavigation(navContainer) {
  const todoBtn = createElementWithText("button", navContainer, null, "TODO");
  todoBtn.onclick = () => {
    if (window.currentUserId !== null) {
      window.currentView = "TODO";
      window.location.hash = `#userID:${window.currentUserId}:TODO`;
    }
  };

  const postsBtn = createElementWithText("button", navContainer, null, "Посты");
  postsBtn.onclick = () => {
    if (window.currentUserId !== null) {
      window.currentView = "Posts";
      window.location.hash = `#userID:${window.currentUserId}:Posts`;
    }
  };
}
