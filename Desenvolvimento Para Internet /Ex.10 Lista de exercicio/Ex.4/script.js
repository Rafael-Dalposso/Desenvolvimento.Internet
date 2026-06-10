let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let resultado = document.querySelector("#resultado");
let calcular = document.querySelector("#calcular");
let refris = document.querySelector("#refris");
let sabores = document.querySelector("#sabores");
// 
function calcolo(){
    let s1 = sabor1.value
    let s2 = sabor2.value
    let s3 = sabor3.value
    let s4 = sabor4.value
    let refri = Number(refris.value)

    if (
    s1 != "" &&
    s2 != "" &&
    s3 != "" &&
    s4 != "" 
){
    let resultad = (4 * 12) + (refri * 7)
    resultado.textContent = resultad + "R$";
    sabores.textContent = s1 + ", " + s2 + ", " + s3 + ", " + s4;
 } else {
    resultado.textContent = "Preencha todos os dados"
 }   
}
calcular.onclick = function(){
    calcolo();
}