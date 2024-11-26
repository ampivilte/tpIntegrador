fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recetas = data.recipes;
    let recipeListContent = document.querySelector(".recipe-list-content");
    let botonCargarMas = document.querySelector("#load-more");
    let recetasMostradas = 0;
    let imagenesPosibles = 10; 

    recipeListContent.style.display = "flex";
    recipeListContent.style.flexWrap = "wrap";
    recipeListContent.style.justifyContent = "space-around"; 

    function mostrarRecetas() {
      let html = "";
      for (let i = recetasMostradas; i < recetasMostradas + imagenesPosibles && i < recetas.length; i++) {
        html += `
          <article class="receta">
            <img src="${recetas[i].image}" alt="imagen_receta">
            <h1>${recetas[i].name}</h1>
            <p>Dificultad: ${recetas[i].difficulty}</p>
            <button>
              <a href="/recetas/${recetas[i].id}">Ver</a>
            </button>
          </article>
        `;
      }
      recipeListContent.innerHTML += html;
      recetasMostradas += imagenesPosibles;

      if (recetasMostradas >= recetas.length) {
        botonCargarMas.style.display = "none";
      }
    }

    mostrarRecetas();

    botonCargarMas.addEventListener("click", function () {
      mostrarRecetas();
    });

  })

  .catch(function (error) {
    console.log("Error: " + error);
  });




  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("searchForm");
    const buscador = document.getElementById("searchInput");

    form.addEventListener("submit", (event) => {
      const terminoBuscado = buscador.value.trim();
      if (terminoBuscado === "") {
        event.preventDefault(); 
        alert("El campo de búsqueda no puede estar vacío.");
      } else if (terminoBuscado.length <= 3) {
        event.preventDefault(); 
        alert("El término de búsqueda debe tener más de tres caracteres.");
      }
    });
  });