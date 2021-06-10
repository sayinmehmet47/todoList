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
}

export { EditTodo };
