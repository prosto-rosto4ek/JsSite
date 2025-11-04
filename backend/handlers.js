export function handleUserSelected(userId, username) {
  window.currentUserId = userId;
  window.currentUsername = username;

  const hash = window.location.hash.replace("#", "");
  const parts = hash.split(":");
  const currentView = parts[2] || "TODO";

  window.currentView = currentView;
  window.location.hash = `#userID:${userId}:${currentView}`;
}

export function handlePostSelected(postId) {
  if (window.currentUserId !== null) {
    window.location.hash = `#userID:${window.currentUserId}:Posts:postID:${postId}`;
  }
}
