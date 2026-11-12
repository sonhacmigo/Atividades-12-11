const prompt = require ("prompt-sync")(); 

function calcularmedia(nota1,nota2){
    let media = (nota1 + nota2) / 2
    console.log("Media do aluno:")
    return media;
}
console.log(calcularmedia(80,60))
