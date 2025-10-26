function createElementToEnd(typeElement, parent,id=null){//Добавляет элемент(первый параметр) в КОНЕЦ родительского(второго аргумента)
    createdEl=document.createElement(typeElement);
    parent.appendChild(createdEl);
       if(id){
        createdEl.id=id;
        }
    return createdEl;
}
function createElementToStart(typeElement, parent,id=null){//Добавляет элемент(первый параметр) в НАЧАЛО родительского(второго аргумента)
    createdEl=document.createElement(typeElement);
    parent.prepend(createdEl);
       if(id){
        createdEl.id=id;
        }
    return createdEl;
}


function addCSSClass(elementID,className){//Добавление по айди(первый параметр) css-класса (второй параметр)
    let element = document.getElementById(elementID);
    element.classList.add(className);
}
function removeCSSClass(elementID,className){//Удаление по айди(первый параметр) css-класса (второй параметр)
    let element = document.getElementById(elementID);
    element.classList.remove(className);
}


function setContent(elementID,content){
    let element = document.getElementById(elementID);
    element.textContent = content;
}