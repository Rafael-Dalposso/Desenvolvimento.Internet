function Calcular() {

    let codigo = Number(document.getElementById("codigo").value);
    let salario = Number(document.getElementById("salario").value);

    let percentual;

    if (codigo == 101) {
        percentual = 0.10;
    }
    else if (codigo == 102) {
        percentual = 0.20;
    }
    else if (codigo == 103) {
        percentual = 0.30;
    }
    else {
        percentual = 0.40;
    }
    let aumento = salario * percentual;
    let novoSalario = salario + aumento;
    resultado.innerHTML =
        "Salário antigo: R$ " + salario.toFixed(2) + "<br>" +
        "Novo salário: R$ " + novoSalario.toFixed(2) + "<br>" +
        "Diferença: R$ " + aumento.toFixed(2);
}