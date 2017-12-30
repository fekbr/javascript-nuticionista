var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        var msgErro = document.querySelector("#erro-busca");
        if(xhr.status == 200) {
            var pacientes = JSON.parse(xhr.responseText);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
            msgErro.classList.add("invisivel");
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            msgErro.classList.remove("invisivel");
        }
        
    });

    xhr.send();

});
