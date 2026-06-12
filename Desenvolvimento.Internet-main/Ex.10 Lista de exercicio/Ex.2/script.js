let quantidade = document.querySelector("#quantidade");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function calcolo() {
    let quantidad = Number(quantidade.value)
    let zovo = quantidad * 2 
    let quejo = quantidad * 50
    resultado.textContent = "será necessário: "+ zovo +" Ovos e "+ quejo +"g de queijo";
}

calcular.onclick = function(){
    calcolo();
}