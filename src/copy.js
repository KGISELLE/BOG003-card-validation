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
