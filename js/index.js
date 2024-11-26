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
      for (let i = start; i < count && i < recipes.length; i++) {
        let article = document.createElement("article");
        article.classList.add("receta");

        let img = document.createElement("img");
        img.src = recipes[i].image;
        img.alt = 'imagen_receta';
        article.appendChild(img);

        let h1 = document.createElement("h1");
        h1.textContent = recipes[i].name;
        article.appendChild(h1);

        let p = document.createElement("p");
        p.textContent = `Dificultad: ${recipes[i].difficulty}`;
        article.appendChild(p);

        let button = document.createElement("button");
        let a = document.createElement("a");
        a.href = `/recipes/${recipes[i].id}`;
        a.textContent = "Ver";
        button.appendChild(a);
        article.appendChild(button);

        recipeListContent.appendChild(article);
      }
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