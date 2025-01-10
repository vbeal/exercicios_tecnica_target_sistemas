function loadExercicio2(content) {
  content.innerHTML = `
        <h2>Exercício 2</h2>
        <p>Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.</p>
        <p>IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;</p>
        <div class="input-group mb-2">
          <input type="number" id="numeroFibonacci" class="form-control" placeholder="Informe um número">
          <button onclick="verificarFibonacci()" class="btn btn-secondary">Verificar</button>
        </div>
        <div class="alert alert-dark mt-3" role="alert" id="resultadoFibonacci" style="display: none;"></div>
      `;
}

function verificarFibonacci() {
  const numero = parseInt(document.getElementById("numeroFibonacci").value);
  let fibSequence = [0, 1];
  while (fibSequence[fibSequence.length - 1] < numero) {
    fibSequence.push(
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]
    );
  }
  const resultado = fibSequence.includes(numero)
    ? `${numero} pertence à sequência de Fibonacci.`
    : `${numero} não pertence à sequência de Fibonacci.`;

  const resultadoElement = document.getElementById("resultadoFibonacci");
  resultadoElement.innerText = resultado;
  resultadoElement.style.display = "block";
}
