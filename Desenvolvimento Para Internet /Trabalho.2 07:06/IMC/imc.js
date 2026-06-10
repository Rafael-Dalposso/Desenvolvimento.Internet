function CalculoIMC() {

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        resultado.innerHTML = "O seu IMC é " + imc.toFixed(2) + " e você está abaixo do peso";
    }
    else if (imc < 24.9) {
        resultado.innerHTML = "O seu IMC é " + imc.toFixed(2) + " e você está no peso normal";
    }
    else if (imc < 29.9) {
        resultado.innerHTML = "O seu IMC é " + imc.toFixed(2) + " e você está com sobrepeso";
    }
    else if (imc < 34.9) {
        resultado.innerHTML = "O seu IMC é " + imc.toFixed(2) + " e você está com obesidade grau 1";
    }
    else if (imc < 39.9) {
        resultado.innerHTML = "O seu IMC é " + imc.toFixed(2) + " e você está com obesidade grau 2";
    }
    else {
        resultado.innerHTML = "O seu IMC é " + imc.toFixed(2) + " e você está com obesidade grau 3";
    }
}