// const formulario = document.getElementsByTagName("form")
// function prueba(){
//    let nombre = document.getElementById("Nombre").value;
//    let apellido = document.getElementById("Apellido").value;
//    let movil = document.getElementById("Movil").value;
//    let correo = document.getElementById("Correo").value;


   
//    console.log(nombre);
//    console.log(apellido);
//    console.log(movil);
//    console.log(correo);


//    let newElement1 = document.createElement("p");
//    formulario[0].appendChild(newElement1)
//    newElement1.textContent = nombre

//    let newElement2 = document.createElement("a");
//    formulario[1].appendChild(newElement2)
//    newElement2.textContent = apellido

//    document.getElementById("print").innerHTML= nombre;
//    document.getElementById("print1").innerHTML= apellido;
//    document.getElementById("print2").innerHTML= movil;
//    document.getElementById("print3").innerHTML= correo;

// }
{/* <script src="Javascript.js"></script>
    <form id="Codenotch" class="Formulario">
        <label>Nombre:</label>
           <input type="text" placeholder="Nombre" id="Nombre">

        <label>Apellido</label>
           <input type="text" placeholder="Apellido" id="Apellido">

        <label>Movil:</label>
           <input type="number" placeholder="Movil" id="Movil">

        <label >Correo</label>
           <input type="email" placeholder="Correo" id="Correo">
           
        <input type="button" value="Enviar" onclick="prueba()">
        <input type="reset" value="Limpiar">
    </form>
    <p id="print"></p>
    <p id="print1"></p>
    <p id="print2"></p>
    <p id="print3"></p> */}

function devuelve(){
 let  nombre = document.getElementById("Nombre").value;
 let apellido = document.getElementById("Apellido").value;
 let movil = document.getElementById("Movil").value;
 let correo = document.getElementById("Correo").value;

 console.log(nombre);
 console.log(apellido);
 console.log(movil);
 console.log(correo);
 document.getElementById("print").innerHTML = `
                                         ${nombre}, 
                                 PRONTO NOS PONDREMOS EN CONTACTO.`

}