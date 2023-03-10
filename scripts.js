let input = document.getElementById("input-principal")
let button = document.getElementById("botao-adicionar")
let tarefa = document.getElementById("nome-tarefa-id")
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []
recarregarTarefas()

function mostrarTarefas() {
    let novaLi = ""

    arrayDeTarefas.forEach((tarefa, index) => {


        novaLi = novaLi + `
        <li class="iten-tarefa ${tarefa.concluido == true ? 'concluido' : ''}">
          <button class="botao-check" onclick="concluirTarefa(${index})">
          <i class="fa-regular fa-circle-check"></i>
          </button>

          <p class="nome-tarefa ${tarefa.concluida == true ? "concluido" : ""}" id="nome-tarefa-id">${tarefa.tarefa}</p>


          <button class="botao-delete" onclick="deletarTarefa(${index})">
              <i class="fa-solid fa-trash"></i>
          </button>

    </li>
    `

    })


    listaCompleta.innerHTML = novaLi
    localStorage.setItem("lista", JSON.stringify(arrayDeTarefas))

}

function deletarTarefa(index) {
    arrayDeTarefas.splice(index, 1)

    mostrarTarefas()
}
function adicionarTarefa() {
    arrayDeTarefas.push({

        tarefa: input.value,
        status: false

    })

    mostrarTarefas()
}

function concluirTarefa(index) {

    arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida

    mostrarTarefas()
}

function recarregarTarefas() {

    let minhasTarefas = localStorage.getItem("lista")

    arrayDeTarefas = JSON.parse(minhasTarefas)

    mostrarTarefas()
}

button.addEventListener("click", adicionarTarefa)
