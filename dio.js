let nome = "Luis Martins"  // Nome do herói
let bat = 1  // Contador de batalhas
let xpTotal = 0  // Experiência total acumulada
let xpAtual = 0  // Experiência disponível para evoluir
let rank  // Variável que armazenará o rank do herói
let xp  // Experiência ganha em cada batalha
let level = 0  // Nível do herói, inicializado em 0
const nivelMaximo = 100  // Definindo o nível máximo

// Função para calcular a dificuldade 
function dificuldadeParaEvoluir(level) {
    return Math.ceil(Math.log(level + 1) / Math.log(3)) * 100  // Multiplica por 100 para manter a dificuldade em uma escala maior
}

// O loop 'while' vai continuar até que o herói atinja o nível máximo
while (level < nivelMaximo) {
    // Gera um número aleatório de experiência entre 100 e 200 por batalha
    xp = Math.floor(Math.random() * 101) + 100
    // Adiciona a experiência da batalha ao total acumulado e à experiência disponível
    xpTotal += xp
    xpAtual += xp

    // Calcula o nível do herói com base na experiência atual e a dificuldade para evoluir
    while (xpAtual >= dificuldadeParaEvoluir(level)) {
        xpAtual -= dificuldadeParaEvoluir(level) // Subtrai a experiência usada para subir de nível
        level++  // Sobe de nível

        // Atualiza o rank do herói conforme o nível
        switch (true) {
            case (level >= 100):
                rank = "Radiante"
                break
            case (level >= 81):
                rank = "Imortal"
                break
            case (level >= 66):
                rank = "Ascendente"
                break
            case (level >= 51):
                rank = "Platina"
                break
            case (level >= 36):
                rank = "Ouro"
                break
            case (level >= 21):
                rank = "Prata"
                break
            case (level >= 11):
                rank = "Bronze"
                break
            case (level <= 10):
                rank = "Ferro"
                break
        }
    }

    // Exibe o resumo da batalha atual e o status atualizado do herói
    const mensagem = `==================== RESUMO DO HERÓI ====================
Herói: ${nome}

Resumo da Batalha #${bat}

Ganhou: ${xp} pontos de experiência

Level atual: ${level}

XP acumulado durante a jornada: ${xpTotal}

XP atual disponível: ${xpAtual}

Rank atual: ${rank}

Próximo nível requer: ${dificuldadeParaEvoluir(level)} pontos de experiência
=========================================================`
    
    // Exibe a mensagem no console
    console.log(mensagem)
    
    // Incrementa o contador de batalhas
    bat++
    
    // Verifica se o nível máximo foi atingido
    if (level >= nivelMaximo) {
        console.log(`==================== FIM DA JORNADA ====================
Parabéns! ${nome} atingiu o nível máximo (${nivelMaximo}) e o rank ${rank}!
Seu xp total durante a jornada foi de ${xpTotal}, com ${xpAtual} de xp extra.
Obrigado por jogar!
=========================================================`)
        break  // Sai do loop quando o nível máximo é alcançado
    }
}
