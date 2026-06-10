function compararNumeros() {

    let numero1 = Number(document.getElementById("numero1").value);

    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = document.getElementById("resultado");

    if (numero1 > numero2) {

        resultado.innerHTML =
            "O primeiro número é maior que o segundo";

    } else if (numero1 < numero2) {

        resultado.innerHTML =
            "O primeiro número é menor que o segundo";

    } else {

        resultado.innerHTML =
            "Os dois números são iguais";

    }
}