# Rampagers of Shangri-La

## Introdução Técnica

**Rampagers of Shangri-La** é um projeto web de dark fantasy que combina worldbuilding, narrativa visual e desenvolvimento front-end para criar um universo interativo de criaturas e biomas únicos.

A proposta do projeto é apresentar Shangri-La não como o paraíso idílico que o nome sugere, mas como um mundo fragmentado em biomas distintos, cada um com sua própria identidade visual, ecossistema de criaturas e lore. O usuário navega por esse universo através de uma experiência web que combina cards de personagens — monstros com histórias, atributos e estética próprios — com a exploração desses diferentes territórios.

Do ponto de vista técnico, o projeto é construído inteiramente com **HTML5, CSS3 e JavaScript**, sem dependência de frameworks externos. Essa escolha reflete tanto uma decisão de aprendizado (aprofundar o domínio dos fundamentos da web antes de adicionar camadas de abstração) quanto uma necessidade prática: manter o projeto leve, fácil de versionar e acessível para todos os membros do grupo, independentemente do nível de experiência com ferramentas mais complexas.

A organização do código segue a lógica do próprio universo narrativo: cada bioma de Shangri-La tem seu espaço dedicado no projeto, permitindo que o conteúdo (visual, textual e interativo) cresça de forma modular conforme novas regiões e criaturas são desenvolvidas. O ponto de entrada da aplicação centraliza a navegação entre essas áreas, funcionando como o "portal" inicial para a exploração do mundo.

O desenvolvimento do projeto também integra um processo criativo paralelo de geração de arte conceitual para os monstros, com prompts elaborados para capturar o tom sombrio e a atmosfera de cada criatura, mantendo coerência visual com a identidade dark fantasy do universo.

Mais do que um exercício técnico, Rampagers of Shangri-La é um espaço onde desenvolvimento de software e construção de mundo se encontram — cada decisão de código serve à narrativa, e cada elemento de lore informa como a interface deve se comportar.

## Status

🚧 Em desenvolvimento ativo

- [x] Estrutura inicial do projeto
- [x] Sistema de cards de personagens
- [ ] Biomas adicionais
- [ ] Sistema de navegação completo entre regiões

## Sobre o Universo

Shangri-La sempre foi descrita como o paraíso perdido — um lugar de paz absoluta, escondido das guerras e da corrupção do mundo exterior.

Mas o que sobrou de Shangri-La depois de sua queda é outra história.

O que antes era santuário se fragmentou em biomas isolados, cada um moldado pelas marcas do colapso. Criaturas que antes eram guardiãs se tornaram os Rampagers — seres corrompidos por aquilo que destruiu o paraíso, cada um carregando um fragmento da história de como tudo se perdeu.

## Biomas

| Bioma | Descrição |
|-------|-----------|
| Floresta Carmesim | A Selva Carmesim não tem dono, nem origem, nem limite. Ela apenas cresce, engole e consome — e ali, sobreviver é apenas não ser a próxima presa. |
| Deserto | Uma vastidão de areias ardentes e ruínas esquecidas.     Tempestades de areia surgem do nada, e criaturas adaptadas ao calor extremo dominam este território implacável. |
| Montanhas Geladas | Onde o Reino de Kharzûm um dia ergueu suas torres, agora só restam gelo, eco e silêncio. Sobem os desesperados e os gananciosos — poucos voltam a descer. |
| Pântano | Águas negras e névoa densa escondem um lugar onde nada se decompõe em paz. Cada sussurro pode ser o último chamado de uma alma que nunca partiu. |
| Pico Celestial |Restos flutuantes do céu que caiu há eras. Gravidade falha, tempo distorce, e o eco da queda nunca cessa. Suba por sua conta e risco. |
| Porto | Construída sobre ilhas conectadas por pontes de madeira e pedra, a cidade vive em harmonia com o mar. Navios de todos os lugares chegam diariamente trazendo mercadorias, aventureiros e histórias incríveis. |

## Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Estrutura do Projeto

```text
RAMPAGERS-OF-SHANGRI-LA/
├── Bestiario/
│   ├── bestiario.html
│   ├── script.js
│   └── style.css
│
├── Biomas/
│   ├── DESERTO/
│   ├── FLORESTA-CARMESIM/
│   │   ├── Assets/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── MONTANHAS-GELIDAS/
│   ├── PANTANO/
│   ├── PICO-CELESTIAL/
│   └── PORTO/
│
│   Obs.: Todos os biomas possuem:
│   ├── Assets/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── PaginaCadastro/
│   ├── Assets/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── PaginaInicial/
│   ├── Assets/
│   ├── index.html (entrada principal)
│   ├── script.js
│   └── style.css
│
└── README.md
```

Cada bioma é tratado como um módulo independente, com seus próprios estilos, scripts e assets — o que permite expandir o universo (adicionando novos biomas ou criaturas) sem impactar o restante do projeto.

## Como Executar

Por ser um projeto construído inteiramente com HTML, CSS e JavaScript puro, não há necessidade de instalação de dependências ou build.

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/Rampagers-of-Shangri-la.git
\`\`\`

2. Abra a pasta do projeto e localize o arquivo principal:
\`\`\`
PaginaInicial/index.html
\`\`\`

3. Abra esse arquivo no navegador (recomenda-se usar uma extensão como **Live Server** no VS Code para evitar problemas com caminhos relativos de imagens e scripts).