const highRow = document.querySelector('.highRow');
const mediumRow = document.querySelector('.mediumRow');
const lowRow = document.querySelector('.lowRow');
const priority = document.querySelector('.priority');

const display = () => {
  priority.classList.remove('d-none');
  highRow.innerHTML = '';
  mediumRow.innerHTML = '';
  lowRow.innerHTML = '';

  var firstLibrary = JSON.parse(localStorage.getItem('firstLibrary'));

  const High = firstLibrary.filter((e) => {
    return e.priority === 'High';
  });
  const Medium = firstLibrary.filter((e) => {
    return e.priority === 'Medium';
  });
  const Low = firstLibrary.filter((e) => {
    return e.priority === 'Low';
  });

  High.map((element, index) => {
    const highTable = document.createElement('tr');
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
  });

  Medium.map((element, index) => {
    const mediumTable = document.createElement('tr');
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
  });

  Low.map((element, index) => {
    const lowTable = document.createElement('tr');
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
  });
};

export { display };
