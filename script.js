const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector("#entrada-de-texto").value;

  const campoResultado = document.querySelector("#resultado-palavrachave");

  const palavrasChave = processaTexto(texto);

  campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
  contaFrequenicias(palavras);
  let palavras = texto.split(/\P{L}+/u); 
   contaFrequencias(palavras);
    let frenquecias = {};
   for (let i of palavras){
        if (i == j){
          frenquecias[i]++;
        }
      }
    }

    console.log(frenquecias);
    return palavras;
}

function contaFrequencias(palavras){

}
