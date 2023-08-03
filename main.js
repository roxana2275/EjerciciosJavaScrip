function estadoDelTiempo() {
  var clima = prompt("¿Cómo está el día de hoy? (soleado, nublado, lloviendo)");
  alert(`El día de hoy está ${clima}`);
}

function circulo() {
  var radio = prompt("Ingrese el radio de la circunferencia");
  radio = parseFloat(radio);
  var area = Math.PI * radio * radio;
  var perimetro = 2 * Math.PI * radio;
  alert(`El perimetro es ` + area + `El area es ` + perimetro);
}

function edad() {
  var edad = document.getElementById("edadInput").value;
  console.log(edad);
  if (edad < 18) {
    alert("Es MENOR de edad");
  } else {
    alert("Es MAYOR de edad");
  }
}

function caracter() {
  var caracter = document.getElementById("charInput").value;
  var resultadoElemento = document.getElementById("resultado");
  if (
    caracter == "S" ||
    caracter == "N" ||
    caracter == "s" ||
    caracter == "s"
  ) {
    resultadoElemento.textContent = "Correcto";
  } else {
    resultadoElemento.textContent = "Incorrecto";
  }
}

function operaciones() {
  var numero1 = document.getElementById("primerNumero").value;
  var numero2 = document.getElementById("segundoNumero").value;
  var operacion = document.getElementById("operacion").value;
  var operacionElemento = document.getElementById("operacionResultado");
  console.log(numero1 + " " + numero2 + " " + operacion);
  switch (operacion) {
    case "Suma":
        operacionElemento.textContent="Resultado: "+(numero1+numero2);
      break;
    case "Resta":
        operacionElemento.textContent="Resultado: "+(numero1-numero2);
      break;
    case "Multiplicacion":
        operacionElemento.textContent="Resultado: "+(numero1*numero2);
      break;
      operacionElemento.textContent="Resultado: "+(numero1/numero2);
    case "Division":
        operacionElemento.textContent="Opcion no valida";
      break;
    default:
      break;
  }
}
