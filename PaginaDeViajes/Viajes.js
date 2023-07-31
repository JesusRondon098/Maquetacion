// let destino = ["Cancun", "Maria", "Suegra"]
// function filtro(y){
//    for(let x of destino){
//     if(y == x){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
//    }
// }
let destinos = document.getElementsByClassName("Titulo")

function Filtro(){
    let barra = document.getElementById("Barra").value;

    let array = ["Ibiza", " San Sebastian"]
    let x = array.filter(barra)
    console.log(x);
    // for(let i = 0; i<array.length; i++){
    // if (barra == array[i]) {
    //     console.log(true);
    //     return 
    // }
}
