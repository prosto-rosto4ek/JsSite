export function createElementToEnd(typeElement, parent, id = null) {
  if (typeof parent === "string") {
    parent = document.getElementById(parent);
  }
  if (!parent) {
    console.warn("Родительский элемент не найден:", parent);
    return null;
  }
  const createdEl = document.createElement(typeElement);
  if (id) createdEl.id = id;
  parent.appendChild(createdEl);
  return createdEl;
}

export function createElementToStart(typeElement, parent, id = null) {
  if (typeof parent === "string") {
    parent = document.getElementById(parent);
  }
  if (!parent) {
    console.warn("Родительский элемент не найден:", parent);
    return null;
  }
  const createdEl = document.createElement(typeElement);
  if (id) createdEl.id = id;
  parent.prepend(createdEl);
  return createdEl;
}

export function createElementWithText(typeElement, parent, css = null, text = null, id = null) {
  const createdEl = createElementToEnd(typeElement, parent);
  if (!createdEl) return null;
  if (id) createdEl.id = id;
  if (css) createdEl.classList.add(css);
  if (text) createdEl.textContent = text;
  return createdEl;
}

export function addCSSClass(className, elementID = null) {
  const element = typeof elementID === "string" ? document.getElementById(elementID) : elementID;
  if (element) element.classList.add(className);
}

export function removeCSSClass(className, elementID = null) {
  const element = typeof elementID === "string" ? document.getElementById(elementID) : elementID;
  if (element) element.classList.remove(className);
}

export function setContent(elementID, content) {
  const element = typeof elementID === "string" ? document.getElementById(elementID) : elementID;
  if (element) element.textContent = content;
}

export function setEvent(typeEvent, method, elementID = null) {
  const element = typeof elementID === "string" ? document.getElementById(elementID) : elementID;
  if (element) element.addEventListener(typeEvent, method);
}
