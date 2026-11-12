const prompt = require ("prompt-sync")(); 
/*Exercício 10 — Sistema de aprovação
Crie uma função chamada avaliarAluno(nome, nota1, nota2) que receba o nome de um aluno e duas
notas, calcule a média, verifique a aprovação (média igual ou superior a 60) e exiba o nome, a
média e a situação final.
avaliarAluno("Lucas", 80, 70);
Saída esperada:
Aluno: Lucas
Média: 75
Situação: Aprovado
Desafio extra: crie uma função separada chamada calcularMedia() que retorne a média e utilize essa
função dentro de avaliarAluno(), evitando repetir o cálculo*/

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function avaliarAluno(nome, nota1, nota2) {
    let media = calcularMedia(nota1, nota2);
    let situacao;

    if (media >= 60) {
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }

    console.log("Aluno: " + nome);
    console.log("Média: " + media);
    console.log("Situação: " + situacao);
}

avaliarAluno("Lucas", 80, 70);