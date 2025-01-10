function loadExercicio5(content) {
  content.innerHTML = `
        <h2>Exercício 5</h2>
        <p>Escreva um programa que inverta os caracteres de uma string.</p>
        <input type="text" id="stringOriginal" class="form-control mb-2" placeholder="Digite uma string">
        <button onclick="inverterString()" class="btn btn-secondary">Inverter String</button>
        <div class="alert alert-dark mt-3" role="alert" id="resultadoStringInvertida" style="display: none;"></div>
      `;
}

function inverterString() {
  const stringOriginal = document.getElementById("stringOriginal").value;
  const stringInvertida = stringOriginal.split("").reverse().join("");

  const resultadoElement = document.getElementById("resultadoStringInvertida");
  resultadoElement.innerText = `String invertida: ${stringInvertida}`;
  resultadoElement.style.display = "block";
}
