fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recipes = data.recipes;
    let recipeListContent = document.querySelector(".recipe-list-content");
    let botonCargarMas = document.querySelector("#load-more");
    let imagenesPosibles = 10; 

    
    recipeListContent.style.display = "flex";
    recipeListContent.style.flexWrap = "wrap";
    recipeListContent.style.justifyContent = "center";

    
    const renderRecipes = (start, count) => {
      let recipeHTML = "";
      for (let i = start; i < count && i < recipes.length; i++) {
        recipeHTML += `
          <article class="receta">
            <img src="${recipes[i].image}" alt='imagen_receta'>
            <h1>${recipes[i].name}</h1>
            <p>Dificultad: ${recipes[i].difficulty}</p>
            <button><a href="/recipes/${recipes[i].id}">Ver</a></button>
          </article>
        `;
      }
      recipeListContent.innerHTML += recipeHTML; 
    };

    
    renderRecipes(0, imagenesPosibles);

    
    botonCargarMas.addEventListener("click", () => {
      let cuentaActual = imagenesPosibles; 
      imagenesPosibles += 10; 
      renderRecipes(cuentaActual, imagenesPosibles);

      
      if (imagenesPosibles >= recipes.length) {
        botonCargarMas.style.display = "none";
      }
    });
  })
  .catch(function (error) {
    console.log("error: ", error);
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