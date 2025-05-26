document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;

  if (nombre.trim() !== '') {
    document.getElementById('mensaje-confirmacion').style.display = 'block';
  } else {
    alert('Por favor, escribe tu nombre.');
  }
});