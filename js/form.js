var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar-paciente");
    var pessoa = obtemDadosPaciente(form);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(montaTr(pessoa));

    form.reset();

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