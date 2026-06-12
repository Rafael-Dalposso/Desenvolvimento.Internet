//importados
let Idade = document.querySelector("#Idade");
let Salvar = document.querySelector("#Salvar");
let IdadeMeliante = document.querySelector("#IdadeMeliante");
let NomeMeliante = document.querySelector("#NomeMeliante");
let Nome = document.querySelector("#Nome");
let Tapodendo = document.querySelector("#Tapodendo");

// função botão de salvar

function BotãoDeSalvar(){
    let IdadeAtual = Idade.value;
    let NomeAtual = Nome.value;

    NomeMeliante.textContent = NomeAtual;
    IdadeMeliante.textContent = IdadeAtual;

    // verificar campos
   if (IdadeAtual === "" || NomeAtual === "") {
        Tapodendo.textContent = "Preencha os campos";
        return; // PARA aqui
    }
    // verificar idade
    if(IdadeAtual >= 18) {
    Tapodendo.textContent = "Ta podendo";
    } else if(IdadeAtual >=99) {
        Tapodendo.textContent = "Ta Morto já"
    } else {
    Tapodendo.textContent = "Não ta podendo";
}
    
}

Salvar.onclick = function(){
    BotãoDeSalvar();
}

