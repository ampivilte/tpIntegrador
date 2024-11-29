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
      instrucciones.innerHTML = `<span class="span-receta-ind-2">Instrucciones:</span> <br> ${data.instructions}`;
      tiempo.innerHTML = `<span class="span-receta-ind-1">Tiempo de cocción:</span> <br> ${data.cookTimeMinutes || "No especificado"} minutos`;
      foto.src = data.image;
      foto.alt = data.name;

      if (data.tags && data.tags.length > 0) {
        categorias.innerHTML = `<span class="span-receta-ind-3">Categorías:</span> <br> ${data.tags.join(", ")}`;
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