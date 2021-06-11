import { display } from './display.js';

export var myLibrary = [
  {
    title: 'my password',
    description: 'Aa213',
    priority: 'High',
    date: '2011-08-19T13:45:00',
  },
  {
    title: 'film',
    description: 'gece yildizlari',
    priority: 'Low',
    date: '2011-08-19T13:45:00',
  },
  {
    title: 'araba',
    description: 'mercedes',
    priority: 'Low',
    date: '2011-08-19T13:45:00',
  },
];

localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

class EditTodo {
  constructor(title, description, priority, date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
  }
  addNewTodo = () => {
    myLibrary = [
      ...myLibrary,

      {
        title: this.title,
        description: this.description,
        priority: this.priority,
        date: this.date,
      },
    ];
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  };

  removeTodo = () => {
    document.querySelector('body').addEventListener('click', (e) => {
      if (e.target.matches('i')) {
        const tr = e.target.parentElement.parentElement.parentElement.childNodes[3].innerText;

        console.log(tr);
        const filtered=myLibrary.filter(e=>{
            return e.title!==tr

        })
        myLibrary=filtered
        console.log(filtered)
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
        e.target.parentElement.parentElement.parentElement.remove()
      }
    });
  };
}
const ui = new EditTodo();
ui.removeTodo();

export { EditTodo };
