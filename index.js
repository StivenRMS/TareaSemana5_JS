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
  

