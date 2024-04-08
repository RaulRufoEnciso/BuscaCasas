$(document).ready(function() {
  // Primer método: Validación al hacer clic en Registrar
  $('#form-user-register').submit(function(e) {
      e.preventDefault(); // Evitar envío del formulario

      // Validar campos al enviar formulario
      validateForm();
  });

  // Segundo método: Validación en tiempo real
  $('#validationNom, #validationCognoms, #validationDNI, #validationUsername, #validationEmail, #validationTelf').focusout(function() {
      validateField($(this));
  });

  // Generar username al hacer clic en el @
  $('#btnUsername').click(function() {
      generateUsername();
  });
});

// Función para validar el formulario completo
function validateForm() {
  // Validar cada campo del formulario
  var isValid = true;
  isValid = validateField($('#validationNom')) && isValid;
  isValid = validateField($('#validationCognoms')) && isValid;
  isValid = validateField($('#validationDNI')) && isValid;
  isValid = validateField($('#validationUsername')) && isValid;
  isValid = validateField($('#validationEmail')) && isValid;
  isValid = validateField($('#validationTelf')) && isValid;

  // Si todos los campos son válidos, procesar los datos
  if (isValid) {
      // Procesar datos...
      alert('Datos válidos. Enviando formulario...');
  } else {
      alert('Por favor, corrija los campos inválidos.');
  }
}

// Función para validar un campo individual
function validateField(field) {
  var isValid = true;
  var feedbackDiv = field.next('.invalid-feedback');

  // Validar campo según su tipo
  switch (field.attr('id')) {
      case 'validationNom':
      case 'validationCognoms':
          isValid = validateEmptyField(field);
          break;
      case 'validationDNI':
          isValid = validateDNI(field);
          break;
      case 'validationUsername':
          isValid = true; // No se valida individualmente, solo se genera
          break;
      case 'validationEmail':
          isValid = validateEmail(field.val());
          break;
      case 'validationTelf':
          isValid = validatePhone(field.val());
          break;
      default:
          break;
  }

  // Actualizar clases y mensajes de feedback
  if (isValid) {
      field.removeClass('is-invalid').addClass('is-valid');
      feedbackDiv.html('');
  } else {
      field.removeClass('is-valid').addClass('is-invalid');
      feedbackDiv.html('Por favor, introduzca un valor válido.');
  }

  return isValid;
}

// Función para validar campo vacío
function validateEmptyField(field) {
  if (field.val().trim() === '') {
      return false;
  }
  return true;
}

// Función para validar DNI/NIE
function validateDNI(field) {
  var value = field.val().trim();
  return validateNIF_NIE(value);
}

// Función para generar username
function generateUsername() {
  var nom = $('#validationNom').val().trim().charAt(0).toLowerCase();
  var cognoms = $('#validationCognoms').val().trim().split(' ')[0];
  var dni = $('#validationDNI').val().trim();

  // Truncar cognoms si excede 4 caracteres
  if (cognoms.length > 4) {
      cognoms = cognoms.substring(0, 4);
  }

  // Obtener números de posiciones impares del DNI
  var numerosDNI = dni.match(/[13579]/g).join('');

  var username = nom + cognoms.charAt(0).toUpperCase() + numerosDNI;
  $('#validationUsername').val(username);
}

// Función para validar correo electrónico
function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

// Función para validar número de teléfono
function validatePhone(phone) {
  return /^\d{9}$/.test(phone);
}

// Función asíncrona para validar NIF/NIE
function validateNIF_NIE(value) {
  var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var str = value.toString().toUpperCase();

  if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

  var nie = str
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');

  var letter = str.substr(-1);
  var charIndex = parseInt(nie.substr(0, 8)) % 23;

  if (validChars.charAt(charIndex) === letter) return true;

  return false;
}
