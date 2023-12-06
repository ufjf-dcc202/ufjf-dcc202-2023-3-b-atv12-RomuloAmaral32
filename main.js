import { getEstoque } from "./estoque";

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");
document.entrada.enviar.addEventListener('submit' , leformulario)

atualizatTela();

function leformulario(event){
event.preventDefault()
const quantidade = document.entrada.quantidade.valueAsNumber;
const fruta= document.entrada.fruta.value;
const origem = document.entrada.origem.value;
const destino = document.entrada.destino.value;
console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);
//document.entrada.submit();
}
function atalizaTela(){
    const estoque = getEstoque();
olJoao.innerHTML="";
for( let i=0; i<estoque.joao.length;i++){
    const monte= estoque.joao[i];
   const li = document.createElement('li');
   li.textContent = `${monte.tipo}: ${monte.qtd}`;
   olJoao.append(li);
}
}