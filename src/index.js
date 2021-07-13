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
        
});


//traer el input del usuario y convertir la data en una variable //

let boxnum = document.getElementById("number");

//crear funcion para validar el input del usuario//
function validate() {
    //Obtener el valor en cada posicion del input del usuario
    let inputNum = boxnum.value

    //convertir numero para poder sumarlo
    let readynum = inputNum.split("").reverse();

    //crear variable para suma numeros pares
    let sum = 0;

    //Buscar las posiciones pares del array
    for (let i = 0; i < readynum.length; i++){
    
        if (i % 2 === 1) {
            
            //si el valor encuentra posicion par (even) multiplique por dos
            //console.log(readynum[i]*2)
            //Poner en una variable el valor del input reverse y solo posiciones pares multiplicado por dos
            let duplicateEvenNum = readynum[i] * 2;

            //Si el numero resultante de duplicate es mayor a nueve sume los valores entre si(10 = 1+0 = 1; 10-9 = 1)
            //console.log(duplicateEvenNum);
            
            if (duplicateEvenNum > 9) {
                duplicateEvenNum = duplicateEvenNum - 9;
            }
            //console.log(duplicateEvenNum);

            //retormar suma de todos los numeros en las posiciones pares
            sum = sum + duplicateEvenNum;

        //Buscar las posiciones impares del array   
        } else if (i % 2 === 0) {
            let oddNumbers = parseInt(readynum[i]);
            //console.log(oddNumbers);
            //retormar suma de todos los numeros posiciones impares
            sum = sum + oddNumbers;
        }
        
    }
    //imprimir en la consola la suma de todos los numeros (posiciones pares e impares)
    //console.log(sum);
    if (sum % 10 == 0) {
        console.log("Tarjeta Valida")
    } else {
        console.log("Tarjeta Invalida")
    }
}


// dar funcionalidad al botton validar //

let button = document.getElementById("btnvalidar");

button.addEventListener("click", function () {
    validate()

    //1. ocultar pagina bienvenida
    document.getElementById("bienvenida").style.display = "none";

    //2. mostrar vista resultado tarjeta valida o invalida
    document.getElementById("tvalida").style.display = "block";

});

