let checkBox = document.getElementsByClassName("inputCheckBox")
//let li = document.getElementById('lista')
function marcarConcluida(checkBox) {
    var tarefa = checkBox.nextElementSibling;
    if (checkBox.checked) {
        tarefa.classList.add('concluida');
    } else {
        tarefa.classList.remove('concluida');
    }
}

checkBox.onchange = function() {
    marcarConcluida(checkBox);
};
