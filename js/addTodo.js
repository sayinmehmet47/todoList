import { display } from './display.js';

export var firstLibrary = [
  {
    title: 'my first-library',
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
export var secondLibrary = [
  {
    title: 'second-library',
    description: 'Iphone 7',
    priority: 'High',
    date: '2011-08-19T13:45:00',
  },
];

localStorage.setItem('firstLibrary', JSON.stringify(firstLibrary));
localStorage.setItem('secondLibrary', JSON.stringify(secondLibrary));

class EditTodo {
  constructor(title, description, priority, date, library) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
    this.library = library;
  }
  addNewTodo = () => {
    if (this.library === firstLibrary) {
      firstLibrary = [
        ...firstLibrary,

        {
          title: this.title,
          description: this.description,
          priority: this.priority,
          date: this.date,
        },
      ];
      localStorage.setItem('firstLibrary', JSON.stringify(firstLibrary));
    } else {
      secondLibrary = [
        ...secondLibrary,

        {
          title: this.title,
          description: this.description,
          priority: this.priority,
          date: this.date,
        },
      ];
      localStorage.setItem('secondLibrary', JSON.stringify(secondLibrary));
    }
  };

  removeTodo = () => {
    document.querySelector('body').addEventListener('click', (e) => {
      if (e.target.matches('i')) {
        const tr =
          e.target.parentElement.parentElement.parentElement.childNodes[3]
            .innerText;

        console.log(tr);
        const filtered1 = firstLibrary.filter((e) => {
          return e.title !== tr;
        });

        const filtered2 = secondLibrary.filter((e) => {
          return e.title !== tr;
        });
        firstLibrary = filtered1;
        secondLibrary = filtered2;
        localStorage.setItem('firstLibrary', JSON.stringify(firstLibrary));
        localStorage.setItem('secondLibrary', JSON.stringify(secondLibrary));

        e.target.parentElement.parentElement.parentElement.remove();
      }
    });
  };
}
const ui = new EditTodo();
ui.removeTodo();

export { EditTodo };
