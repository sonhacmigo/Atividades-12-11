const prompt = require ("prompt-sync")(); 
/*Exercício 2 — Identificação do curso
Crie uma função chamada mostrarCurso() que exiba as informações abaixo no console. Após criá-la,
execute-a. Desafio: faça uma chamada para cada uma das duas funções criadas até agora.
Curso: Desenvolvimento de Sistemas
Instituição: Escola de Tecnologia*/
function mostrarCurso(curso){
    console.log ("Seu curso é:"+ curso);
    
}
function mostrarInstituicao(instituicao){
    console.log("Sua instituição é: " + instituicao)
}
mostrarCurso(" Desenvolvimento de sistemas")
mostrarInstituicao(" Proz Contagem")