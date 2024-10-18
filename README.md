# Desafio Classificador de Nível de Herói <img src="https://static.wikia.nocookie.net/alendadoheroi/images/5/53/Guardi%C3%A3o.gif/revision/latest?cb=20210111175150&path-prefix=pt-br" width="50" style="vertical-align: middle;" />


Este projeto é uma simulação de um sistema de progressão de nível para um herói em batalhas, onde o objetivo é calcular o nível e rank de um herói com base na experiência (XP) acumulada. O projeto utiliza **JavaScript** para gerar números aleatórios, controlar o fluxo das batalhas, calcular a evolução do herói e exibir o progresso.

# Tecnologias Utilizadas

## <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="20" height="20" /> - JavaScript
- **JavaScript**: JavaScript foi escolhido por sua flexibilidade e pela facilidade com que permite manipular dados e lógica. O projeto utiliza diversas funcionalidades de JavaScript:
  - **Funções Matemáticas**: A função `Math.random()` é utilizada para gerar uma quantidade aleatória de experiência (XP) em cada batalha, adicionando um fator de incerteza e dinamismo.
  - **Laços de Repetição (`while`)**: O loop `while` foi implementado para simular uma série de batalhas contínuas, acumulando experiência até o limite estabelecido.
  - **Estruturas Condicionais (`if...else`)**: A lógica de progressão do herói é baseada em estruturas de decisão, que determinam o rank do herói com base em sua experiência total acumulada.
  - **Template Literals**: Foram usados para facilitar a geração dinâmica de mensagens no console com informações detalhadas sobre cada batalha, utilizando `${}` para inserir variáveis dentro das strings.

## <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="20" height="20" />   - <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="20" height="20" /> Git e GitHub  

O processo de desenvolvimento deste projeto foi gerenciado utilizando **Git** e **GitHub**, seguindo boas práticas de versionamento para manter um fluxo de trabalho organizado e colaborativo. Aqui estão os passos detalhados que segui:

1. **Criação do Repositório no GitHub**:
   O primeiro passo foi criar um repositório no GitHub, onde o código do projeto seria armazenado. Isso facilita o controle de versões e o compartilhamento com outras pessoas. Acesse o GitHub e crie um novo repositório preenchendo as informações básicas, como nome e descrição do projeto.

2. **Clonagem do Repositório para o Ambiente Local**:
   Após criar o repositório remoto, utilizei o comando `git clone` para baixar uma cópia do repositório na minha máquina local, permitindo que eu pudesse começar a desenvolver o projeto.

3. **Atualizando e Salvando Alterações Localmente:**
   Com o repositório clonado, fiz as modificações necessárias no código. Após cada mudança significativa, verifiquei o status dos arquivos modificados com o git status
4. **Preparando as Alterações para Commit (git add):**
    Para registrar as mudanças no controle de versão, adicionei os arquivos modificados à staging area com o comando git add .
5. **Registrando as Mudanças com um Commit (git commit):**
    Após adicionar os arquivos, utilizei o comando git commit para salvar as alterações localmente com uma mensagem descritiva que expliquei o que foi modificado
6. **Enviando as Alterações para o GitHub (git push):**
     Depois de confirmar que todas as alterações estavam corretas e salvas localmente, utilizei o comando git push para enviar essas alterações ao repositório remoto no

## Funcionalidades ⚙️

- Gera experiência (XP) aleatória para o herói a cada batalha.
- Calcula o nível do herói com base na experiência total.
- Ajusta a dificuldade de evolução conforme o rank do herói aumenta.
- Determina o rank do herói de acordo com a experiência acumulada.
- Exibe um resumo detalhado após cada batalha.

## O que é utilizado 🛠️

- **Variáveis**: Para armazenar o nome, experiência, nível e rank do herói.
- **Operadores**: Para realizar cálculos de experiência e nível.
- **Laços de repetição**: O loop `while` é utilizado para simular várias batalhas.
- **Estruturas de decisão**: `if...else if...else` são utilizadas para determinar o rank do herói com base na experiência.

## Regras de Classificação ⚔️

O sistema de classificação do herói é baseado na quantidade total de experiência (XP) acumulada:

- XP menor que 1000: **Ferro**
- XP entre 1001 e 2000: **Bronze**
- XP entre 2001 e 5000: **Prata**
- XP entre 5001 e 7000: **Ouro**
- XP entre 7001 e 8000: **Platina**
- XP entre 8001 e 9000: **Ascendente**
- XP entre 9001 e 10000: **Imortal**
- XP maior ou igual a 10001: **Radiante**