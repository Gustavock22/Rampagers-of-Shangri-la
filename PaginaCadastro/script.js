const btnCadastrar = document.getElementById('btn-cadastrar');

btnCadastrar.addEventListener('click', () =>{
    const nome = document.getElementById('InputNome').value;
    const email = document.getElementById('InputEmai').value;
    const senha = document.getElementById('InputSenha').value;

    if (!nome || !idadeInput || !curso){
        alert("Campo obrigatótio!");
        return;
    }
});