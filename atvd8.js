const prompt = require ("prompt-sync")(); 
/*Exercício 8 — Classificação de desempenho
Crie uma função chamada classificarAluno(nota) que apresente a classificação conforme a nota.
Utilize if, else if e else. Teste com notas diferentes, considerando valores válidos de 0 a 100.
Nota Classificação
90 a 100 Excelente
70 a 89 Bom
60 a 69 Regular
Abaixo de 60 Insuficiente*/
function classificar(nota){
if (nota >=90 && nota <=100){
    console.log("Excelente " +nota);
console.log("=================")
}
else if (nota >=70 && nota <=89 ){
    console.log("Bom "+nota)
console.log("=================")
}
else if (nota >=60 && nota <=69 ){
    console.log("Regular "+nota)
console.log("=================")
}

else{
    console.log("insuficiente "+nota)
    console.log("=================")
}
}
classificar(10)
classificar(20)
classificar(30)
classificar(40)
classificar(50)
classificar(60)
classificar(70)
classificar(80)
classificar(90)
classificar(100)







