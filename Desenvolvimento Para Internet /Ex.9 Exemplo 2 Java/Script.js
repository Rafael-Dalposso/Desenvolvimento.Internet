let ValorPago = document.querySelector("#ValorPago");
let ValorItem = document.querySelector("#ValorItem");
let Resultar = document.querySelector("#Resultar");
let Troco = document.querySelector("#Troco");

function Calcular(){
    let n1 = Number(ValorPago.value);
    let n2 = Number(ValorItem.value);
    
    if (ValorPago.value === "" || ValorItem.value === ""){
        Troco.textContent = "Preencha os 2 campos"
        return;
    }
    if (isNaN(n1) || isNaN(n2)){
        Troco.textContent = "Preencha apenas com Numeros"
        return;
    }
    if (n1 < n2) {
        Troco.textContent = "Valor pago é menor que o item";
        return;
    }
    let resultado = n1 - n2;
    Troco.textContent = "Seu troco é: "+ resultado;
}

Resultar.onclick = function() {
    Calcular();
}
