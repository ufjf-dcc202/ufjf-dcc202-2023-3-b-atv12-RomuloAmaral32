document.entrada.enviar.addEventListener('submit' , leformulario)

function leformulario(event){
event.preventDefault()
const quantidade= document.entrada.quantidade.value;
const fruta= document.entrada.fruta.value;

console.log(`Eu tenho ${quantidade} ${fruta}`);
}