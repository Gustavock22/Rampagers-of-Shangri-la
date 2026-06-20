const monstrosDados = {
    "sereia": {
        nome: "Sereia das Docas",
        descricao: 
        "As sereias de Luméria vivem próximas à cidade há gerações. Quando Porto de Luméria ainda era apenas uma pequena vila de pescadores, elas guiavam embarcações perdidas durante tempestades usando seus cantos. Em troca, os moradores protegiam as áreas onde elas viviam. Com o passar dos anos, uma aliança silenciosa foi criada entre sereias e humanos, tornando-as símbolos de boa sorte para os marinheiros.",
        imagem: "../PORTO/Assets/img/sereia-bg.png"
    },

    "polvo": {
        nome: "Polvo Vigia",
        descricao:
            " Os Polvos Vigia descendem de uma espécie extremamente inteligente que habitava a baía antes mesmo da fundação da cidade. Segundo as lendas, durante uma invasão pirata, vários deles cercaram os navios inimigos e danificaram suas âncoras, dando tempo para que os moradores se preparassem. Desde então, são considerados guardiões do porto e costumam alertar pescadores quando percebem perigos se aproximando das águas de Luméria",
        imagem: "../PORTO/Assets/img/polvo-bg.png"
    },

    "carangueijo":{
        nome: "Caranguejo-Mensageiro",
        descricao:
            "Há muito tempo, uma grande tempestade isolou partes da cidade, impedindo a comunicação entre os moradores. Observando como os caranguejos conseguiam atravessar os píeres e passagens estreitas sem dificuldade, os habitantes começaram a treiná-los para transportar pequenas mensagens. Hoje, eles fazem parte do cotidiano de Luméria e até possuem pequenas marcas coloridas em suas conchas para indicar seus destinos.",
        imagem:  "../PORTO/Assets/img/carangueijo-bg.png" 
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