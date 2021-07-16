import validator from './validator.js';

console.log(validator);


// Código para invocar funcionalidad del boton VALIDAR y dar formato a la info ingresada por el usuario//

// Input numero de tarjeta //

let cardnumber = document.getElementById("cardnumber");


cardnumber.number.addEventListener("keyup", (e) => {
    let valorInput = e.target.value;

    // metodo para dar formato al input del usuario//
    cardnumber.number.value = valorInput
        // eliminar espacios en blanco con expresiones regulares //
        .replace(/\s/g, "")
        // eliminar las letras con expresiones regulares//
        .replace(/\D/g, "")    
});



//
//traer el input del usuario del HTML y convertir la data en una variable //el inputNum lo llevo a validator.js//
let boxnum = document.getElementById("number");
//Obtener input del usuario como un valor.
let inputNum = boxnum.value;


// dar funcionalidad al botton validar //
let button = document.getElementById("btnvalidar");

button.addEventListener("click", function () {
    let check = validator.isValid(inputNum);
    //si input es campo vacio que me retorne un alert al usuario campo vacio
    if (check === "") {
        alert("Por favor ingrese un numero de tarjeta");
    }
    //si validate is true que me retorne la respuesta mostrar tarjeta validate.
    else if (check === true) {
        //1. ocultar pagina bienvenida
        document.getElementById("bienvenida").style.display = "none";
        //2. mostrar vista resultado tarjeta valida
        document.getElementById("tvalida").style.display = "block";
    } else {
        //1. ocultar pagina bienvenida
        document.getElementById("bienvenida").style.display = "none";
        //2. mostrar vista resultado tarjeta valida
        document.getElementById("tinvalida").style.display = "block";
    }

});


// dar funcionalidad al botton regresar //
let regresar = document.getElementById("btnregresar");
regresar.addEventListener("click", function () {
    //1. ocultar vista resultado tarjeta valida
    document.getElementById("tvalida").style.display = "none";
    //2. mostrar pagina bienvenida
    document.getElementById("bienvenida").style.display = "block";
});


// dar funcionalidad al botton rectificar //
let rectificar = document.getElementById("btnrectificar");
rectificar.addEventListener("click", function () {
    //1. ocultar vista resultado tarjeta invalida
    document.getElementById("tinvalida").style.display = "none";
    //2. mostrar pagina bienvenida
    document.getElementById("bienvenida").style.display = "block";
});


