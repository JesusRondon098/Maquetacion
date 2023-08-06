let array = []
function mostrar() {

    let nombre = document.getElementById("nombre").value
    let origen = document.getElementById("origen").value
    let destino = document.getElementById("destino").value
    let numero = document.getElementById("numero").value
    let fecha = document.getElementById("fecha").value

    console.log(nombre);
    console.log(origen);
    console.log(destino);
    console.log(numero);
    console.log(fecha);

    let objeto ={
        nombre: `Hola ${nombre} - `,
        origen: `Su origen es: ${origen} -`,
        destino: `Su destino es: ${destino} -`,
        numero:  `Numero de personas: ${numero} -`,
        fecha: `Su fecha de viaje es: ${fecha}`
    }

    array.push(objeto)
    console.log(array);

    document.getElementById("Texto1").innerHTML = objeto.nombre
    document.getElementById("Texto2").innerHTML = objeto.origen
    document.getElementById("Texto3").innerHTML = objeto.destino
    document.getElementById("Texto4").innerHTML = objeto.numero
    document.getElementById("Texto5").innerHTML = objeto.fecha

}

let arrayDestinos =[]
function filtrar(){

   let destinoFiltro = document.getElementById("destino").value

   arrayDestinos.push(destinoFiltro)
   console.log(arrayDestinos);

   for(let i = 0; i < arrayDestinos.length; i++){
    if(arrayDestinos[i] == "Canarias"){
     document.getElementById("Texto6").innerHTML = "CANARIAS:"
     document.getElementById("Texto7").innerHTML = "Canarias es un archipiélago de origen volcánico situado en el océano Atlántico que conforma una comunidad autónoma española en el noroeste de África, con estatus de nacionalidad histórica.​​ Es, además, una de las regiones ultraperiféricas de la Unión Europea"
     document.getElementById("Texto8").innerHTML = "PRECIO DESDE 30€"
    }
    else if (arrayDestinos[i] == "Mallorca"){
      document.getElementById("Texto6").innerHTML = "MALLORCA"
      document.getElementById("Texto7").innerHTML = "Mallorca es una de las Islas Baleares de España en el Mediterráneo. Es conocida por los balnearios en la playa, las caletas protegidas, las montañas de caliza y las ruinas romanas y moriscas. La capital, Palma, tiene vida nocturna, el palacio real morisco de La Almudaina y la Catedral de Santa María del siglo XIII. Entre las villas de piedra se incluyen Pollensa, con sus galerías de arte y su festival de música, y Fornalutx en la ladera, rodeada de plantaciones de naranjas"
      document.getElementById("Texto8").innerHTML = "PRECIO DESDE 50€"
    }
    else if (arrayDestinos[i] == "Galicia"){
        document.getElementById("Texto6").innerHTML = "GALICIA"
        document.getElementById("Texto7").innerHTML = "Galicia, una comunidad autónoma del noroeste de España, es una región con abundante vegetación y una costa en el Atlántico. La catedral de la capital regional Santiago de Compostela es el supuesto lugar donde se conservan los restos del apóstol Santiago el Mayor, y el destino para aquellos que peregrinan por el Camino de Santiago. Los acantilados occidentales del Cabo Finisterre fueron considerados por los romanos como el fin del mundo conocido."
        document.getElementById("Texto8").innerHTML = "PRECIO DESDE 40€"
    }else{
        document.getElementById("Texto6").innerHTML = "Nada"
    }
   }
}