document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const mensajeDiv = document.getElementById('mensaje');
    
    if (nombre.trim() !== '') {
        mensajeDiv.textContent = `Hola, ${nombre}! Gracias por enviar el formulario.`;
    } else {
        mensajeDiv.textContent = 'Por favor, escribe tu nombre.';
    }
});