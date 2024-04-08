$(document).ready(function() {
    // Agregar eventos de cambio para validar los campos cuando cambian
    $("#nombre").change(validarNombre);
    $("#preu").change(validarPreu);
    $("#nom").change(validarNom);
    $("#numero").change(validarNumero);
    $("#pis").change(validarPis);
    $("#escala").change(validarEscala);
    $("#porta").change(validarPorta);
    $("#cp").change(validarCp);

    function validarNombre() {
        var nombre = $("#nombre").val().trim();
        if (nombre.length > 0) {
            $("#nombre").css("border-color", "green");
            return true;
        } else {
            $("#nombre").css("border-color", "red");
            return false;
        }
    }

    function validarPreu() {
        var preu = $("#preu").val().trim();
        if (preu.length > 0 && !isNaN(preu)) {
            $("#preu").css("border-color", "green");
            return true;
        } else {
            $("#preu").css("border-color", "red");
            return false;
        }
    }

    function validarNom() {
        var nom = $("#nom").val().trim();
        if (nom.length > 0) {
            $("#nom").css("border-color", "green");
            return true;
        } else {
            $("#nom").css("border-color", "red");
            return false;
        }
    }

    function validarNumero() {
        var numero = $("#numero").val().trim();
        if (numero.length > 0) {
            $("#numero").css("border-color", "green");
            return true;
        } else {
            $("#numero").css("border-color", "red");
            return false;
        }
    }

    function validarPis() {
        var pis = $("#pis").val().trim();
        if (pis.length > 0) {
            $("#pis").css("border-color", "green");
            return true;
        } else {
            $("#pis").css("border-color", "red");
            return false;
        }
    }

    function validarEscala() {
        var escala = $("#escala").val().trim();
        if (escala.length > 0) {
            $("#escala").css("border-color", "green");
            return true;
        } else {
            $("#escala").css("border-color", "red");
            return false;
        }
    }

    function validarPorta() {
        var porta = $("#porta").val().trim();
        if (porta.length > 0) {
            $("#porta").css("border-color", "green");
            return true;
        } else {
            $("#porta").css("border-color", "red");
            return false;
        }
    }

    function validarCp() {
        var cp = $("#cp").val().trim();
        if (cp.length > 0) {
            $("#cp").css("border-color", "green");
            return true;
        } else {
            $("#cp").css("border-color", "red");
            return false;
        }
    }

    // Función para validar el formulario completo
    function validarFormulario() {
        var nombreValido = validarNombre();
        var preuValido = validarPreu();
        var nomValido = validarNom();
        var numeroValido = validarNumero();
        var pisValido = validarPis();
        var escalaValido = validarEscala();
        var portaValido = validarPorta();
        var cpValido = validarCp();

        return nombreValido && preuValido && nomValido && numeroValido && pisValido && escalaValido && portaValido && cpValido;
    }

    // Agregar eventos de cambio para validar el formulario completo
    $('#form-user-register input, #form-user-register select').on('input', function() {
        validarFormulario();
    });

    $('#form-user-register').submit(function(event) {
        // Evitar que se envíe el formulario si no es válido
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });
});
