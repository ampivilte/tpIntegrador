let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let recetasId = queryStringObj.get("id");

if (recetasId) {
  fetch (`https://dummyjson.com/recipes/${recetasId}`)
    .then (function (response) {
      return response.json();
    })

    .then (function (data) {
      const nombre = document.querySelector(".nombre");
      const instrucciones = document.querySelector(".instrucciones");
      const tiempo = document.querySelector(".tiempoDeCoccion");
      const foto = document.querySelector(".foto");
      const categorias = document.querySelector(".categorias");
      
      nombre.innerHTML = data.name;
      instrucciones.innerHTML = data.instructions;
      tiempo.innerHTML = `Tiempo de cocción: ${data.tiempoDeCoccion}`;
      foto.src = data.image;
      foto.alt = data.name;
      categorias.innerHTML = `Categorías: ${data.categories.join(", ")}`;
    })

    .catch (function (error) {
      console.log("Error al obtener los detalles de la receta: ", error);
    });
} else {
  console.log("No se encontró el id de la receta.");
}