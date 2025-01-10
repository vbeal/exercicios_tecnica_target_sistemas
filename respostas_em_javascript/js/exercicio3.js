function loadExercicio3(content) {
  content.innerHTML = `
        <h2>Exercício 3</h2>
        <p>Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:</p>
        <ul>
          <li>O menor valor de faturamento ocorrido em um dia do mês;</li>
          <li>O maior valor de faturamento ocorrido em um dia do mês;</li>
          <li>Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.</li>
        </ul>
        <p>IMPORTANTE:</p>
        <ul>
          <li>a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;</li>
          <li>b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;</li>
        </ul>
        <button onclick="carregarDadosFaturamento()" class="btn btn-secondary">Carregar Dados de Faturamento</button>
        <div id="resultadosExercicio3" style="display: none;">
          <p id="menorFaturamento"></p>
          <p id="maiorFaturamento"></p>
          <p id="diasAcimaMedia"></p>
        </div>
      `;
}

function carregarDadosFaturamento() {
  console.log("Carregando dados de faturamento...");
  fetch("dados/dados.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Dados carregados:", data);
      calcularDadosFaturamento(data);
    })
    .catch((error) => console.error("Erro ao carregar os dados:", error));
}

function calcularDadosFaturamento(dados) {
  let menorValor = Infinity;
  let maiorValor = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  dados.forEach((registro) => {
    const valor = registro.valor;
    if (valor > 0) {
      if (valor < menorValor) menorValor = valor;
      if (valor > maiorValor) maiorValor = valor;
      somaFaturamento += valor;
      diasComFaturamento += 1;
    }
  });

  const mediaMensal = somaFaturamento / diasComFaturamento;
  const diasAcimaDaMedia = dados.filter(
    (registro) => registro.valor > mediaMensal
  ).length;

  document.getElementById(
    "menorFaturamento"
  ).innerText = `Menor valor de faturamento: ${menorValor}`;
  document.getElementById(
    "maiorFaturamento"
  ).innerText = `Maior valor de faturamento: ${maiorValor}`;
  document.getElementById(
    "diasAcimaMedia"
  ).innerText = `Dias com faturamento acima da média: ${diasAcimaDaMedia}`;

  document.getElementById("resultadosExercicio3").style.display = "block";
}
