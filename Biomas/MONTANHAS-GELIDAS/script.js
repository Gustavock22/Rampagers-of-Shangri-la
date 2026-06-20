const monstrosDados = {
    "urso-polar": {
        nome: "Urso Polar Atroz",
        descricao: 
            "Os Ursos-Polares Atrozes são os predadores supremos das terras congeladas. Dizem que surgiram após gerações sobrevivendo aos invernos intermináveis que destruíram quase toda a vida da região. Sua fome é tão intensa que conseguem sentir o cheiro de carne a quilômetros de distância, despertando de sua hibernação mesmo nas tempestades mais violentas. O Atroz tem 3m em pé, garras do tamanho de facões. A pelagem branca vive suja de sangue seco — de foca, de cabra-do-gelo, de explorador. Ele não caça por esporte. Caça porque a fome dele nunca passa. O frio antinatural do bioma acelerou o metabolismo. Precisa comer o próprio peso a cada semana.",
        imagem: "../MONTANHAS-GELIDAS/Assets/img/urso-polar-bg.jpeg"
    },

    "verme": {
        nome: "Verme de Gelo",
        descricao:
            "Nas profundezas sob a neve existe uma rede de túneis escavada por criaturas ancestrais conhecidas como Vermes de Gelo. Cegos desde o nascimento, eles aprenderam a sobreviver detectando o calor dos seres vivos através do solo congelado. Quando encontram uma presa, emergem da neve em um ataque devastador, cobrindo a vítima com um muco congelante capaz de aprisioná-la instantaneamente. Os habitantes das regiões geladas carregam bolsas de sal durante suas viagens, pois antigas lendas afirmam que os Vermes de Gelo fogem desesperadamente ao sentir seu contato.",
        imagem: "../MONTANHAS-GELIDAS/Assets/img/verme-bg.png"
    },

    "anao":{
        nome: "Assombrador do Gelo",
        descricao:
            "Quando a antiga cidade anã de Kharzûm foi consumida pelo frio, muitos guerreiros e mineradores ficaram presos sob o gelo eterno. Seus corpos desapareceram há muito tempo, mas suas almas permanecem aprisionadas nas paredes congeladas das montanhas. Os Assombradores do Gelo surgem apenas durante os períodos mais frios, quando o vento ecoa pelos túneis abandonados. Eles sussurram promessas de abrigo e tesouros perdidos para atrair viajantes. Aqueles que seguem as vozes raramente retornam, tornando-se mais um espírito preso ao gelo.",
        imagem:  "../MONTANHAS-GELIDAS/Assets/img/anao-bg.jpeg" 
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