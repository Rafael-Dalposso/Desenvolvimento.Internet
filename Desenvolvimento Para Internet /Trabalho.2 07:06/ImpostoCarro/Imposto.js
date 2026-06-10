function Calcular() {

    let ano = Number(document.getElementById("ano").value);
    let valor = Number(document.getElementById("valor").value);

    let imposto;

    if (ano < 1990) {
        imposto = valor * 0.01;
    }
    else {
        imposto = valor * 0.015;
    }

    resultado.innerHTML =
        "O imposto a pagar é R$ " + imposto.toFixed(2);
}