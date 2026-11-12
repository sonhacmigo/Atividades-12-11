const prompt = require ("prompt-sync")(); 
/*Exercício 7 — Verificando a aprovação
Crie uma função chamada verificarAprovacao(media). Utilize if e else para exibir "Aluno aprovado!"
quando a média for maior ou igual a 60, e "Aluno reprovado!" quando for menor que 60.
verificarAprovacao(85);
verificarAprovacao(45);
verificarAprovacao(60);*/
function verify(media){
    if (media>=60){
    console.log("aluno aprovado")
}
else{
    console.log("aluno reprovado")
}
}
verify(85)
verify(60)
verify(45)
