function loadExercicio1(content) {
  content.innerHTML = `
        <h2>Exercício 1</h2>
        <p>Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;<br>
        Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }<br>
        Imprimir(SOMA);<br>
        Ao final do processamento, qual será o valor da variável SOMA?</p>
        <button onclick="calcularSoma()" class="btn btn-secondary">Calcular Soma</button>
        <div class="alert alert-dark mt-3" role="alert" id="resultado" style="display: none;"></div>
      `;
}

function calcularSoma() {
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K += 1;
    SOMA += K;
  }

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerText = `O valor da SOMA é: ${SOMA}`;
  resultadoElement.style.display = "block";
}
