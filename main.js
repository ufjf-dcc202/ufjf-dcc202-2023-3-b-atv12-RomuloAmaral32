import { getEstoque, transacaoNoEstoque, limpaEstoque } from "./estoque.js";

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");
const btnLimpar = document.querySelector("#limpar");

document.entrada.addEventListener('submit', leFormulario);
btnLimpar.addEventListener('click', esvaziaLista);

atualizaTela();

function leFormulario(event)
{
    event.preventDefault(event)
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const fruta = document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;
    
    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);

    transacaoNoEstoque(origem, destino, fruta, quantidade);
    atualizaTela();
    // document.entrada.submit();
}

function atualizaTela(){
    const estoque = getEstoque();
    preencheLista(olJoao, estoque.joao);
    preencheLista(olMaria, estoque.maria);
}

function preencheLista(lista, estoqueDaPessoa){
    lista.innerHTML = "";
    for(let i = 0; i < estoqueDaPessoa.length; i++)
    {
        const monte = estoqueDaPessoa[i];
        const li = document.createElement('li');
        li.textContent = `${monte.tipo}: ${monte.quantidade}`;
        lista.append(li);
    }
}

function esvaziaLista(event){
    event.preventDefault(event)
    console.log("Estoque Vazio");
}