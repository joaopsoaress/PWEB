// 1) Receber três números e retornar o maior deles.
function retornarMaior(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

// 2) Receber três números e retorná-los em ordem crescente.
function ordenarCrescente(n1, n2, n3) {
    let numeros = [n1, n2, n3];
    // Ordena numericamente
    numeros.sort((a, b) => a - b);
    return numeros;
}

// 3) Receber uma string e retornar se ela é palíndromo ou não.
function verificarPalindromo(texto) {
    let textoLimpo = texto.toLowerCase().replace(/\s/g, '');
    let textoInvertido = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoInvertido;
}

// 4) Receber duas palavras e verificar se a segunda é subconjunto da primeira.
function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) {
        return "erro";
    }

    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

// 5) Receber uma data e devolver o dia da semana.
function obterDiaDaSemana(dataString) {
    let data = new Date(dataString);
    
    if (isNaN(data.getTime())) {
        return "Data inválida";
    }

    let diasSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];
    
    return diasSemana[data.getDay()];
}


let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let num3 = Number(prompt("Digite o terceiro número:"));
alert("O maior número entre os três é: " + retornarMaior(num1, num2, num3));


let nA = Number(prompt("2) Digite um número para ordenar:"));
let nB = Number(prompt("2) Digite outro número:"));
let nC = Number(prompt("2) Digite o último número:"));
let ordem = ordenarCrescente(nA, nB, nC);
alert("Ordem crescente: " + ordem.join(", "));


let frase = prompt("3) Digite uma palavra ou frase para verificar se é palíndromo:");
let isPalindromo = verificarPalindromo(frase);
if (isPalindromo) {
    alert("Sim. É um palíndromo.");
} else {
    alert("Não é um palíndromo.");
}


let palavra1 = prompt("4) Digite a primeira palavra:");
let palavra2 = prompt("4) Digite a segunda palavra:");
alert("Resultado: " + verificarSubconjunto(palavra1, palavra2));


let dataInput = prompt("5) Digite uma data (ex: 2024-05-25):");
alert("O dia da semana é: " + obterDiaDaSemana(dataInput));