const highRow=document.querySelector(".highRow")
const mediumRow=document.querySelector(".mediumRow")
const lowRow=document.querySelector(".lowRow")
const priority=document.querySelector(".priority")


const display = () => {
    priority.classList.remove("d-none")
    highRow.innerHTML=""
    mediumRow.innerHTML=""
    lowRow.innerHTML=""

  var myLibrary = JSON.parse(localStorage.getItem('myLibrary'));

  const High = myLibrary.filter((e) => {
    return e.priority === 'High';
  });
  const Medium = myLibrary.filter((e) => {
    return e.priority === 'Medium';
  });
  const Low = myLibrary.filter((e) => {
    return e.priority === 'Low';
  });
  
  High.map((element,index)=>{

    const highTable=document.createElement("tr")
    highTable.innerHTML=`
            <th scope="row">${index}</th>
            <td>${element.title}</td>
            <td>${element.description}</td>
            <td>${element.date}</td>
    `
    highRow.appendChild(highTable)
  })
 
  Medium.map((element,index)=>{

    const mediumTable=document.createElement("tr")
    mediumTable.innerHTML=`
            <th scope="row">${index}</th>
            <td>${element.title}</td>
            <td>${element.description}</td>
            <td>${element.date}</td>
    `
    mediumRow.appendChild(mediumTable)
  })
 
  Low.map((element,index)=>{

    const lowTable=document.createElement("tr")
    lowTable.innerHTML=`
            <th scope="row">${index}</th>
            <td>${element.title}</td>
            <td>${element.description}</td>
            <td>${element.date}</td>
    `
    lowRow.appendChild(lowTable)
  })

};

export { display };
