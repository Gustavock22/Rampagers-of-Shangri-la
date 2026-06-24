const btnCadastrar = document.getElementById('btn-cadastrar');

btnCadastrar.addEventListener('click', () =>{
    const nome = document.getElementById('InputNome').value.trim();
    const email = document.getElementById('InputEmail').value.trim();
    const senha = document.getElementById('InputSenha').value.trim();

    const usuario = { nome, email, senha };

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    if (!nome || !email || !senha){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
            confirmButtonColor: '#c8922a',
            background: '#0c0d14',
            color: '#D4C5A9'
        });

        document.getElementById('InputNome').value = '';
        document.getElementById('InputEmail').value = '';
        document.getElementById('InputSenha').value = '';
        
        return;
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Cadastro realizado!',
            text: 'Sua conta foi criada com sucesso.',
            confirmButtonColor: '#c8922a',
            background: '#0c0d14',
            color: '#D4C5A9'
        }).then(() => {
            window.location.href = '../PaginaInicial/index.html';
        });
    }    

});