let dataDisplay = "";
let numero1 = 0;
let numero2 = 0;
let operador = "";

const display = document.getElementById('display');

function muestraDisplay(addnum) {
  dataDisplay += addnum;
  console.log(dataDisplay);
  display.innerText = dataDisplay;  
}

function saveNumber1(numero) {
  numero1 = numero;
  dataDisplay = "";
  display.innerText = "0";  
}

function saveNumber2(numero) {
  numero2 = numero;
  dataDisplay = "";
  display.innerText = "0";  
}

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
  display.innerText = "0";
});

const equal = document.getElementById("=");
equal.addEventListener("click",() => {
  resolver(numero1, numero2, operador);
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