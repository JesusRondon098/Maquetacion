
class Movie {
   constructor(titulo, publicacion, foto, actores, escritor, director){
    this.titulo = titulo
    this.publicacion = publicacion
    this.foto = foto
    this.actores = [actores]
    this.escritor = escritor
    this.director = director
   }
   
}

let arrayTitulo = [];
function mostrarMovie(){

        let titulo = document.getElementById("titulo").value
        let publicacion = document.getElementById("publicacion").value
        let director = document.getElementById("director").value
        let foto = document.getElementById("foto").value

        arrayTitulo.push(titulo,publicacion)

        console.log(arrayTitulo);

        const crear = document.getElementById("Intento")
        crear.innerHTML += 
        `<div class = "Contenido">
           <img src="${foto}">
           <h1 class = "h">Titulo: ${titulo}</h1>
           <p class = "p">Publicacion: ${publicacion}</p>
           <p class = "p">Director: ${director}</p>
         </div>`    
        
}
