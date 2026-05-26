let Numero1 = document.querySelector("#Numero1");
let Numero2 = document.querySelector("#Numero2");
let Somar = document.querySelector("#Somar");
let Resultado = document.querySelector("#Resultado")

function Calcular(){
    let n1 = Number(Numero1.value);
    let n2 = Number(Numero2.value);
    
    if (Numero1.value === "" || Numero2.value === ""){
        Resultado.textContent = "Preencha os 2 campos"
        return;
    }
    if (isNaN(n1) || isNaN(n2)){
        Resultado.textContent = "Preencha apenas com Numeros"
        return;
    }
    let soma = n1 + n2;
    Resultado.textContent = "Resultado: "+ soma;
}

Somar.onclick = function() {
    Calcular();
}
