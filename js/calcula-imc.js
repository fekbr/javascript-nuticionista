var titulo = document.querySelector(".titulo");

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