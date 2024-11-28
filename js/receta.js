let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let recetasId = queryStringObj.get("id");

if (recetasId) {
  fetch(`https://dummyjson.com/recipes/${recetasId}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const nombre = document.querySelector(".nombre");
      const instrucciones = document.querySelector(".instrucciones");
      const tiempo = document.querySelector(".tiempoDeCoccion");
      const foto = document.querySelector(".foto");
      const categorias = document.querySelector(".categorias");

      nombre.innerHTML = data.name;
      instrucciones.innerHTML = `Instrucciones: ${data.instructions}`;
      tiempo.innerHTML = `Tiempo de cocción: ${data.cookTimeMinutes || "No especificado"} minutos`;
      foto.src = data.image;
      foto.alt = data.name;

      if (data.tags && data.tags.length > 0) {
        categorias.innerHTML = `Categorías: ${data.tags.join(", ")}`;
      } else {
        categorias.innerHTML = "Categorías: No especificadas";
      }
    })
    .catch(function (error) {
      console.error("Error al obtener los detalles de la receta: ", error);
    });
} else {
  console.error("No se encontró el id de la receta en la URL.");
}