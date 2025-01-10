function loadExercicio4(content) {
  content.innerHTML = `
        <h2>Exercício 4</h2>
        <p>Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:</p>
        <ul>
          <li>SP – R$67.836,43</li>
          <li>RJ – R$36.678,66</li>
          <li>MG – R$29.229,88</li>
          <li>ES – R$27.165,48</li>
          <li>Outros – R$19.849,53</li>
        </ul>
        <p>Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.</p>
        <button onclick="calcularPercentualFaturamento()" class="btn btn-secondary">Calcular Percentual</button>
        <div id="resultadosExercicio4" style="display: none;">
          <ul id="percentualFaturamento"></ul>
        </div>
      `;
}

function calcularPercentualFaturamento() {
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const totalFaturamento = Object.values(faturamento).reduce(
    (a, b) => a + b,
    0
  );
  const percentualFaturamento = Object.entries(faturamento)
    .map(([estado, valor]) => {
      return `<li>${estado}: ${((valor / totalFaturamento) * 100).toFixed(
        2
      )}%</li>`;
    })
    .join("");

  document.getElementById("percentualFaturamento").innerHTML =
    percentualFaturamento;
  document.getElementById("resultadosExercicio4").style.display = "block";
}
