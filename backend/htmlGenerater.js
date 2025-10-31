export function createElementToEnd(typeElement, parent, id = null) {
    const createdEl = document.createElement(typeElement); // Добавлено const
    parent.appendChild(createdEl);
    if (id) {
        createdEl.id = id;
    }
    return createdEl;
}

export function createElementToStart(typeElement, parent, id = null) {
    const createdEl = document.createElement(typeElement); // Добавлено const
    parent.prepend(createdEl);
    if (id) {
        createdEl.id = id;
    }
    return createdEl;
}

export function createElementWithText(typeElement, parent, css, text = null, id = null) {
    const createdEl = createElementToEnd(typeElement, parent); // Добавлено const
    if (id) {
        createdEl.id = id;
    }
    if (css) {
        // Исправлено: используем classList.add вместо addCSSClass
        createdEl.classList.add(css);
    }
    if (text) {
        // Исправлено: напрямую устанавливаем textContent
        createdEl.textContent = text;
    }
    return createdEl;
}

export function addCSSClass(className, elementID = null) {
    let element;
    if (this) {
        element = this;
    } else {
        element = document.getElementById(elementID);
    }
    if (element) {
        element.classList.add(className);
    }
}

export function removeCSSClass(className, elementID = null) {
    let element;
    if (this) {
        element = this;
    } else {
        element = document.getElementById(elementID);
    }
    if (element) {
        element.classList.remove(className);
    }
}

export function setContent(elementID, content) {
    if (this) {
        this.textContent = content;
    } else {
        const element = document.getElementById(elementID); // Добавлено const
        if (element) {
            element.textContent = content;
        }
    }
}

export function setEvent(typeEvent, method, elementID = null) {
    let element;
    if (this) {
        element = this;
    } else {
        element = document.getElementById(elementID);
    }
    if (element) {
        element.addEventListener(typeEvent, method);
    }
}