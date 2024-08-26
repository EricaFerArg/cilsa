const campo_email = document.getElementById('email');
const MensajeError = document.getElementById('error-message');

// validacion del formato del correo electronico
const email_formato = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

campo_email.addEventListener('blur', function() {
  validateEmail();
});

campo_email.addEventListener('input', function() {
  validateEmail();
});

function validateEmail() {
  const email = campo_email.value;

  if (!email_formato.test(email)) {
    MensajeError.textContent = 'Por favor, ingrese un correo electrónico válido.';
  } else {
    MensajeError.textContent = ''; // Limpia el mensaje de error si es válido
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('mi-formulario');
  const contrastButton = document.getElementById('contrastButton');

  contrastButton.addEventListener('click', function() {
      form.classList.toggle('high-contrast');
  });
});
