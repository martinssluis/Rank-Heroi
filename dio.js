let nome = "Luis Martins"; // Nome do herói
let bat = 1; // Contador de batalhas, começando pela primeira batalha
let xpTotal = 0; // Experiência total do herói, começando em 0
let rank; // Variável que armazenará o rank do herói
let xp; // Experiência ganha em cada batalha
let level = 0; // Nível do herói, inicializado em 0
let dificuldadeParaEvoluir = 100; // Padrão inicial de dificuldade para subir de nível
const nivelMaximo = 100; // Definindo o nível máximo

// Função para calcular o rank com base no nível do herói
function calcularRank(level) {
    if (level >= 1 && level <= 10) {
        return "Ferro";
    } else if (level >= 11 && level <= 20) {
        return "Bronze";
    } else if (level >= 21 && level <= 35) {
        return "Prata";
    } else if (level >= 36 && level <= 50) {
        return "Ouro";
    } else if (level >= 51 && level <= 65) {
        return "Platina";
    } else if (level >= 66 && level <= 80) {
        return "Ascendente";
    } else if (level >= 81 && level <= 90) {
        return "Imortal";
    } else {
        return "Radiante"; // Rank máximo
    }
}

// O loop 'while' vai continuar até que o herói atinja o nível máximo
while (level < nivelMaximo) {
    // Gera um número aleatório de experiência entre 100 e 700 para cada batalha
    xp = Math.floor(Math.random() * 601) + 100;
    
    // Adiciona a experiência da batalha atual ao total de experiência
    xpTotal += xp;
    
    // Calcula o nível do herói com base na experiência total e na dificuldade para evoluir
    if (xpTotal >= dificuldadeParaEvoluir) {
        level++;
        xpTotal -= dificuldadeParaEvoluir; // Subtrai a experiência usada para o próximo nível
    }
    
    // Atualiza o rank com base no nível
    rank = calcularRank(level);
    
    // Aumenta a dificuldade para evoluir usando uma progressão mais suave (level * 10)
    dificuldadeParaEvoluir = 100 + (level * 10);

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

Próximo nível requer: ${dificuldadeParaEvoluir} pontos de experiência

=========================================================
`;

    // Exibe a mensagem no console
    console.log(mensagem);

    // Incrementa o contador de batalhas
    bat++;
    
    // Verifica se o nível máximo foi atingido
    if (level >= nivelMaximo) {
        console.log(`
==================== FIM DA JORNADA ====================

Parabéns! ${nome} atingiu o nível máximo (${nivelMaximo}) e o rank ${rank}!

=========================================================
`);
        break; // Sai do loop quando o nível máximo é alcançado
    }
}
