# Desafio Classificador de Nível de Herói <img src="https://static.wikia.nocookie.net/alendadoheroi/images/5/53/Guardi%C3%A3o.gif/revision/latest?cb=20210111175150&path-prefix=pt-br" width="50" style="vertical-align: middle;" />

Este projeto é uma simulação de um sistema de progressão de nível para um herói em batalhas, onde o objetivo é calcular o nível e rank de um herói com base na experiência (XP) acumulada. O projeto utiliza **JavaScript** para gerar números aleatórios, controlar o fluxo das batalhas, calcular a evolução do herói e exibir o progresso.

# Tecnologias Utilizadas

## <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="20" height="20" /> - JavaScript
- **JavaScript**: JavaScript foi escolhido por sua flexibilidade e pela facilidade com que permite manipular dados e lógica. O projeto utiliza diversas funcionalidades de JavaScript:
  - **Funções Matemáticas**: A função `Math.random()` é utilizada para gerar uma quantidade aleatória de experiência (XP) em cada batalha, adicionando um fator de incerteza e dinamismo.
  - **Laços de Repetição (`while`)**: O loop `while` foi implementado para simular uma série de batalhas contínuas, acumulando experiência até o limite do nível máximo.
  - **Estruturas Condicionais (`if...else`)**: A lógica de progressão do herói é baseada em estruturas de decisão, que determinam o rank do herói com base em seu nível, que é influenciado pela experiência total acumulada.
  - **Template Literals**: Foram usados para facilitar a geração dinâmica de mensagens no console com informações detalhadas sobre cada batalha, utilizando `${}` para inserir variáveis dentro das strings.

## Funcionalidades ⚙️

- Gera experiência (XP) aleatória para o herói a cada batalha.
- Calcula o nível do herói com base na experiência total acumulada.
- Ajusta a dificuldade de evolução conforme o nível do herói aumenta.
- Determina o rank do herói de acordo com o nível atingido, com uma nova lógica de progressão.
- Exibe um resumo detalhado após cada batalha, incluindo o nível atual e o rank.

## O que é utilizado 🛠️

- **Variáveis**: Para armazenar o nome, experiência, nível e rank do herói.
- **Operadores**: Para realizar cálculos de experiência e nível.
- **Laços de repetição**: O loop `while` é utilizado para simular várias batalhas até atingir o nível máximo.
- **Estruturas de decisão**: `if...else if...else` são utilizadas para determinar o rank do herói com base no nível atingido.

## Regras de Classificação ⚔️

O sistema de classificação do herói é baseado no nível atingido, que é determinado pela quantidade total de experiência (XP) acumulada:

- Nível 1: **Ferro** (1-10)
- Nível 2: **Bronze** (11-20)
- Nível 3: **Prata** (21-35)
- Nível 4: **Ouro** (36-50)
- Nível 5: **Platina** (51-65)
- Nível 6: **Ascendente** (66-80)
- Nível 7: **Imortal** (81-90)
- Nível 8: **Radiante** (91-100)
