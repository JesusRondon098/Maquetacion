function boton(){
    $("#carrito").on("click",()=>{
        $("#prueba").show()
    })
    $("#cerrar").on("click",()=>{
        $("#prueba").hide()
    })
}

let array = []
function recojer1() {
    let prenda1 = $("#Prenda1")
    let precio1 = $("#Precio1")

    $("#boton1").on("click",()=>{
        $("#Parrafo1").append(prenda1),
        $("#Parrafo1").append(precio1),
        array.push(20)
    })
    console.log(array);
}
function recojer2() {
    let prenda2 = $("#Prenda2")
    let precio2 = $("#Precio2")
    $("#boton2").on("click",()=>{
        $("#Parrafo1").append(prenda2),
        $("#Parrafo1").append(precio2),
        array.push(18)
    })
    console.log(array);
}
function recojer3() {
    let prenda3 = $("#Prenda3")
    let precio3 = $("#Precio3")
    $("#boton3").on("click",()=>{
        $("#Parrafo1").append(prenda3),
        $("#Parrafo1").append(precio3),
        array.push(12)
    })
    console.log(array);
}
function recojer4() {
    let prenda4 = $("#Prenda4")
    let precio4 = $("#Precio4")
    $("#boton4").on("click",()=>{
        $("#Parrafo1").append(prenda4),
        $("#Parrafo1").append(precio4),
        array.push(22)
    })
    console.log(array);
}
function recojer5() {
    let prenda5 = $("#Prenda5")
    let precio5 = $("#Precio5")
    $("#boton5").on("click",()=>{
        $("#Parrafo1").append(prenda5),
        $("#Parrafo1").append(precio5),
        array.push(36)
    })
    console.log(array);
}
function recojer6() {
    let prenda6 = $("#Prenda6")
    let precio6 = $("#Precio6")
    $("#boton4").on("click",()=>{
        $("#Parrafo1").append(prenda6),
        $("#Parrafo1").append(precio6),
        array.push(38)
    })
    console.log(array);
}
function recojer7() {
    let prenda7 = $("#Prenda7")
    let precio7 = $("#Precio7")
    $("#boton4").on("click",()=>{
        $("#Parrafo1").append(prenda7),
        $("#Parrafo1").append(precio7),
        array.push(20)
    })
    console.log(array);
}
function recojer8() {
    let prenda8 = $("#Prenda8")
    let precio8 = $("#Precio8")
    $("#boton8").on("click",()=>{
        $("#Parrafo1").append(prenda8),
        $("#Parrafo1").append(precio8),
        array.push(30)
    })
    console.log(array);
}
let suma = 0;
let resultado ;
function sumar(){
    for(let i = 0; i < array.length; i++){
        suma += array[i]
        resultado = suma / 2
    }
    $("#Parrafo2").append(` El total es: ${resultado}€`)
}
