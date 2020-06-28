(function () {
  const botones = document.querySelectorAll(".btn-marcas");
  const searchbar = document.querySelector(".buscador");
  const cartas = document.querySelectorAll(".cartas");
  const botonSearch = document.querySelector(".btn-search");

  //FILTRO BOTONES
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault; //Para que no scrollee la pag al inicio al clickear

      let valor = e.target.dataset.filter;

      cartas.forEach((carta) => {
        if (valor === "todos") {
          carta.style.display = "block";
        } else {
          if (carta.dataset.item === valor) {
            carta.style.display = "block";
          } else {
            carta.style.display = "none";
          }
        }
      });
    });
  });

  //FILTRO SEARCHBAR
  botonSearch.addEventListener("click", () => {
    let searchFiltro = searchbar.value;
    cartas.forEach((carta) => {
      if (searchFiltro === carta.dataset.item) {
        carta.style.display = "block";
      } else if (searchFiltro === "") {
        carta.style.display = "block";
      } else {
        carta.style.display = "none";
      }
    });
  });
})();
