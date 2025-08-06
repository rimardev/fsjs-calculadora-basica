let dataDisplay = "";
let numero1 = 0;
let numero2 = 0;
let operador = "";

const display = document.getElementById('display');

function muestraDisplay(addnum) {
  dataDisplay += addnum;
  display.innerText = dataDisplay;  
};



function validarPrimero(operacion) {
  if(operador == "") {
    numero1 = Number(dataDisplay);
    operador = operacion;
    dataDisplay = "";
    display.innerText = "0";
  };
  
};

function resolver(numero1, numero2, operador) {
  switch(operador){
    case "suma": //sumar
    return numero1 + numero2;
    break;

    case "resta": //restar
    return numero1 - numero2;
    break;

    case "multiplica": //multiplicar
    return numero1 * numero2;
    break;

    case "divide": //dividir
    return numero1 / numero2;
    break;
  };
};



// OPERADORES *******************************
const borrar = document.getElementById("c");
borrar.addEventListener("click",() => {
  dataDisplay = "";
  numero1 = 0;
  numero2 = 0;
  operador = "";
  display.innerText = "0";
});

const equal = document.getElementById("=");
equal.addEventListener("click",() => {
  console.log(numero1, numero2, operador, dataDisplay);
  if(operador != "") {
    numero2 = Number(dataDisplay);
    console.log(numero1, numero2, operador, dataDisplay);
    console.log(resolver(numero1, numero2, operador));
    display.innerText = resolver(numero1, numero2, operador);
  };  
});

const suma = document.getElementById("+");
suma.addEventListener("click",() => {
  validarPrimero("suma");
});

const resta = document.getElementById("-");
resta.addEventListener("click",() => {
  validarPrimero("resta");
});

const multiplica = document.getElementById("*");
multiplica.addEventListener("click",() => {
  validarPrimero("multiplica");
});

const divide = document.getElementById("/");
divide.addEventListener("click",() => {
  validarPrimero("divide");
});



// NUMEROS **********************************
const num1 = document.getElementById("1");
num1.addEventListener("click",() => {
  muestraDisplay(num1.textContent);
});

const num2 = document.getElementById("2");
num2.addEventListener("click",() => {
  muestraDisplay(num2.textContent);
});

const num3 = document.getElementById("3");
num3.addEventListener("click",() => {
  muestraDisplay(num3.textContent);
});

const num4 = document.getElementById("4");
num4.addEventListener("click",() => {
  muestraDisplay(num4.textContent);
});

const num5 = document.getElementById("5");
num5.addEventListener("click",() => {
  muestraDisplay(num5.textContent);
});

const num6 = document.getElementById("6");
num6.addEventListener("click",() => {
  muestraDisplay(num6.textContent);
});

const num7 = document.getElementById("7");
num7.addEventListener("click",() => {
  muestraDisplay(num7.textContent);
});

const num8 = document.getElementById("8");
num8.addEventListener("click",() => {
  muestraDisplay(num8.textContent);
});

const num9 = document.getElementById("9");
num9.addEventListener("click",() => {
  muestraDisplay(num9.textContent);
});

const num0 = document.getElementById("0");
num0.addEventListener("click",() => {
  if(dataDisplay != ""){
    muestraDisplay(num0.textContent);
  };  
});