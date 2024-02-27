function mostrarNumeroTarefas() {

    var quantidadeTarefas = document.querySelectorAll(".lista").length;

    document.querySelector("#numTarefas").textContent = ": " + quantidadeTarefas;
}

mostrarNumeroTarefas()

function marcarConcluida(checkBox) {
    var tarefa = checkBox.nextElementSibling;
    if (checkBox.checked) {
        tarefa.classList.add('concluida');
    } else {
        tarefa.classList.remove('concluida');
    }
}

function removerTarefa(checkboxId) {

    let confirmar = confirm("Você deseja excluir esta tarefa?");

    if (confirmar) {
        var lista = document.getElementById(checkboxId);
        var li = lista.parentNode;
        li.parentNode.removeChild(li);
    }
    mostrarNumeroTarefas();
}

// Verifica se esta acessando de um celular
document.body.onresize = function () {
    if (document.body.clientWidth < 600) {
        document.body.style.background = "white url('https://images.tcdn.com.br/img/img_prod/924755/caderno_wire_o_a5_rosa_aquarela_103_1_044ef6a6ec568817b36050f061cde59d.jpg')";
        document.body.style.backgroundSize = "700px 800px";
        document.body.style.backgroundPositionX = "-240px";
        document.body.style.backgroundPositionY = "-70px";
    } else {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1581431886211-6b932f8367f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundPositionX = "0px";
        document.body.style.backgroundPositionY = "0px";
    }
};  

// Fiz uma função para trocar o tema da lista
function trocarTema() {

    if (window.matchMedia("(min-width:600px)").matches) {
        /* a viewport tem pelo menos 600 pixels de largura */
        if (document.body.id == "b1") {

            document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-gratis/vista-superior-organizada-arranjo-de-elementos-de-mesa-em-fundo-rosa_23-2148513293.jpg?t=st=1708993116~exp=1708996716~hmac=6a28cd8de39d48e5bbdcffbd1aa059269643acbe7f475fc5f719cb67966da46c&w=1380')";
            document.body.style.backgroundSize = "cover";

            document.body.id = "b2";

        } else if (document.body.id == "b2") {

            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1581431886211-6b932f8367f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            document.body.style.backgroundSize = "cover";

            document.body.id = "b1";
        };
        console.log('a viewport tem pelo menos 600 pixels de largura')
    } else {
        /* a viewport menos que 600 pixels de largura */
        if (document.body.id == "b1") {

            document.body.style.background = "white url('https://images.unsplash.com/photo-1581431886211-6b932f8367f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            document.body.style.backgroundSize = "785px 700px";
            document.body.style.backgroundPositionX = "-190px";
            document.body.style.backgroundPositionY = "-15px";

            document.body.id = "b2";

        } else if (document.body.id == "b2") {

            document.body.style.background = "white url('https://images.tcdn.com.br/img/img_prod/924755/caderno_wire_o_a5_rosa_aquarela_103_1_044ef6a6ec568817b36050f061cde59d.jpg')";
            document.body.style.backgroundSize = "700px 800px";
            document.body.style.backgroundPositionX = "-240px";
            document.body.style.backgroundPositionY = "-70px";

            document.body.id = "b1";
        };
        console.log('a viewport menos que 600 pixels de largura');
    };
};

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

        //Criando input checkbox com label

        var inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.className = "inputCheckBox";
        var idcheckbox = inputCheckbox.id = Math.random()
        divLista.appendChild(inputCheckbox);
        divListaId = divLista.id = Math.random()

        console.log(idcheckbox)

        var label = document.createElement("label");
        label.setAttribute('for', idcheckbox);
        label.textContent = ' ' + addTarefa;

        divLista.appendChild(label);


        //Criando span para texto


        // var spanTexto = document.createElement("span");
        // spanTexto.textContent = addTarefa;
        // divLista.appendChild(spanTexto);

        //Criar botão para remover tarefa

        var buttonRemover = document.createElement("span");

        buttonRemover.addEventListener('click', function () {

            divListaId = divLista.id = Math.random(); // alerta 'seuid'
            console.log(divListaId);

            removerTarefa(divListaId);
        });

        buttonRemover.innerHTML = "<button class='buttonRemover''><i class='fa-solid fa-square-xmark'></i></button>";
        li.appendChild(buttonRemover);
    }

    //Chamando função para marcar novas tarefas como concluidas
    inputCheckbox.onchange = function () {
        marcarConcluida(inputCheckbox);
    };

    //Resetando o valor do addTarefa

    document.getElementById("addTarefa").value = "";

    mostrarNumeroTarefas()

}
