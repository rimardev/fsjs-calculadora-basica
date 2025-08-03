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

function saveNumber(numero) {
  numero1 = numero;
  data = "0";
  display.innerText = data;  
}

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
  data = "0";
  numero1 = 0;
  numero2 = 0;
  display.innerText = data;
});



