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

});


//traer el input del usuario y convertir la data en una variable //

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

button.addEventListener("click", function () {

    //mostrar en consola input de usuario de derecha a izquierda
    console.log(reverse(boxnum.value));

    //1. ocultar pagina bienvenida
    document.getElementById("bienvenida").style.display = "none";

    //2. mostrar vista resultado tarjeta valida o invalida
    document.getElementById("tvalida").style.display = "block";
});




function validateInput() {

    //convertir input usuario a un array de numeros y enuncarlos de derecha a izquierda.
    let numberToValidate = boxnum.split("").reverse().map()

    let sum = numberToValidate
        //Multiplicar por dos cada numero en la posicion par del array
        .map(())

}



//aqui inicia codigo nuevo
function validateInput() {
    //convertir numero para poder sumarlo
    let readynum = boxnum.value.split;

    for (let i = lastposition; i >= 0; i--) {
        console.log(boxnum[i]);
    }

    //sumar numeros en las posiciones pares del array

    for (let i = 0; i < readynum.length; i++) {
        if (i % 2 === 0) {

        }
    }
}


//sumar numeros en las posiciones pares del array
let evenPosition = readynum

for (let i = 0; i < readynum.length; i++) {

    if (i % 2 === 0) {

    }
    reverse[i].value.evenPosition) {

        //si el valor encuentra posicion par (even) multiplique por dos


        parseInt(evenPosition.value * 2);

        //Y sume numero si es >9


        // dar funcionalidad al botton validar //

        let button = document.getElementById("btnvalidar");

        button.addEventListener("click", function () {

            //mostrar en consola input de usuario de derecha a izquierda
            console.log(readynum);

        });


        //Si el numero resultante de duplicate es mayor a nueve sume los valores entre si(10 = 1+0 = 1; 10-9 = 1)
        if (duplicateNum > 9) {
            duplicateNum = duplicateNum - 9

            console.log(readynum[i] * 2)
        }



        else {
            

        }

        let oddNumbers =

