const prompt = require ("prompt-sync")(); 
/*
Exercício 9 — Cálculo de mensalidade
A escola oferece desconto fixo de 10% na mensalidade. Crie uma função chamada
calcularMensalidade(valor) que receba o preço original, calcule o desconto e use return para
devolver o preço final.
let valorFinal = calcularMensalidade(500);
console.log(valorFinal);
// Saída esperada: 450*/

function calcular(valor){
    let desconto = valor * 0.10;
    return valor - desconto;
}
console.log(calcular(500))