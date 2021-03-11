const task = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const btnLimpar = document.querySelector('#apaga-tudo');

function selectLi(event) {
  const listLi = document.querySelectorAll('.tarefa');
  for (let i = 0; i < listLi.length; i += 1) {
    if (listLi[i].classList.contains('selected')) {
      listLi[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

/* pesquisa toggle */
function mark(event) {
  event.target.classList.toggle('completed');
}

function criarTarefa() {
  const novoItem = document.createElement('li');
  novoItem.className = 'tarefa';
  novoItem.addEventListener('click', selectLi);
  novoItem.addEventListener('dblclick', mark);
  novoItem.innerText = task.value;
  // if (!(task.value).trim()) {
  //   return alert('Adicione uma tarefa');
  // }
  list.appendChild(novoItem);
  task.value = '';
  task.focus();
}

btnCriaTarefa.addEventListener('click', criarTarefa);
task.addEventListener('keyup', (event) => {
  console.log(event.key);
  if (event.key === 'Enter') {
    criarTarefa();
  }
});

btnLimpar.addEventListener('click', () => {
  list.innerHTML = '';
  // let array = document.querySelectorAll('.tarefa');
  // for (let i = 0; i < array.length; i += 1) {
  //   list.removeChild(array[i]);
  // }
});
