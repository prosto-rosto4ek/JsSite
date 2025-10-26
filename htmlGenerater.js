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
function createElementToEndCSS(typeElement, parent,className){

}


function addCSSClass(element,className){
    element.classList.add(className);
}
function removeCSSClass(element,className){
    element.classList.remove(className);
}

