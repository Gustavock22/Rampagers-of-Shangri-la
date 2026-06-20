const monstrosDados = {
    "agua-viva": {
        nome: "Vazantes Celestes",
        descricao: 
            "As Vazantes Celestes surgiram após a Queda do Céu, quando fragmentos do firmamento foram espalhados pelos Picos da Ruína Celestial. Seus corpos são formados por membranas translúcidas e bolsões de vazio, permitindo que flutuem entre as correntes gravitacionais instáveis da região. Elas não voam — apenas se deixam levar pelas cicatrizes deixadas pela queda. Dizem que seguir uma Vazante Celeste pode revelar caminhos ocultos entre os picos levitantes... ou conduzir um viajante ao mesmo destino do céu que um dia despencou sobre o mundo.",
        imagem: "../PICO-CELESTIAL/Assets/img/agua-viva-bg.jpeg"
    },

    "dragao": {
        nome: "Asterions",
        descricao:
            "Nascido dos fragmentos de uma estrela que caiu do céu, Asterion é um dragão cujo corpo é formado por pedaços de pôr do sol cristalizados. Cada escama guarda as cores de um céu diferente, perdido ao longo da história. Quando voa, o eco da queda da estrela que o criou ressoa pelos céus. Considerado uma das criaturas mais antigas do mundo, Asterion surge sempre que grandes mudanças estão prestes a acontecer, observando silenciosamente o fim e o início de novas eras.",
        imagem: "../PICO-CELESTIAL/Assets/img/dragao-bg.jpeg"
    },

    "golem":{
        nome: "Ruínalito",
        descricao:
            "Quando os Picos da Ruína Celestial começaram a cair, magos e engenheiros uniram seus conhecimentos em uma tentativa desesperada de salvar as cidades suspensas. Usando pedra flutuante, magia antiga e os corpos dos sobreviventes, criaram os primeiros Ruínalitos. O plano falhou. As cidades foram destruídas, e os Ruínalitos permaneceram presos ao instante da catástrofe. Até hoje, eles vagam entre as ilhas quebradas, sustentando fragmentos de montanhas que já deveriam ter despencado há séculos. Dizem que cada Ruínalito carrega as memórias daqueles que foram usados em sua criação. Por isso, seus movimentos parecem uma tentativa eterna de impedir a queda que nunca conseguiram evitar.",
        imagem:  "../PICO-CELESTIAL/Assets/img/golem-bg.jpeg"   
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