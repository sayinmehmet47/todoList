import { display } from './display.js';

const listTodo = document.querySelector('.listTodo');
const addTodo = document.querySelector('.addTodo');
const list = document.querySelector('.list');
const priority=document.querySelector(".priority")

const navigation = () => {
  listTodo.addEventListener('click', () => {
    list.classList.add('d-none');
    addTodo.classList.remove('d-none');
    listTodo.classList.add('active');
    addTodo.classList.remove('active');
    display();
  });

  addTodo.addEventListener('click', () => {
    list.classList.remove('d-none');
    addTodo.classList.add('active');
    listTodo.classList.remove('active');
    priority.classList.add("d-none")
  });
};

export { navigation };

navigation();
