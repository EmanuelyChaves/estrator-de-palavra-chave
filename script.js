const botaoMostraPalavras= document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener("click",mostraPalavraChave);
function mostraPalavraChave(){
    const texto= document.querySelector("#entrada-de-texto").value;
    const campoResultado= document.querySelector("#resultado-palavrachave");
    const palavrachave= processaTexto(texto);
    campoResultado.textContent= palavraChave.join(",");
}
function processaTexto(texto){
    let palavras= texto.split(/\P(L)+/u);

    return palavras;
}