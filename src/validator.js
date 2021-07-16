const validator = {

  //Funcion para validar # de tarjeta de credito ingresada por el usuario, traer variable de index.js "inputnum".
  isValid: function (inputNum) {

    //convertir numero para poder sumarlo
    let readynum = inputNum.split("").reverse();

    //crear variable para sumar todos los numeros
    let sum = 0;

    //Buscar las posiciones pares del array
    for (let i = 0; i < readynum.length; i++) {

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
      //console.log("Tarjeta Valida")
      return true
    } else {
      //console.log("Tarjeta Invalida")
      return false
    }
  }
  ,

  maskify: function (inputNum) {
    //Si el imput del usuario tiene un largo mayor a 4 digitos reemplace el resto por #.
    let digits = inputNum.length;
    let mask = "";
    for (let i = 0; i < digits - 4; i++){
      mask += "#";
    }
    let numberMask = mask + inputNum.substring(digits - 4, digits);
    return numberMask
      
  }
    
  // ...
};



export default validator;
