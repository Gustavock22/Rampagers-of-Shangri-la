const monstrosDados = {
    "rainha-sete-maldicao": {
        nome: "Rainha Sete Maldição",
        descricao: 
            "Em um último esforço para salvar seu povo da destruição, a rainha realizou um antigo ritual que prometia proteger o reino. Porém, o sacrifício falhou, desencadeando uma catástrofe que engoliu a cidade sob as areias do deserto. Sua alma permaneceu presa às ruínas de seu antigo lar, condenada a vagar eternamente entre os vestígios do império que jurou proteger. Consumida pela culpa e pela loucura ao longo dos séculos, ela passou a enxergar qualquer intruso como uma ameaça ao seu reino. Dizem que aqueles que ousam atravessar suas fronteiras são marcados por sua maldição e perseguidos até deixarem as areias para trás... ou se tornarem parte delas.",
        imagem: "../DESERTO/Assets/img/rainha-sete-maldicao.png"
    },

    "skaraks-escorpiao": {
        nome: "Skaraks",
        descricao:
            "Uma raça de escorpiões adaptada às condições extremas do deserto. Possuem carapaças resistentes como pedra e são capazes de permanecer enterrados por dias, aguardando presas desavisadas.Espalhados pelas ruínas do antigo império, os Skaraks usam sua camuflagem natural para emboscar viajantes e proteger seus territórios. Os maiores exemplares habitam as regiões mais profundas do deserto, onde guardam segredos e relíquias soterradas há séculos.",
        imagem: "../DESERTO/Assets/img/escorpiao.png"
    },

    "abutre":{
        nome: "Rasga Sol",
        descricao:
            "Uma espécie de abutre adaptada ao Deserto dos Reis Esquecidos. Sua plumagem escurecida absorve o calor do sol, e suas asas largas criam sombras que confundem viajantes no chão.Eles não caçam ativamente — apenas seguem de longe aqueles que já estão enfraquecidos, esperando o momento em que o deserto faça seu trabalho. Dizem que ver um Rasga-Sol sobrevoando baixo é um mau presságio, pois significa que a sobrevivência já está por um fio.",
        imagem:  "../DESERTO/Assets/img/abutre.png"   
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