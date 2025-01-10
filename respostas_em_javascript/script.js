document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  // Função para carregar o conteúdo dos exercícios
  const loadContent = (id) => {
    switch (id) {
      case "exercicio1":
        content.innerHTML = `
            <h2>Exercício 1</h2>
            <p>Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;<br>
            Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }<br>
            Imprimir(SOMA);<br>
            Ao final do processamento, qual será o valor da variável SOMA?</p>
            <button onclick="calcularSoma()" class="btn btn-secondary">Calcular Soma</button>
            <div class="alert alert-dark mt-3" role="alert" id="resultado" style="display: none;"></div>
          `;
        break;
      case "exercicio2":
        content.innerHTML = `
            <h2>Exercício 2</h2>
            <p>Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não à sequência.</p>
            <input type="number" id="numeroFibonacci" class="form-control mb-2" placeholder="Informe um número">
            <button onclick="verificarFibonacci()" class="btn btn-secondary">Verificar</button>
            <div class="alert alert-dark mt-3" role="alert" id="resultadoFibonacci" style="display: none;"></div>
          `;
        break;
      case "exercicio3":
        content.innerHTML = `
            <h2>Exercício 3</h2>
            <p>Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa que calcule e retorne: o menor valor de faturamento ocorrido em um dia do mês; o maior valor de faturamento ocorrido em um dia do mês; o número de dias no mês em que o valor de faturamento diário foi superior à média mensal.</p>
            <!-- Adicione a implementação do exercício 3 aqui -->
          `;
        break;
      case "exercicio4":
        content.innerHTML = `
            <h2>Exercício 4</h2>
            <p>Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado, escreva um programa que calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.</p>
            <!-- Adicione a implementação do exercício 4 aqui -->
          `;
        break;
      case "exercicio5":
        content.innerHTML = `
            <h2>Exercício 5</h2>
            <p>Escreva um programa que inverta os caracteres de uma string.</p>
            <!-- Adicione a implementação do exercício 5 aqui -->
          `;
        break;
      default:
        content.innerHTML = `
            <h1>Bem-vindo ao Frontend dos Exercícios Técnicos!</h1>
            <p>Use o menu acima para navegar pelos exercícios resolvidos.</p>
          `;
    }
  };

  // Função para calcular a soma no exercício 1
  window.calcularSoma = () => {
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
  };

  // Função para verificar a sequência de Fibonacci no exercício 2
  window.verificarFibonacci = () => {
    const numero = parseInt(document.getElementById("numeroFibonacci").value);
    let fibSequence = [0, 1];
    while (fibSequence[fibSequence.length - 1] < numero) {
      fibSequence.push(
        fibSequence[fibSequence.length - 1] +
          fibSequence[fibSequence.length - 2]
      );
    }
    const resultado = fibSequence.includes(numero)
      ? `${numero} pertence à sequência de Fibonacci.`
      : `${numero} não pertence à sequência de Fibonacci.`;

    const resultadoElement = document.getElementById("resultadoFibonacci");
    resultadoElement.innerText = resultado;
    resultadoElement.style.display = "block";
  };

  // Adiciona event listeners aos links do menu
  document.querySelectorAll("nav .nav-item .btn").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      loadContent(id);
    });
  });
});
