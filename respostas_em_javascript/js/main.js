document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  // Função para carregar o conteúdo dos exercícios
  const loadContent = (id) => {
    switch (id) {
      case "exercicio1":
        loadExercicio1(content);
        break;
      case "exercicio2":
        loadExercicio2(content);
        break;
      case "exercicio3":
        loadExercicio3(content);
        break;
      case "exercicio4":
        loadExercicio4(content);
        break;
      case "exercicio5":
        loadExercicio5(content);
        break;
      default:
        content.innerHTML = `
              <h1>Bem-vindo ao Frontend dos Exercícios Técnicos!</h1>
              <p>Use o menu acima para navegar pelos exercícios resolvidos.</p>
            `;
    }
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
