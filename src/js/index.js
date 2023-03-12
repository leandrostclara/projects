const botoesCarrossel = document.querySelectorAll ('.botao');
const imagens = document.querySelectorAll ('.imagem');

botoesCarrossel.forEach ((botao, indice) => {
    botao.addEventListener ('click', () => {

        desmarcarBotaoSelecionado();

        marcarBotaoClicado(botao);

        esconderImagemInativa();

        exibirImagemAtiva(indice);

    })
})

function exibirImagemAtiva(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemInativa() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function marcarBotaoClicado(botao) {
    botao.classList.add('selecionado');
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
