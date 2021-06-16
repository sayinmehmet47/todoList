import { EditTodo, firstLibrary, secondLibrary } from './addTodo.js';

const Drag = () => {
  let checkbox = document.querySelector('#check');
  var library;

  const draggable = document.querySelectorAll('.draggable');
  const tbody = document.querySelectorAll('tbody');
  draggable.forEach((element,key) => {
    element.addEventListener('drag', (e) => {  
      element.classList.add('dragging');
    });

    element.addEventListener('dragend', (e) => {
      e.stopImmediatePropagation();
      checkbox.checked ? (library = secondLibrary) : (library = firstLibrary);
      let title = element.children[1].innerText;
      let description = element.children[2].innerText;
      let priority = element.parentElement.parentElement.parentElement.children[0].innerText
      let date = element.children[3].innerText;
      const drag = new EditTodo(title, description, priority, date, library);
      
      drag.addNewTodo()
      drag.changeDrop(title,priority)
      element.classList.remove('dragging');
    });
  });

  tbody.forEach((element) => {
    element.addEventListener('dragover', (e) => {
      e.preventDefault();







      const draggable = document.querySelector('.dragging');
      element.appendChild(draggable);
    });
  });
};

export { Drag };
