
let prendas={
    prenda1 :{
        prenda :"Pantalon suelto gris",
        precio : 20
    },
    prenda2 :{
        prenda :"Vestido Tunico",
        precio : 18
    },
    prenda3 :{
        prenda :"Falda Mid Print",
        precio : 12
    },
    prenda4 :{
        prenda :"Cardigan Largo Rayas",
        precio : 22
    },
    prenda5 :{
        prenda :"Falda mini zebra",
        precio : 36
    },
    prenda6 :{
        prenda :"Mono overol",
        precio : 38
    },
    prenda7 :{
        prenda :"Vestido jersey",
        precio : 20
    },
    prenda8 :{
        prenda :"Pantalon ancho",
        precio : 30
    }
}

let array = []
jQuery(() =>{

    $("#boton1").on("click",()=>{
        array.push(prendas.prenda1) 
    })
    $("#boton2").on("click",()=>{
        array.push(prendas.prenda2)
    })
    $("#boton3").on("click",()=>{
        array.push(prendas.prenda3)
    })
    $("#boton4").on("click",()=>{
        array.push(prendas.prenda4)
    })
    $("#boton5").on("click",()=>{
        array.push(prendas.prenda5)
    })
    $("#boton6").on("click",()=>{
        array.push(prendas.prenda6)
    })
    $("#boton7").on("click",()=>{
        array.push(prendas.prenda7)
    })
    $("#boton8").on("click",()=>{
        array.push(prendas.prenda8)
    })


    $("#carrito").on("click",()=>{
        $("#prueba").show()
        let compra = 0;
        for(prenda of array){
            $("#Parrafo1").append("◉Prenda: "+ prenda.prenda +" - Precio:"+prenda.precio+"€ <br>");
            compra += prenda.precio
        }
        $("#Parrafo2").append("Total: "+ compra + "€ <br>")
    })
    $("#cerrar").on("click",()=>{
        $("#prueba").hide()
    })
})
