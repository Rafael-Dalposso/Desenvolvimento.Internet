// importados do html
let h1Titulo = document.querySelector("#h1Titulo");
let InputCampoTexto = document.querySelector("#InputCampoTexto");
let ButtonTrocarTexto = document.querySelector("#ButtonTrocarTexto");

function alterarTexto(){
    //retirar o texto do input e adicionar uma variavel
    let textoDigitado = InputCampoTexto.value;

    //atribuir o texto retirado do input e adicionar no h1
    h1Titulo.textContent = textoDigitado;
}
//Ao clicar no botão acionar a função
ButtonTrocarTexto.onclick = function(){
    alterarTexto();
}