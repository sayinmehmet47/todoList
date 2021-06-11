import { EditTodo, firstLibrary, secondLibrary } from './addTodo.js';
import { display } from './display.js';
import { navigation } from './nav.js';
var inputs = document.querySelector('form').elements
const list = document.querySelector('.list');
const listTodo = document.querySelector('.listTodo');
const addTodo = document.querySelector('.addTodo');
const form = document.querySelector('form');
let inputField = document.querySelectorAll("input");
let textField=document.querySelectorAll("textarea");
let switches=document.querySelector("#switch");
var title, description, priority, date,library;

form.addEventListener('submit', (e) => {
e.preventDefault()
  title = inputs[0].value;
  description = inputs[1].value;
  priority = inputs[2].value;
  date = inputs[3].value;
  priority === '1'
    ? (priority = 'High')
    : priority === '2'
    ? (priority = 'Medium')
    : (priority = 'Low');
    let checkbox=document.querySelector("#check")
    checkbox.checked?library=secondLibrary:library=firstLibrary
    
  let newTodo = new EditTodo(title, description, priority, date,library);

  newTodo.addNewTodo();
  inputField.forEach((input) => (input.value = ""));
  textField.forEach((input) => (input.value = ""));

  display()
  list.classList.add("d-none")
  listTodo.classList.add('active');
  addTodo.classList.remove('active');


});

