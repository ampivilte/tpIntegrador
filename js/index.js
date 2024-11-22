fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recipes = data.recipes;
    let recipe = "";
    let recipeList = document.querySelector(".recipe-list");


    let hola = "hola"
    recipeList.style.display = "flex"
    recipeList.style.flexWrap = "wrap"
    recipeList.style.justifyContent = "space-evenly"

    for (let i = 0; i < recipes.length; i++) {
      recipe += `
                <article class="product">
                        <img src= ${recipes[i].image} alt='imagen_receta'>
                        <h1> ${recipes[i].name} </h1>
                        <p> Dificultad: ${recipes[i].difficulty} </p>
                        <a href="/recipes/${recipes[i].id}"> Ver Receta </a>
                 </article>
             `;
    }
    console.log(recipe);
    recipeList.innerHTML = recipe
  })
  .catch(function (error) {
    console.log("error: ", error);
  });