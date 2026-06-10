function dividirTurmas() {

    let alunos = Number(document.getElementById("alunos").value);

    let turmas = Number(document.getElementById("turmas").value);

    let pessoasPorTurma = Math.floor(alunos / turmas);

    let semTurma = alunos % turmas;

    let resultado = document.getElementById("resultado");

    resultado.innerHTML =
        "Quantidade de pessoas por turma: " +
        pessoasPorTurma +

        "<br><br>Pessoas sem turma: " +
        semTurma;
}