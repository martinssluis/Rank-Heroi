// Desafio Classificador de nível de Héroi

// O que deve ser utilizado

// Variáveis, Operadores, Laços de repetição, Estruturas de decisões

// Crie uma váriavel para armazenar o nome e a quantidade de experiência (xp) de um herói, depois utilize uma estrutura de decisão para apresentar alguma mensagem abaixo:

// Se xp For menos que 1000 = ferro
// Se xp For entre 1001 e 2000 =  bronze
// Se xp For entre 2001 e 5000 = Prata 
// Se xp For entre 5001 e 7000 = Ouro
// Se xp For entre 7001 e 8000 = Platina 
// Se xp For entre 8001 e 9000 = Ascendente
// Se xp For entre 9001 e 10000 = Imortal
// Se xp For maior ou igual a 10001 = Radiante

let nome = "Luis Martins" // Nome do herói
let bat = 1 // Contador de batalhas, começando pela primeira batalha
let xpTotal = 0 // Experiência total do herói, começando em 0
let rank // Variável que armazenará o rank do herói
let xp // Experiência ganha em cada batalha
let level // Nível do herói, calculado com base na experiência total
let dificuldadeParaEvoluir = 100 // Padrão de dificuldade para subir de nível, começa em 100

// O loop 'while' simula as batalhas do herói, que irão acontecer até que o contador 'bat' chegue a 40
while(bat <= 40){
    // Gera um número aleatório de experiência entre 1 e 500 para cada batalha
    xp = Math.floor(Math.random() * 501) 
    
    // Adiciona a experiência da batalha atual ao total de experiência
    xpTotal += xp 
    
    // Calcula o nível do herói com base na experiência total e na dificuldade para evoluir
    level = Math.floor(xpTotal / dificuldadeParaEvoluir)

    // Condicional que define o rank do herói de acordo com a quantidade de experiência acumulada
    if(xpTotal > 0 && xpTotal <= 1000) {
        rank = "ferro"
    } else if( xpTotal > 1000 && xpTotal <= 2000) {
        rank = "bronze"
        dificuldadeParaEvoluir = 150 // Aumenta a dificuldade para evoluir ao alcançar o próximo rank
    } else if (xpTotal > 2000 && xpTotal <= 5000) {
        rank = "prata"
        dificuldadeParaEvoluir = 175 
    } else if(xpTotal > 5000 && xpTotal <= 7000) {
        rank = "ouro"
        dificuldadeParaEvoluir = 180 
    } else if (xpTotal > 7000 && xpTotal <= 8000) {
        rank = "platina"
        dificuldadeParaEvoluir = 200 
    } else if (xpTotal > 8000 && xpTotal <= 9000) {
        rank = "ascendente"
        dificuldadeParaEvoluir = 220 
    } else if (xpTotal > 9000 && xpTotal < 10000) {
        rank = "imortal"
        dificuldadeParaEvoluir = 250 
    } else {
        rank = "Radiante" // O rank máximo é "Radiante", para quem acumula 10000 ou mais de experiência
    }

    // Exibe o resumo da batalha atual e o status atualizado do herói
    const mensagem = `
==================== RESUMO DO HERÓI ====================

Herói: ${nome}

Resumo da Batalha:
${bat}

Ganhou: ${xp} pontos de experiência
Level atual: ${level}
Experiência total acumulada: ${xpTotal}
Rank atual: ${rank}

=========================================================
`;

    // Exibe a mensagem no console
    console.log(mensagem);

    // Incrementa o contador de batalhas para passar para a próxima
    bat++
}
