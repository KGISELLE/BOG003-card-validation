import validator from './validator.js';

console.log(validator);


// nuevo codigo para invocar funcionalidad del boton VALIDAR y dar formato a la info ingresada por el usuario//

// Input numero de tarjeta //
cardnumber.number.addEventListener("keyup", (e) => {
    let valorInput = e.target.value;

    // metodo para dar formato al input del usuario//
    cardnumber.number.value = valorInput
        // eliminar espacios en blanco //
        .replace(/\s/g, "")
        // eliminar las letras //
        .replace(/\D/g, "")
        // poner espacio cada cuatro numeros //
        .replace(/([0-9]{4})/g, "$1 ")
        // eliminar el ultimo especiado //
        .trim();
});


//traer el input del usuario y convertir la data en una variable ///error******

let boxnum = document.getElementById("number");

//metodo push//
let reverse = function (array) {

    let newArray = [];

    let sizebox = array.length;

    let lastposition = sizebox - 1;

    for (let i = lastposition; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;

}

// dar funcionalidad al botton validar //

let button = document.getElementById("btnvalidar");

button.addEventListener("click", () => {
    console.log(reverse(boxnum.value));
});









