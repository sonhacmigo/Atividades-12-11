// Saída esperada: Nota atualizada: 75
const prompt = require ("prompt-sync")(); 
function adicionar(nota, ponto){
let notaat = nota + ponto
console.log("Sua nova nota é: " + notaat)
}
adicionar(60,15)