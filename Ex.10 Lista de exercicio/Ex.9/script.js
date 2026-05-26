function verificarMeta() {

    let vendido = Number(document.getElementById("vendido").value);

    let meta = Number(document.getElementById("meta").value);

    let metaMinima = Number(document.getElementById("metaMinima").value);

    let resultado = document.getElementById("resultado");

    let percentualMeta = (vendido / meta) * 100;

    let percentualMetaMinima = (vendido / metaMinima) * 100;

    if (vendido >= meta) {

        resultado.innerHTML =
            "Atingiu a meta<br><br>" +

            "Percentual da meta: " +
            percentualMeta.toFixed(2) + "%<br><br>" +

            "Percentual da meta mínima: " +
            percentualMetaMinima.toFixed(2) + "%";

    } else if (vendido >= metaMinima) {

        resultado.innerHTML =
            "Atingiu a meta mínima<br><br>" +

            "Percentual da meta: " +
            percentualMeta.toFixed(2) + "%<br><br>" +

            "Percentual da meta mínima: " +
            percentualMetaMinima.toFixed(2) + "%";

    } else {

        resultado.innerHTML =
            "Não atingiu nenhuma meta<br><br>" +

            "Percentual da meta: " +
            percentualMeta.toFixed(2) + "%<br><br>" +

            "Percentual da meta mínima: " +
            percentualMetaMinima.toFixed(2) + "%";
    }
}