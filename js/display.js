import { firstLibrary } from "./addTodo.js";
import { Drag } from "./drag.js";

const highRow = document.querySelector('.highRow');
const mediumRow = document.querySelector('.mediumRow');
const lowRow = document.querySelector('.lowRow');
const priority = document.querySelector('.priority');
let checkbox=document.querySelector("#check")

let displayLibrary;
const display = () => {
  priority.classList.remove('d-none');
  highRow.innerHTML = '';
  mediumRow.innerHTML = '';
  lowRow.innerHTML = '';

    if(!checkbox.checked){
      displayLibrary=JSON.parse(localStorage.getItem('firstLibrary'));

    }else{
      displayLibrary=JSON.parse(localStorage.getItem('secondLibrary'));


    }


  const High = displayLibrary.filter((e) => {
    return e.priority === 'High';
  });
  const Medium = displayLibrary.filter((e) => {
    return e.priority === 'Medium';
  });
  const Low = displayLibrary.filter((e) => {
    return e.priority === 'Low';
  });

  High.map((element, index) => {
    const highTable = document.createElement('tr');
    highTable.setAttribute('draggable', true);

    highTable.classList.add("draggable")
    highTable.innerHTML = `
    
            <th scope="row">${index+1}</th>
            <td>${element.title}</td>
            <td>${element.description}</td>
            <td>${element.date}</td>
            <td>
            <span class="fa-stack fa-1x">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-trash fa-stack-1x fa-inverse"></i>
          </span>
            
            </td>

        
    `;
    highRow.appendChild(highTable);
    Drag()
  });

  Medium.map((element, index) => {
    const mediumTable = document.createElement('tr');
    mediumTable.setAttribute('draggable', true);

    mediumTable.classList.add("draggable")
    mediumTable.innerHTML = `
            <th scope="row">${index+1}</th>
            <td>${element.title}</td>
            <td>${element.description}</td>
            <td>${element.date}</td>
            <td>
            <span class="fa-stack fa-1x">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-trash fa-stack-1x fa-inverse"></i>
          </span>
            
            </td>
    `;
    mediumRow.appendChild(mediumTable);
    Drag()

  });

  Low.map((element, index) => {
    const lowTable = document.createElement('tr');
    lowTable.setAttribute('draggable', true);

    lowTable.classList.add("draggable")
    lowTable.innerHTML = `
            <th scope="row">${index+1}</th>
            <td>${element.title}</td>
            <td>${element.description}</td>
            <td>${element.date}</td>
            <td>
            <span class="fa-stack fa-1x">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-trash fa-stack-1x fa-inverse"></i>
          </span>
            
            </td>
    `;
    lowRow.appendChild(lowTable);
    Drag()

  });
};

export { display };
