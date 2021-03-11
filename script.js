// function createButton() {
//   let button = document.getElementById('criar-tarefa');
//   button.addEventListener('click', (event) => {
//     let task = document.getElementById('texto-tarefa').innerText;
//     let evento = event;
//   })
//   console.log("ola");
// }
// createButton();

// function creatOlist(texto) {
//   let addItem = document.createElement('li');
//   addItem = texto.innerText;
//   let getList = document.getElementById('lista-tarefas');
//   getList.appendChild(addItem);
// }
// createOlist("dsadsa");


let task = document.getElementById('texto-tarefa');        /* input */
let button = document.getElementById('criar-tarefa');      /* botão */
let list = document.getElementById('lista-tarefas');      /* lista */
let clickList = document.querySelectorAll('ol');          /* armazena lista */
button.addEventListener('click', function(){  
  let novaLista = document.createElement('li');
  list.appendChild(novaLista).innerText = task.value;     /* adiciono a li o texto adicionado à task */
  task.value = '';                                        /* retorna uma string com o conteúdo digitado */
});

for (let i = 0; i < clickList.length; i++) {
  clickList[i].addEventListener('click', function() {
    clickList.target.style.backgroundColor = 'rgb(128, 128, 128)';
});
} 




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