
// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Añadir un evento al formulario de login
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío automático del formulario
      validarLogin(); // Llamar a la función de validación
  });
});

function validarLogin() {
  const email = document.querySelector('[name="email"]').value;
  const numeroControl = document.querySelector('[name="numeroControl"]').value;

  // Expresión regular para validar el número de control
  const regexControl = /^(2[0-4]|1[8-9])84[0-9]{4}$/;

  // Validar el número de control
  if (!regexControl.test(numeroControl)) {
      alert("El número de control debe comenzar con 18-24, seguido de 84, y debe tener 8 dígitos en total.");
      return;
  }


  // Redirigir a la página de formulario
  window.location.href = "formulario.html"; // Cambia por la URL a la que deseas redirigir
}




// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Botón de registro
  document.querySelector('.registrar').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    validarFormulario(); // Llama a la función de validación
  });
});

function validarFormulario() {
  const numeroControl = document.querySelector('[name="ncontrol"]').value;
  const apellidoPaterno = document.querySelector('[name="App"]').value;
  const apellidoMaterno = document.querySelector('[name="Apm"]').value;
  const nombre = document.querySelector('[name="nombre"]').value;
  const correo = document.querySelector('[name="correo"]').value;
  const telefono = document.querySelector('[name="telefono"]').value;
  const sexo = document.querySelector('[name="sexo"]:checked');
  const fechaNacimiento = document.querySelector('[name="Fechan"]').value;
  const direccion = document.querySelector('[name="direccion"]').value;
  const municipio = document.querySelector('[name="municipio"]').value;
  const estado = document.querySelector('[name="estado"]').value;
  const procedencia = document.querySelector('[name="procedencia"]').value;
  const carrera = document.querySelector('[name="car"]').value;
  const periodo = document.querySelector('[name="periodo"]').value;

  // Expresiones regulares para validaciones
  const soloNumeros = /^[0-9]+$/;
  const soloLetras = /^[a-zA-ZÀ-ÿ\s]+$/;
  const formatoCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  // Validaciones
  if (numeroControl === "" || !soloNumeros.test(numeroControl)) {
    alert("El número de control es obligatorio y debe contener solo números.");
    return;
  }

  if (apellidoPaterno === "" || !soloLetras.test(apellidoPaterno)) {
    alert("El apellido paterno es obligatorio y debe contener solo letras.");
    return;
  }

  if (apellidoMaterno === "" || !soloLetras.test(apellidoMaterno)) {
    alert("El apellido materno es obligatorio y debe contener solo letras.");
    return;
  }

  if (nombre === "" || !soloLetras.test(nombre)) {
    alert("El nombre es obligatorio y debe contener solo letras.");
    return;
  }

  if (!sexo) {
    alert("Debe seleccionar un sexo.");
    return;
  }

  if (fechaNacimiento === "") {
    alert("La fecha de nacimiento es obligatoria.");
    return;
  }

  if (correo === "" || !formatoCorreo.test(correo)) {
    alert("Ingresa un correo electrónico válido.");
    return;
  }

  if (telefono === "" || !soloNumeros.test(telefono)) {
    alert("Ingresa un número de teléfono válido que contenga solo números.");
    return;
  }

  if (direccion === "") {
    alert("La dirección es obligatoria.");
    return;
  }

  if (municipio === "" || !soloLetras.test(municipio)) {
    alert("El municipio es obligatorio y debe contener solo letras.");
    return;
  }

  if (estado === "" || !soloLetras.test(estado)) {
    alert("El estado es obligatorio y debe contener solo letras.");
    return;
  }

  if (procedencia === "") {
    alert("Llena el campo de procedencia.");
    return;
  }

  if (carrera === "") {
    alert("Selecciona una carrera.");
    return;
  }

  if (periodo === "") {
    alert("Llena el campo de periodo.");
    return;
  }

  // Si todas las validaciones son correctas, enviar el formulario
  alert("Registro exitoso");
  window.location.href = "https://huejutla.tecnm.mx/"; // Cambia por la URL a la que deseas redirigir
}
