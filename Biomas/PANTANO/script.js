const monstrosDados = {
    "jacare": {
        nome: "Alligatours",
        descricao: 
            "Ninguém sabe ao certo o que deu origem ao Alligatours. Alguns dizem que era um simples jacaré que se alimentou dos corpos lançados ao pântano durante os antigos rituais proibidos. Com o passar dos séculos, as almas dos condenados fundiram-se à criatura, tornando-a uma monstruosidade colossal.Seu casco é coberto por algas negras, correntes enferrujadas e restos dos afogados que devorou. Em noites de névoa densa, é possível ouvir centenas de vozes sussurrando ao mesmo tempo vindas de seu interior. Dizem que cada alma consumida permanece presa para sempre dentro da criatura, condenada a reviver seus últimos momentos eternamente.",
        imagem: "../PANTANO/Assets/img/jacare-bg.jpg"
    },

    "aranha": {
        nome: "Tecelã da Névoa",
        descricao:
            "Entre as árvores mortas do pântano vive a Tecelã da Névoa, uma aranha ancestral tão antiga quanto as próprias maldições da região. Seu corpo tornou-se parte do ambiente, coberto por musgo, fungos e raízes que cresceram sobre sua carapaça ao longo dos séculos.Ao invés de caçar pela força, ela invade a mente de suas vítimas. Dentro da névoa, suas teias invisíveis criam ilusões perfeitas de familiares, amigos e entes queridos já falecidos. Muitos viajantes seguem essas aparições acreditando ter encontrado ajuda, apenas para desaparecer sem deixar vestígios.",
        imagem: "../PANTANO/Assets/img/aranha-bg.jpg"
    },

    "corvo":{
        nome: "Corvo das Últimas Palavras",
        descricao:
            "Os Corvos das Últimas Palavras surgiram das almas daqueles que morreram sozinhos no pântano. Suas penas são feitas de fumaça escura e seus olhos brilham como brasas na névoa.Eles observam silenciosamente os viajantes dos galhos mais altos e raramente atacam. Em vez disso, repetem incessantemente as últimas palavras de pessoas que pereceram na região. Muitos exploradores enlouquecem ao ouvir a voz de companheiros desaparecidos ecoando entre as árvores. Quando um Corvo das Últimas Palavras começa a seguir alguém, os habitantes locais acreditam que sua morte já foi escolhida pelo pântano.",
        imagem:  "../PANTANO/Assets/img/corvo-bg.jpg"   
    }
};

const monstros = document.querySelectorAll('.monstro');
const jacare = document.querySelector('.monstro-jacare');
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

jacare.addEventListener('click', () => {
        const id = jacare.dataset.id;
        const dados = monstrosDados[id];

        overlayImg.src = dados.imagem;
        overlayNome.textContent = dados.nome;
        overlayDescricao.textContent = dados.descricao;
        overlay.classList.add('ativo');
});

fechar.addEventListener('click', () => {
    overlay.classList.remove('ativo');
});