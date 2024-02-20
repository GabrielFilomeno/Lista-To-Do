function marcarConcluida(checkBox) {
    var tarefa = checkBox.nextElementSibling;
    if (checkBox.checked) {
        tarefa.classList.add('concluida');
    } else {
        tarefa.classList.remove('concluida');
    }
}

function removerTarefa(checkboxId) {
    var lista = document.getElementById(checkboxId);
    var li = lista.parentNode;
    li.parentNode.removeChild(li);
}

function adicionarTarefa() {
    
    //Pegando ul do html
    var ul = document.querySelector("#listaTarefas");

        var addTarefa = document.querySelector("#addTarefa").value;
    if (addTarefa.trim() === "") {
        alert("Digite o nome da tarefa.");
        return;
    } else {

    //Criando li dentro do ul

    var li = document.createElement("li");
    li.className = "lista";
    ul.appendChild(li);

    //Criando div dentro do li, essa div vai conter o input checkbox e um span para texto

    var divLista = document.createElement("div");
    divLista.className = "containerCheckBox";



    
    li.appendChild(divLista);

    //Criando input checkbox

    var inputCheckbox = document.createElement("input");
    inputCheckbox.type ="checkbox";
    inputCheckbox.className = "inputCheckBox";
    divLista.appendChild(inputCheckbox);
    divListaId = divLista.id = Math.random()
    //divListaId = (this.id);
    

    //Criando span para texto


    var spanTexto = document.createElement("span");
    spanTexto.textContent = addTarefa;
    divLista.appendChild(spanTexto);

    //Criar botão para remover tarefa

    var buttonRemover = document.createElement("span");

    buttonRemover.addEventListener('click', function() {
        
       divListaId = divLista.id = Math.random(); // alerta 'seuid'
       console.log(divListaId);
       removerTarefa(divListaId);
       });

    buttonRemover.innerHTML ="<button class='buttonRemover''><i class='fa-solid fa-square-xmark'></i></button>";
    li.appendChild(buttonRemover);
    }

    //Chamando função para marcar novas tarefas como concluidas
    inputCheckbox.onchange = function() {
        marcarConcluida(inputCheckbox);
    };

    //Resetando o valor do addTarefa

    document.getElementById("addTarefa").value = "";

}
