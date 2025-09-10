//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesAmigos = [];

function adicionarNome(){
    let nomeAmigo = document.getElementById("amigo").value;

    if(nomeAmigo === ""){
        alert("Por favor, insira um nome.");
        return;
    }else{
        nomesAmigos.push(nomeAmigo);
        limparCampoNome();
        atualizarLista();
    }
}

function limparCampoNome(){
    document.getElementById("amigo").value = "";
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i< nomesAmigos.length; i++){
        lista.innerHTML += `<li>${nomesAmigos[i]}</li>`;
    }
}