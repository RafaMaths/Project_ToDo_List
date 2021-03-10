function createButton() {
  let button = document.getElementById('criar-tarefa');
  button.addEventListener('click', (event) => {
    let task = document.getElementById('texto-tarefa').innerText;
    let evento = event;
  })
  console.log("ola");
}
  createButton();

function creatOlist (texto) {
  let addItem = document.createElement('li');
  addItem = texto.innerText;
  let getList = document.getElementById('lista-tarefas');
  getList.appendChild(addItem);
}
createOlist("dsadsa");












// creatOlist()

// function creatOlist () {
//   let addItem = document.createElement('li');
//   let getList = document.getElementById('lista-tarefas');
//   getList.appendChild(addItem);
// }

// function createButton() {
//   let button = document.getElementById('criar-tarefa');
  
//   button.addEventListener('click', (event) => {
//     let task = document.getElementById('texto-tarefa').innerText;
//     let evento = event;
//   })
// }