//Ejercicio 1
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("Ex1Resp");

calcular.addEventListener("click", () => {
  event.preventDefault();
  const pesoValue = parseFloat(peso.value);
  const alturaValue = parseFloat(altura.value);
  const imc = pesoValue / Math.pow(alturaValue, 2);

  // Verificar si los valores ingresados son números válidos
  if (isNaN(pesoValue) || isNaN(alturaValue)) {
    resultado.innerText = "Por favor, ingresa valores numéricos válidos.";
    LimpiarCampos();
    return;
  }

  if (imc < 18.5) {
    resultado.innerText = "Bajo peso";
  } else if (imc >= 18.5 && imc < 25) {
    resultado.innerText = "Normal";
  } else if (imc >= 25 && imc < 30) {
    resultado.innerText = "Sobrepeso";
  } else {
    resultado.innerText = "Obesidad";
  }
  LimpiarCampos();

  // Limpiar los campos
  function LimpiarCampos() {
    peso.value = "";
    altura.value = "";
  }
});

//Ejercicio 2
const nLinkes = document.getElementById("likes");
const calcular2 = document.getElementById("calcular2");
const resultado2 = document.getElementById("Ex2Resp");

calcular2.addEventListener("click", () => {
  event.preventDefault();

  nL = parseInt(nLinkes.value);
  let res = 0;

  if (isNaN(nL)) {
    resultado2.innerText = "Por favor, ingresa un número válido.";
    nLinkes.value = "";
    return;
  }

  if (nL >= 1000000) {
    res = (nL / 1000000).toFixed(1) + "M";
  } else if (nL >= 1000) {
    res = (nL / 1000).toFixed(1) + "k";
  } else {
    res = nL.toString();
  }

  resultado2.innerText = res;
  nLinkes.value = "";
});

//Ejercicio 3
const usu = document.getElementById("user");
const contraseña = document.getElementById("pass");
const calcular3 = document.getElementById("calcular3");
const Ex3Resp = document.getElementById("Ex3Resp"); // Agregamos esta línea

function validarContraseña(contraseñ) {
  const longitudMinima = 8;
  const caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const contieneMayuscula = /[A-Z]+/;
  const contieneMinuscula = /[a-z]+/;
  const contieneNumero = /[0-9]+/;

  if (contraseñ.length < longitudMinima) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }

  if (!caracteresEspeciales.test(contraseñ)) {
    return "La contraseña debe tener al menos un caracter especial.";
  }

  if (!contieneMayuscula.test(contraseñ)) {
    return "La contraseña debe tener al menos una mayúscula.";
  }

  if (!contieneMinuscula.test(contraseñ)) {
    return "La contraseña debe tener al menos una minúscula.";
  }

  if (!contieneNumero.test(contraseñ)) {
    return "La contraseña debe tener al menos un número.";
  }

  if (contraseñ == "Password.2024*") {
    return "Contraseña correcta";
  } else {
    return "Contraseña incorrecta";
  }
}

calcular3.addEventListener("click", (event) => {
  event.preventDefault();

  const contraseñaValue = contraseña.value; // Guarda el valor antes de borrarlo
  const resultadoValidacion = validarContraseña(contraseñaValue); // Valida el valor guardado

  Ex3Resp.innerText = resultadoValidacion;

  // Limpiar los campos
  usu.value = "";
  contraseña.value = "";
});

//Ejercicio 4
function calcularImpuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) {
    return ingresos * 0.4;
  } else {
    return 0;
  }
}

const edad = document.getElementById("edad");
const ingresos = document.getElementById("salario");
const calcular4 = document.getElementById("calcular4");
const Ex4Resp = document.getElementById("Ex4Resp");

calcular4.addEventListener("click", () => {
  event.preventDefault();

  const edadValue = parseInt(edad.value);
  const ingresosValue = parseInt(ingresos.value);
  const resultado = calcularImpuestos(edadValue, ingresosValue).toFixed(2);

  Ex4Resp.innerText = resultado;

  // Limpiar los campos
  edad.value = "";
  ingresos.value = "";
});

