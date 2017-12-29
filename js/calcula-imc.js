var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){

    var trPaciente = pacientes[i];

    var peso = trPaciente.querySelector(".info-peso").textContent;
    var altura = trPaciente.querySelector(".info-altura").textContent;
    var trIMC = trPaciente.querySelector(".info-imc");

    var valPeso = validaPeso(peso);
    var valAltura = validaAltura(altura);

    if(!valPeso) {
        trIMC.textContent = "Peso inválido"
        trPaciente.classList.add("paciente-invalido");
    }

    if(!valAltura) {
        trIMC.textContent = "Altura iválida";
        trPaciente.classList.add("paciente-invalido");
    }

    if(valPeso && valAltura){
        trIMC.textContent = calculaIMC(peso, altura);
    }

}

function calculaIMC(peso, altura) {

    return (peso / (altura * altura)).toFixed(2);

}

function validaPeso(peso) {

    if(peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if(altura > 0 && altura < 3.0) {
        return true;
    } else {
        return false;
    }
}