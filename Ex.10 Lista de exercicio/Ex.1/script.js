let ValorDolar = document.querySelector("#ValorDolar");
let um = document.querySelector("#um");
let dois = document.querySelector("#dois");
let cinco = document.querySelector("#cinco");
let dez = document.querySelector("#dez");
let botao = document.querySelector("#botao");

function Calcular1(){
    let Dolar = Number(ValorDolar.value)
    let resultado = Dolar + (Dolar * 1/100)
    um.textContent = resultado
}
function Calcular2(){
    let Dolar = Number(ValorDolar.value)
    let resultado = Dolar + (Dolar * 2/100)
    dois.textContent = resultado
}
function Calcular5(){
    let Dolar = Number(ValorDolar.value)
    let resultado = Dolar + (Dolar * 5/100)
    cinco.textContent = resultado
}
function Calcular10(){
    let Dolar = Number(ValorDolar.value)
    let resultado = Dolar + (Dolar * 10/100)
    dez.textContent = resultado
}

botao.onclick = function(){
    Calcular1()
    Calcular2()
    Calcular5()
    Calcular10()
}