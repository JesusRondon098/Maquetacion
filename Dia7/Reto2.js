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
    let prenda2 = $("#Prenda2")
    let prenda3 = $("#Prenda3")
    let prenda4 = $("#Prenda4")
    let prenda5 = $("#Prenda5")
    let prenda6 = $("#Prenda6")
    let prenda7 = $("#Prenda7")
    let prenda8 = $("#Prenda8")

    let precio1 = $("#Precio1")
    let precio2 = $("#Precio2")
    let precio3 = $("#Precio3")
    let precio4 = $("#Precio4")
    let precio5 = $("#Precio5")
    let precio6 = $("#Precio6")
    let precio7 = $("#Precio7")
    let precio8 = $("#Precio8")

    $("#boton1").on("click",()=>{
        $("#Parrafo1").append(prenda1),
        $("#Parrafo1").append(precio1),
        array.push(precio1)
    })
    $("#boton2").on("click",()=>{
        $("#Parrafo1").append(prenda2),
        $("#Parrafo1").append(precio2),
        array.push(precio2)
    })
    $("#boton3").on("click",()=>{
        $("#Parrafo1").append(prenda3),
        $("#Parrafo1").append(precio3),
        array.push(precio3)
    })
    $("#boton4").on("click",()=>{
        $("#Parrafo1").append(prenda4),
        $("#Parrafo1").append(precio4),
        array.push(precio4)
    })
    $("#boton5").on("click",()=>{
        $("#Parrafo1").append(prenda5),
        $("#Parrafo1").append(precio5),
        array.push(precio5)
    })
    $("#boton6").on("click",()=>{
        $("#Parrafo1").append(prenda6),
        $("#Parrafo1").append(precio6),
        array.push(precio6)
    })
    $("#boton7").on("click",()=>{
        $("#Parrafo1").append(prenda7),
        $("#Parrafo1").append(precio7),
        array.push(precio7)
    })
    $("#boton8").on("click",()=>{
        $("#Parrafo1").append(prenda8),
        $("#Parrafo1").append(precio8),
        array.push(precio8)
    })
}
function suma() {
    let suma = 0
    for(let i of array){
       suma += i
    }
    $("#Parrafo2").html(suma)
}
