const monstrosDados = {
    "gorila": {
        nome: "Gorila da Coroa Vermelha",
        descricao: 
            "Os Gorilas da Coroa Vermelha são os guardiões mais antigos da Selva Carmesim. Diferentes de outros animais, eles não nasceram da floresta – foram moldados por ela. Há séculos, um grupo de exploradores tentou dominar o coração da selva, derrubando árvores sagradas e matando as criaturas que ali viviam. A floresta respondeu. Raízes e esporos se fundiram aos corpos dos gorilas, transformando-os em colossos vivos. Desde então, eles patrulham seu território, esmagando tudo que ameaça o equilíbrio natural. Quanto mais destruição o invasor causa, mais fortes e inteligentes os gorilas se tornam, pois absorvem a memória da floresta e aprendem com cada batalha.",
        imagem: "../FLORESTA-CARMESIM/Assets/img/gorila-bg.png"
    },

    "cobra": {
        nome: "Serpente de Escamas Rubras",
        descricao:
            "As Serpentes de Escamas Rubras são tão antigas quanto as primeiras raízes da Selva Carmesim. Dizem que surgiram quando o próprio solo da floresta ganhou forma e vontade. Elas possuem uma conexão incompreensível com a selva, sentindo cada passo, cada respiração e cada batida de coração que acontece em seu domínio. Não atacam por fome, mas por ordem da floresta. Quando alguém tenta abrir caminhos à força ou levar o que não pertence, as serpentes surgem. Suas mordidas não apenas envenenam – carregam esporos que se espalham pelo corpo, fazendo raízes brotarem sob a pele e lentamente transformando a vítima em parte da selva. Alguns exploradores voltaram dizendo que ouviram sussurros vindos do solo antes do ataque. A floresta avisa. A serpente é apenas sua voz.",
        imagem: "../FLORESTA-CARMESIM/Assets/img/cobra-bg.png"
    },

    "flor-carnivora":{
        nome: "Flores do Abismo",
        descricao:
            "As Flores do Abismo são o resultado da fome da própria selva. Elas nascem onde há sangue derramado, dor extrema ou mortes em grande quantidade. Suas pétalas exalam um perfume que hipnotiza e acalma, levando a vítima a se aproximar sem perceber o perigo. Quando se abre, a flor libera enzimas capazes de dissolver carne, ossos e até armaduras. Não são apenas plantas – são organismos inteligentes que observam, esperam e se adaptam. Quanto mais os humanos queimam, cortam ou envenenam a floresta, mais as flores se multiplicam e evoluem. Em seu interior, ossos dissolvidos viram nutrientes. Cada flor carrega as lembranças das vítimas que consumiu, e essas lembranças alimentam a vontade da selva.",
        imagem:  "../FLORESTA-CARMESIM/Assets/img/flor-carnivora-bg.png" 
    }
};

const monstros = document.querySelectorAll('.monstro');
const overlay  = document.getElementById('monstroOverlay');
const fechar   = document.getElementById('fecharOverlay');

const overlayImg = document.getElementById('overlayImg');
const overlayNome = document.getElementById('overlayNome');
const overlayDescricao = document.getElementById('overlayDescricao');

monstros.forEach(monstro => {
    monstro.addEventListener('click', () => {
        const id = monstro.dataset.id;
        const dados = monstrosDados[id];

        overlayImg.src = dados.imagem;
        overlayNome.textContent = dados.nome;
        overlayDescricao.textContent = dados.descricao;
        overlay.classList.add('ativo');
    });
});

fechar.addEventListener('click', () => {
    overlay.classList.remove('ativo');
});