fetch("https://dummyjson.com/recipes/tags")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let categories = data;
    let categoriesList = document.querySelector(".categories-list");
    let categoria = '';

    categoriesList.style.display = "flex"
    categoriesList.style.flexWrap = "wrap"
    categoriesList.style.justifyContent = "space-between"

    if (categoriesList) {

    }

    for (let i = 0; i < categories.length; i++) {
      categoria += `
                <article class="categories">
                        <a href="./category.html?id=${categories[i].id}">${categories[i]}</a>
                 </article>
             `;
    }

    categoriesList.innerHTML = categoria
  })
  .catch(function (error) {
    console.log("error: ", error);
  });