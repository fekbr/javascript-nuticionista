var titulo = document.querySelector(".titulo");
console.log(titulo);
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){

    var trPaciente = pacientes[i];

    var peso = trPaciente.querySelector(".info-peso").textContent;
    var altura = trPaciente.querySelector(".info-altura").textContent;
    var trIMC = trPaciente.querySelector(".info-imc");

    var valPeso = true;
    var valAltura = true;

    if(peso <= 0 || peso >= 1000) {
        valPeso = false;
        trIMC.textContent = "Peso inválido"
        trPaciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.0) {
        valPeso = false;
        trIMC.textContent = "Altura iválida";
        trPaciente.classList.add("paciente-invalido");
    }

    if(valPeso && valAltura){
        trIMC.textContent = (peso / (altura * altura)).toFixed(2);
    }

}

var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar-paciente");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});