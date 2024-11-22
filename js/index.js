fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recipes = data.recipes;
    let recipe = "";
    let recipeList = document.querySelector(".recipe-list");

    recipeList.style.display = "flex"
    recipeList.style.flexWrap = "wrap"
    recipeList.style.justifyContent = "center"

    for (let i = 0; i < recipes.length; i++) {
      recipe += `
                <article class="receta">
                        <img src= ${recipes[i].image} alt='imagen_receta'>
                        <h1> ${recipes[i].name} </h1>
                        <p> Dificultad: ${recipes[i].difficulty} </p>
                        <button> <a href="/recipes/${recipes[i].id}"> Ver </a> </button>
                 </article>
             `;
    }
    console.log(recipe);
    recipeList.innerHTML = recipe
  })
  .catch(function (error) {
    console.log("error: ", error);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    form.addEventListener("submit", (event) => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm === "") {
        event.preventDefault(); // Evita que se envíe el formulario
        alert("El campo de búsqueda no puede estar vacío.");
      } else if (searchTerm.length <= 3) {
        event.preventDefault(); // Evita que se envíe el formulario
        alert("El término de búsqueda debe tener más de tres caracteres.");
      }
    });
  });