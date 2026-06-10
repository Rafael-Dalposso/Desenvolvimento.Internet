function VerificarTriangulo() {
    let l1 = Number(document.getElementById("l1").value);
    let l2 = Number(document.getElementById("l2").value);
    let l3 = Number(document.getElementById("l3").value);

    if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1) {
        Resultado.innerHTML = "não forma um triângulo";
    }
    else if (l1 === l2 && l2 === l3) {
        Resultado.innerHTML = "o triangulo é um Equilátero"
    }
    else if (l1 === l2 || l2 === l3 || l1 === l3) {
        Resultado.innerHTML = "o triangulo é um Isósceles"
    }
    else {
        Resultado.innerHTML = "o triangulo é um Escaleno"
    }

}