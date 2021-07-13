// dar funcionalidad al botton validar //
let boxnum = document.getElementById("number");
let button = document.getElementById("btnvalidar");

button.addEventListener("click", actiontoclick);


//**********que funcion debe hacer cuando se de click en boton VALIDAR//

function actiontoclick() {
    alert("Vamos bien " + boxnum.value);
}


//funcion para meter el dato en un array //
function arrayInput() {
    let userInput = keeparray();









    // info para funcion
    let boxnum = document.getElementById("number")

    let sizebox = boxnum.length; //16

    let lastposition = sizebox - 1;


    for (let i = lastposition; i >= 0; i--) {
        console.log(boxnum[i]);
    }

    //info para funcion fin



    numbervalues = [].map.call(boxnum)

}

function luhncheck() {

}








console.log(boxnum.value);





let dobleEvenPosition = function () {
    reverse * 2;

}







button.addEventListener("click", () => {
    console.log(reverse(boxnum.value));
});


    // poner espacio cada cuatro numeros //
        .replace(/([0-9]{4})/g, "$1 ")
        // eliminar el ultimo especiado //
    .trim();
        






//Metodo duplicar posiciones pares


for (let i = 0; i < reverse.length; i++) {

    if (reverse[i].value.evenPosition) {

        //si el valor encuentra posicion par (even) multiplique por dos
        
        
        parseInt(evenPosition.value * 2);

        //Y sume numero si es >9


        //pero si es impar solo deje el mismo numero



    }
    let newArray = [];

    let sizebox = array.length;

    let lastposition = sizebox - 1;

    for (let i = lastposition; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;

}



//Metodo duplicar posiciones pares

let evenPosition = boxnum //solo los valores de las posiciones pares

for (let i = 0; i < reverse.length; i++) {

    if (reverse[i].value.evenPosition) {

        //si el valor encuentra posicion par (even) multiplique por dos


        parseInt(evenPosition.value * 2);

        //Y sume numero entre si, sí es >9


        //pero si es impar solo deje el mismo numero



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