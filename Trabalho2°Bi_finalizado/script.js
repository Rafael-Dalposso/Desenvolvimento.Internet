function VerificarTriangulo() {
    let l1 = Number(document.getElementById("l1").value);
    let l2 = Number(document.getElementById("l2").value);
    let l3 = Number(document.getElementById("l3").value);

    let resultado = document.getElementById("resultado1");

    if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1) {
        resultado.innerHTML = "Os valores informados não formam um triângulo.";
    }
    else if (l1 === l2 && l2 === l3) {
        resultado.innerHTML = "O triângulo é Equilátero.";
    }
    else if (l1 === l2 || l2 === l3 || l1 === l3) {
        resultado.innerHTML = "O triângulo é Isósceles.";
    }
    else {
        resultado.innerHTML = "O triângulo é Escaleno.";
    }
}

function CalculoIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let resultado = document.getElementById("resultado2");

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Classificação: Abaixo do peso.";
    }
    else if (imc < 24.9) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Classificação: Peso normal.";
    }
    else if (imc < 29.9) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Classificação: Sobrepeso.";
    }
    else if (imc < 34.9) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Classificação: Obesidade grau 1.";
    }
    else if (imc < 39.9) {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Classificação: Obesidade grau 2.";
    }
    else {
        resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Classificação: Obesidade grau 3.";
    }
}

function CalcularImposto() {
    let ano = Number(document.getElementById("ano").value);
    let valor = Number(document.getElementById("valor").value);

    let resultado = document.getElementById("resultado3");

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

function CalcularSalario() {
    let codigo = Number(document.getElementById("codigo4").value);
    let salario = Number(document.getElementById("salario").value);

    let resultado = document.getElementById("resultado4");

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
        "Salário antigo: R$ " + salario.toFixed(2) +
        "<br>Novo salário: R$ " + novoSalario.toFixed(2) +
        "<br>Diferença: R$ " + aumento.toFixed(2);
}

function CalcularCredito() {
    let saldo = Number(document.getElementById("saldo").value);

    let resultado = document.getElementById("resultado5");

    let credito;

    if (saldo >= 0 && saldo <= 200) {
        credito = 0;
    }
    else if (saldo <= 400) {
        credito = saldo * 0.20;
    }
    else if (saldo <= 600) {
        credito = saldo * 0.30;
    }
    else {
        credito = saldo * 0.40;
    }

    resultado.innerHTML =
        "Saldo médio: R$ " + saldo.toFixed(2) +
        "<br>Crédito disponível: R$ " + credito.toFixed(2);
}

function CalcularPedido() {
    let codigo = Number(document.getElementById("codigo6").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    let resultado = document.getElementById("resultado6");

    let produto = "";
    let preco = 0;

    if (codigo == 1) {
        produto = "Cachorro Quente";
        preco = 11;
    }
    else if (codigo == 2) {
        produto = "Bauru";
        preco = 8.50;
    }
    else if (codigo == 3) {
        produto = "Misto Quente";
        preco = 8;
    }
    else if (codigo == 4) {
        produto = "Hambúrguer";
        preco = 9;
    }
    else if (codigo == 5) {
        produto = "Cheeseburger";
        preco = 10;
    }
    else if (codigo == 6) {
        produto = "Refrigerante";
        preco = 4.50;
    }
    else {
        resultado.innerHTML = "Código de produto inválido.";
        return;
    }

    let total = preco * quantidade;

    resultado.innerHTML =
        "Produto: " + produto +
        "<br>Quantidade: " + quantidade +
        "<br>Total a pagar: R$ " + total.toFixed(2);
}

function CalcularPagamento() {
    let preco = Number(document.getElementById("preco").value);
    let codigo = Number(document.getElementById("codigo7").value);

    let resultado = document.getElementById("resultado7");

    let total = 0;
    let formaPagamento = "";

    if (codigo == 1) {
        total = preco - (preco * 0.10);
        formaPagamento = "À vista em dinheiro ou cheque";
    }
    else if (codigo == 2) {
        total = preco - (preco * 0.15);
        formaPagamento = "À vista no cartão de crédito";
    }
    else if (codigo == 3) {
        total = preco;
        formaPagamento = "Em 2 vezes sem juros";
    }
    else if (codigo == 4) {
        total = preco + (preco * 0.10);
        formaPagamento = "Em 2 vezes com acréscimo de 10%";
    }
    else {
        resultado.innerHTML = "Código de pagamento inválido.";
        return;
    }

    resultado.innerHTML =
        "Forma de pagamento: " + formaPagamento +
        "<br>Valor final: R$ " + total.toFixed(2);
}

function CalcularSalarioProfessor() {
    let nivel = Number(document.getElementById("nivel").value);
    let qtdAula = Number(document.getElementById("qtdAula").value);

    let resultado = document.getElementById("resultado8");

    let valorHoraAula = 0;

    if (nivel == 1) {
        valorHoraAula = 12;
    }
    else if (nivel == 2) {
        valorHoraAula = 17;
    }
    else if (nivel == 3) {
        valorHoraAula = 25;
    }
    else {
        resultado.innerHTML = "Nível inválido.";
        return;
    }

    let salario = valorHoraAula * qtdAula * 4.5;

    resultado.innerHTML =
        "Valor da hora/aula: R$ " + valorHoraAula.toFixed(2) +
        "<br>Salário mensal: R$ " + salario.toFixed(2);
}