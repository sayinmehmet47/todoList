import { EditTodo, myLibrary } from './addTodo.js';
import { display } from './display.js';
import { navigation } from './nav.js';
var inputs = document.querySelector('form').elements;
const form = document.querySelector('form');
var title, description, priority, date;

form.addEventListener('submit', () => {

  title = inputs[0].value;
  description = inputs[1].value;
  priority = inputs[2].value;
  date = inputs[3].value;
  priority === '1'
    ? (priority = 'High')
    : priority === '2'
    ? (priority = 'Medium')
    : (priority = 'Low');
  let newTodo = new EditTodo(title, description, priority, date);
  newTodo.addNewTodo();
  console.log(myLibrary);
});
