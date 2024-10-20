# Desafio Classificador de Nível de Herói <img src="https://static.wikia.nocookie.net/alendadoheroi/images/5/53/Guardi%C3%A3o.gif/revision/latest?cb=20210111175150&path-prefix=pt-br" width="50" style="vertical-align: middle;" />

## <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="20" height="20" /> - JavaScript

# Descrição das Diferenças Entre Versões  <img src="https://cdn.pixabay.com/animation/2023/06/30/05/12/05-12-37-113_512.gif" width="50" height="50">

### Cálculo da Dificuldade para Evoluir

- **Versão Anterior**: Usava valores fixos que aumentavam com `level * 10`, simplificando a lógica, mas tornando a progressão mais previsível.
- **Nova Versão**: Utiliza uma função logarítmica para calcular a dificuldade, proporcionando uma progressão mais balanceada e dinâmica.

### Estrutura Condicional para Rank

- **Versão Anterior**: Utilizava `if-else` para definir o rank, o que pode ser mais verboso, mas igualmente funcional.
- **Nova Versão**: Usa `switch` para definir o rank, deixando o código mais limpo e organizado.

### Critério para Subida de Rank 

- **Versão Anterior**: A progressão de `rank` era baseada no `level` do jogador, calculado com base no `xpTotal`. Isso tornava a evolução menos intuitiva.
- **Nova Versão**: A evolução é baseada no `xp` gerado após cada batalha (`bat`), que alimenta o `xpAtual`. A cada nível, é exigido mais XP para progredir. O `xpAtual` é reajustado após cada nível, tornando a progressão mais semelhante aos jogos reais.

### Mensagens de Saída

- **Versão Anterior**: Mensagens mais simples e diretas.
- **Nova Versão**: Mensagens mais informativas e atrativas, incluindo detalhes sobre a batalha, XP ganho, e requisitos para o próximo nível.

### Lógica de Evolução

- **Versão Anterior**: A evolução do nível era baseada na experiência total acumulada (`xpTotal`).
- **Nova Versão**: A evolução do nível é baseada na experiência atual (`xpAtual`) em comparação com a dificuldade.

---

Essas alterações tornam o código mais dinâmico, com uma progressão de dificuldade mais equilibrada e mensagens mais detalhadas. Melhoram a experiência do usuário e a legibilidade do código.