//Ejercicio 5
function imprimeArreglo(arreglo) {
    arreglo.forEach((elemento) => {
      const li = document.createElement("li");
      li.textContent = elemento;
      document.getElementById("Ex5Resp").appendChild(li);
    });
  }
  
  const arrInput = document.getElementById("arreglo");
  const calcular5 = document.getElementById("calcular5");
  
  calcular5.addEventListener("click", () => {
    document.getElementById("Ex5Resp").innerHTML = "";
    event.preventDefault();
  
    imprimeArreglo(arrInput.value.split(","));
  
    // Limpiar los campos
    arrInput.value = "";
  });
  

//Ejercicio 6
function numeroDeCaracteres(caracter, string){
    let contador = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] == caracter){
            contador++;
        }
    }
    return contador;
}

const caracter = document.getElementById("caracteres");
const string = document.getElementById("string");
const calcular6 = document.getElementById("calcular6");
const Ex6Resp = document.getElementById("Ex6Resp");

calcular6.addEventListener("click", () => {
    event.preventDefault();
    const caracterValue = caracter.value;
    const stringValue = string.value;

    Ex6Resp.innerText = numeroDeCaracteres(caracterValue, stringValue);

    // Limpiar los campos
    caracter.value = "";
    string.value = "";
} );

//Ejercicio 7
function sumarArreglo(arreglo){
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}

const arreglo = document.getElementById("arreglo2");
const calcular7 = document.getElementById("calcular7");
const Ex7Resp = document.getElementById("Ex7Resp");

calcular7.addEventListener("click", () => {
    event.preventDefault();
    const arregloValue = arreglo.value.split(",").map(Number);

    //verificar si la entrada es un numero y si es arreglo
    if(arregloValue.some(isNaN) || !Array.isArray(arregloValue)){
        Ex7Resp.innerText = "Por favor, ingresa un arreglo válido.";
        arreglo.value = "";
        return;
    }

    Ex7Resp.innerText = sumarArreglo(arregloValue);

    // Limpiar los campos
    arreglo.value = "";
} );


//Ejercicio 8
function multiplicarArreglo(arreglo){
    let producto = 1;
    for(let i = 0; i < arreglo.length; i++){
        producto *= arreglo[i];
    }
    return producto;
}

const arreglo3 = document.getElementById("arreglo3");
const calcular8 = document.getElementById("calcular8");
const Ex8Resp = document.getElementById("Ex8Resp");

calcular8.addEventListener("click", () => {
    event.preventDefault();
    const arregloValue = arreglo3.value.split(",").map(Number);

    //verificar si la entrada es un numero y si es arreglo
    if(arregloValue.some(isNaN) || !Array.isArray(arregloValue)){
        Ex8Resp.innerText = "Por favor, ingresa un arreglo válido.";
        arreglo3.value = "";
        return;
    }

    Ex8Resp.innerText = multiplicarArreglo(arregloValue);

    // Limpiar los campos
    arreglo3.value = "";
} );

//Ejercicio 9
function sumarRango(inicio, fin){
    let suma = 0;
    for(let i = inicio; i <= fin; i++){
        suma += i;
    }
    return suma;
}

const inicio = document.getElementById("rangoInicial");
const fin = document.getElementById("rangoFinal");
const calcular9 = document.getElementById("calcular9");
const Ex9Resp = document.getElementById("Ex9Resp");

calcular9.addEventListener("click", () => {
    event.preventDefault();
    const inicioValue = parseInt(inicio.value);
    const finValue = parseInt(fin.value);

    //verificar si la entrada es un numero
    if(isNaN(inicioValue) || isNaN(finValue)){
        Ex9Resp.innerText = "Por favor, ingresa un número válido.";
        inicio.value = "";
        fin.value = "";
        return;
    }

    Ex9Resp.innerText = sumarRango(inicioValue, finValue);

    // Limpiar los campos
    inicio.value = "";
    fin.value = "";
} );

