fetch("https://dummyjson.com/recipes/tags")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let categories = data;
    let categoriesList = document.querySelector(".categories-list");
    let categoriaHTML = "";

    categoriesList.style.display = "flex";
    categoriesList.style.flexWrap = "wrap";
    categoriesList.style.justifyContent = "space-between";

    for (let i = 0; i < categories.length; i++) {
      categoriaHTML += `
        <article class="categories">
          <a href="./category.html?tag=${categories[i]}">${categories[i]}</a>
        </article>
      `;
    }

    categoriesList.innerHTML = categoriaHTML;
  })
  .catch(function (error) {
    console.error("Error al obtener las categorías:", error);
  });