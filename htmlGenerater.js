function createElementToEnd(typeElement, parent){//Добавляет элемент(первый параметр) в КОНЕЦ родительского(второго аргумента)
    createdEl=document.createElement(typeElement);
    parent.appendChild(createdEl);
}
function createElementToStart(typeElement, parent){//Добавляет элемент(первый параметр) в НАЧАЛО родительского(второго аргумента)
    createdEl=document.createElement(typeElement);
    parent.appendChild(createdEl);
}

