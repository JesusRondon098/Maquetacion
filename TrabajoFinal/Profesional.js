let arrayTitulo = [];
function mostrarActor(){

        let nombre = document.getElementById("titulo").value
        let peliculas = document.getElementById("pelicula").value
        let años = document.getElementById("director").value
        let foto = document.getElementById("foto").value


        console.log(arrayTitulo);

        const crear = document.getElementById("Intento")
        crear.innerHTML += 
        `<div class = "Contenido">
           <img src="${foto}">
           <h1 class = "h">Nombre: ${nombre}</h1>
           <p class = "a">Peliculas: ${peliculas}</p>
           <p class = "p">Años de carrera: ${años}</p>
         </div>`    
        
}