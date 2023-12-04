const olJoao = document.querySelector("ol#joao");
const olMaria = document.querySelector("ol#maria");
document.entrada.enviar.addEventListener('submit' , leformulario)

function leformulario(event){
event.preventDefault()
const quantidade= document.entrada.quantidade.value;
const quantidade= document.entrada.quantidade.valueAsnumber;
const fruta= document.entrada.fruta.value;
const origem = document.entrada.origem.value;
const destino = document.entrada.destino.value;
console.log(`Eu tenho ${quantidade} ${fruta}`);
//document.entrada.submit();
}