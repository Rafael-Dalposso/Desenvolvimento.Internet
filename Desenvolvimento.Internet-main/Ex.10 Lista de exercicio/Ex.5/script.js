function verificarIdades() {

    let anoAtual = new Date().getFullYear();

    let pessoas = [
        {
            nome: document.getElementById("nome1").value,
            idade: anoAtual - Number(document.getElementById("ano1").value)
        },

        {
            nome: document.getElementById("nome2").value,
            idade: anoAtual - Number(document.getElementById("ano2").value)
        },

        {
            nome: document.getElementById("nome3").value,
            idade: anoAtual - Number(document.getElementById("ano3").value)
        }
    ];

    // Ordena da maior idade para a menor
    pessoas.sort((a, b) => b.idade - a.idade);

    document.getElementById("resultado").innerHTML =
        "Pessoa mais velha: " + pessoas[0].nome +
        " - " + pessoas[0].idade + " anos<br><br>" +

        "Segunda pessoa mais velha: " + pessoas[1].nome +
        " - " + pessoas[1].idade + " anos<br><br>" +

        "Terceira pessoa mais velha: " + pessoas[2].nome +
        " - " + pessoas[2].idade + " anos";
}