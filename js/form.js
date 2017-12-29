var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar-paciente");
    var pessoa = obtemDadosPaciente(form);
    var erros = validaPessoa(pessoa);

    if(erros.length > 0){
        
        exibeMensagensDeErro(erros);
        
    } else {

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(montaTr(pessoa));

        form.reset();
        document.querySelector("#mensagens-erro").innerHTML = "";
    }

});

function obtemDadosPaciente(form) {

    var pessoa = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return pessoa;
}

function montaTr(pessoa){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(pessoa.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(pessoa.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(pessoa.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(pessoa.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(pessoa.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){

    var dadoTd = document.createElement("td");
    dadoTd.classList.add(classe);
    dadoTd.textContent = dado;

    return dadoTd;

}

function validaPessoa(pessoa) {

    var erros = [];

    if(pessoa.nome.length == 0){
        erros.push("Nome não informado");
    }
    
    if(!validaPeso(pessoa.peso) || pessoa.peso.length==0){
        erros.push("Peso inválido");
    }

    if(!validaAltura(pessoa.altura) || pessoa.altura.length==0){
        erros.push("Altura inválida");
    }

    if(pessoa.gordura.length==0){
        erros.push("Índice de gordura não informado");
    }

    return erros;
    
}

function exibeMensagensDeErro(erros) {

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });


}