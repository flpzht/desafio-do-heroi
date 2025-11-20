console.log("Desafio do Herói - Nível de Experiência");
console.log("---------------------------------------");

console.log("Instruções:");
console.log("1. Defina o nome do herói na variável 'nomeDoHerói'.");
console.log("2. Defina o sexo do herói na variável 'sexoDoHerói'.");
console.log("3. Defina a quantidade de pontos de experiência na variável 'quantidadeDeXP'.");
console.log("4. O programa irá calcular e exibir o nível do herói com base na quantidade de pontos de experiência.");
console.log("");

let nomeDoHerói = "Gertrudes";
let sexoDoHerói = "Feminino";
let quantidadeDeXP = 6500;

if (sexoDoHerói === "Masculino") {
    console.log("Seja bem vindo " + nomeDoHerói);
    console.log("Seu Herói, " + nomeDoHerói + ", possui " + quantidadeDeXP + " pontos de experiência.");
} else if (sexoDoHerói === "Feminino") {
    console.log("Seja bem vinda " + nomeDoHerói);
    console.log("Sua Heroína, " + nomeDoHerói + ", possui " + quantidadeDeXP + " pontos de experiência.");
} else {
    console.log("Seja bem vindx " + nomeDoHerói);
    console.log("Seu Herói, " + nomeDoHerói + ", possui " + quantidadeDeXP + " pontos de experiência.");
}


let nivel;
if (quantidadeDeXP <= 1000) {
    ;
} else if (quantidadeDeXP <= 2000) {
    nivel = "Bronze";
} else if (quantidadeDeXP <= 5000) {
    nivel = "Prata";
} else if (quantidadeDeXP <= 7000) {
    nivel = "Ouro";
} else if (quantidadeDeXP <= 8000) {
    nivel = "Platina";
} else if (quantidadeDeXP <= 9000) {
    nivel = "Ascendente";
} else if (quantidadeDeXP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

if (sexoDoHerói === "Masculino") {
    console.log("Parabéns " + nomeDoHerói + ", você alcançou o nível " + nivel + "!");
} else if (sexoDoHerói === "Feminino") {
    console.log("Parabéns " + nomeDoHerói + ", você alcançou o nível " + nivel + "!");
} else {
    console.log("Parabéns " + nomeDoHerói + ", você alcançou o nível " + nivel + "!");
}


// Código feito por flpzht
// Repositório: https://github.com/flpzht/desafio-do-heroi/tree/main
