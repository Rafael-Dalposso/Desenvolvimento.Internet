let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let somar = document.querySelector("#somar");
let substrair = document.querySelector("#substrair");
let multiplicar = document.querySelector("#multiplicar");
let dividir = document.querySelector("#dividir");
let resultado = document.querySelector("#resultado");

function soma() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let resultad = n1 + n2
    resultado.textContent = resultad
}
function subs() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let resultad = n1 - n2
    resultado.textContent = resultad
}
function mult() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let resultad = n1 * n2
    resultado.textContent = resultad
}
function div() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let resultad = n1 / n2
    resultado.textContent = resultad
}

somar.onclick = function (){
    soma();
}
substrair.onclick = function (){
    subs();
}
multiplicar.onclick = function (){
    mult();
}
dividir.onclick = function (){
    div();
}