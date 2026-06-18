const MonstroTeste  = document.querySelector('.monstro-teste');
const overlay       = document.getElementById('monstroOverlay');
const fechar        = document.getElementById('fecharOverlay');

MonstroTeste.addEventListener('click', () => {
    overlay.classList.add('ativo');
});
fechar.addEventListener('click', () => {
    overlay.classList.remove('ativo');
});