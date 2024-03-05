const ul = document.querySelector("#listaTarefas");


function mostrarNumeroTarefas() {

    var quantidadeTarefas = document.querySelectorAll(".lista").length;

    document.querySelector("#numTarefas").textContent = ": " + quantidadeTarefas;
}

function marcarConcluida(titulo, idCheckbox, label) {
    let listaTarefas = lerLista(); 

    listaTarefas.map(tarefa => {
        if (tarefa.titulo == titulo) {
            tarefa.concluido = !tarefa.concluido;
            if (idCheckbox.checked) {
                label.classList.add('concluida')
            } else {
                label.classList.remove('concluida');
            }
        };
    });

    localStorage.setItem("tasks", JSON.stringify(listaTarefas));

}

function addClassConcluida(idCheckbox, label){
listaTarefas = lerLista()

    if (idCheckbox.checked) {
        label.classList.add('concluida')
    } else {
        label.classList.remove('concluida');
    }

}

function removerTarefa(titulo) {

    let listaTarefas = lerLista();

    let confirmar = confirm("Você deseja excluir esta tarefa?");
    
    if (confirmar) {
    listaTarefas = listaTarefas.filter(tarefa => {
        if (tarefa.titulo != titulo) {
            return true;
        }
    })
}

    localStorage.setItem("tasks", JSON.stringify(listaTarefas));

    renderizarLista();
}

function adicionarTarefa(titulo) {

    var titulo = document.querySelector("#titulo").value;
    if (titulo.trim() === "") {
        alert("Digite o nome da tarefa.");
        return;
    } else {

        let tarefa = {
            titulo: titulo,
            concluido: false
        }

        let listaTarefas = lerLista();

        listaTarefas.push(tarefa);
        localStorage.setItem("tasks", JSON.stringify(listaTarefas));

        document.getElementById("titulo").value = "";

        renderizarLista()
    }
}
function renderizarLista() {
    var listaTarefas = lerLista();
    ul.innerHTML = "";

    listaTarefas.map((tarefa, index) => {

        //Criando li dentro do ul

        var li = document.createElement("li");
        li.className = "lista";
        ul.appendChild(li);

        //Criando div dentro do li, essa div vai conter o input checkbox e um span para texto

        var divLista = document.createElement("div");
        divLista.className = "containerCheckBox";

        li.appendChild(divLista);

        //Criando input checkbox com label
        var id = 'tarefa-' + index;

        var inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.className = "inputCheckBox";
        inputCheckbox.id = id;
        divLista.appendChild(inputCheckbox);

        var label = document.createElement("label");
        label.setAttribute('for', id);
        label.textContent = ' ' + tarefa.titulo;

        divLista.appendChild(label);

        //Criar botão para remover tarefa

        var buttonRemover = document.createElement("span");

        buttonRemover.addEventListener('click', function () {

            removerTarefa(tarefa.titulo);
        });

        buttonRemover.innerHTML = "<button class='buttonRemover''><i class='fa-solid fa-square-xmark'></i></button>";
        li.appendChild(buttonRemover);

        //Chamando função para marcar novas tarefas como concluidas

        let idCheckbox = document.getElementById(id)
        idCheckbox.checked = tarefa.concluido;

        addClassConcluida(idCheckbox, label);

        idCheckbox.addEventListener("change", function () {

            marcarConcluida(tarefa.titulo, idCheckbox, label)

        })
    })

    mostrarNumeroTarefas();
}

function lerLista() {
    let listaTarefas = localStorage.getItem("tasks");

    if (!!listaTarefas) {
        return JSON.parse(listaTarefas);
    }

    return [];
}

// Verifica se esta acessando de um celular para deixar o background de acordo
document.body.onresize = function () {
    if (document.body.clientWidth < 600) {
        document.body.style.background = "white url('https://images.tcdn.com.br/img/img_prod/924755/caderno_wire_o_a5_rosa_aquarela_103_1_044ef6a6ec568817b36050f061cde59d.jpg')";
        document.body.style.backgroundSize = "600px 700px";
        document.body.style.backgroundPositionX = "-195px";
        document.body.style.backgroundPositionY = "-50px";
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
            document.body.style.backgroundPositionY = "-120px";

            document.body.id = "b2";

        } else if (document.body.id == "b2") {

            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1581431886211-6b932f8367f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPositionY = "1px";

            document.body.id = "b1";
        };
        console.log('a viewport tem pelo menos 600 pixels de largura')
    } else {
        /* a viewport menos que 600 pixels de largura */
        if (document.body.id == "b1") {

            document.body.style.background = "white url('https://images.unsplash.com/photo-1581431886211-6b932f8367f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            document.body.style.backgroundSize = "735px 650px";
            document.body.style.backgroundPositionX = "-170px";
            document.body.style.backgroundPositionY = "-5px";

            document.body.id = "b2";

        } else if (document.body.id == "b2") {

            document.body.style.background = "white url('https://images.tcdn.com.br/img/img_prod/924755/caderno_wire_o_a5_rosa_aquarela_103_1_044ef6a6ec568817b36050f061cde59d.jpg')";
            document.body.style.backgroundSize = "600px 700px";
            document.body.style.backgroundPositionX = "-195px";
            document.body.style.backgroundPositionY = "-50px";

            document.body.id = "b1";
        };
        console.log('a viewport menos que 600 pixels de largura');
    };
};


renderizarLista();
