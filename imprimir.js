//Archivo de Javascript 

let montoTXT = document.getElementById("monto");
let gastoTXT = document.getElementById("gasto");

let mostrarArreglo = document.getElementById("mostrarArreglo");
let miLista = document.getElementById("miLista");

//Arreglo
let gastos = []; //Arreglo vacío

function guardar(){
    let nuevoGasto = gastoTXT.value + ": $" + montoTXT.value;

    gastos.push(nuevoGasto); //.push() agrega nuevo elemento al arreglo

    //Opcion 1: Imprimir arreglo en consola

    //Opcion 2: Imprimir arreglo en pantalla
    mostrarArreglo.innerHTML = gastos;

    let nuevaLista = document.createElement("ion-item");
    console.log(nuevaLista);
    let titleLista = document.createElement("ion-label");

    

    titleLista.innerText = nuevoGasto;
    
    nuevaLista.appendChild(titleLista);

    console.log(nuevaLista);

    miLista.appendChild(nuevaLista);

}