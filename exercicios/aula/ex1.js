let nota1= prompt("Digite a primeira nota");
let nota2= prompt("Digite a segunda nota");

let media = (nota1 + nota2) / 2;
console.log()
console.log(media)

if (media >=7) {
    alert("Aluno aprovado");
} else if (media >= 5) {
    alert("Aluno em recuperação")
} else {
    alert("Aluno reprovado");
}

