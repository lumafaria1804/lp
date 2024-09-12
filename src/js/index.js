/*
    Quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a próxima imagem 

        A imagem atual começa em 0 porque é a primeira imagem, assim que for clicado no avançar eu prciso adiciomnar mais 1 ao contador de imagens para poder saber que agora eu vou mostrar a próxima imagem

        - Esconder todas as imagens
            Pegar todas as imagens usando o DOM e remover a classe mostrar

        - Mostrar a próxima imagem
            Pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela    

*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {

    const totalDeImagens = imagensPainel.length - 1;

    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    esconder();

    mostrar ();

    });

setaVoltar.addEventListener("click", function () {

    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconder();

    mostrar ();

});

function esconder () {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove("mostrar");
    });
}

function mostrar () {
    imagensPainel[imagemAtual].classList.add("mostrar");
}