let data = "";
let numero1 = 0;
let numero2 = 0;
let operador = "";

const display = document.getElementById('display');

function showVisor(addnum) {
  data += addnum;
  console.log(data);
  display.innerText = data;  
}

function saveNumber1(numero) {
  numero1 = numero;
  data = "";
  display.innerText = "0";  
}

function saveNumber2(numero) {
  numero2 = numero;
  data = "";
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

const num1 = document.getElementById("1");
num1.addEventListener("click",() => {
  showVisor(num1.textContent);
});

const num2 = document.getElementById("2");
num2.addEventListener("click",() => {
  showVisor(num2.textContent);
});

const borrar = document.getElementById("c");
borrar.addEventListener("click",() => {
  data = "";
  numero1 = 0;
  numero2 = 0;
  display.innerText = "0";
});

const equal = document.getElementById("=");
equal.addEventListener("click",() => {
  resolver(numero1, numero2, operador);
});



