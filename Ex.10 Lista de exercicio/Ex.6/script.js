function verificarNota() {

    let nota = Number(document.getElementById("nota").value);

    let resultado = document.getElementById("resultado");

    if (nota < 6 && nota > 4) {

        resultado.innerHTML = "Precisa fazer prova substitutiva";

    } else if (nota >= 6) {

        resultado.innerHTML = "Aprovado";

    } else {

        resultado.innerHTML = "Reprovado";

    }
}