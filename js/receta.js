fetch("https://dummyjson.com/recipes/${id}")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recetas = data.results;
    let nombre = document.querySelector(".name");
    let instrucciones = document.querySelector(".instructions");
    let tiempo = document.querySelector(".cookTimeMinutes");
    let foto = document.querySelector(".foto");
    let categorias = document.querySelector(".tags")
   
    nombre.innerText = personajes.name
    status.innerText = personajes.status
    especie.innerText = personajes.species
    foto.src = personajes.image

    console.log();
    

  })
  .catch(function (error) {
    console.log("error: ", error);
  });