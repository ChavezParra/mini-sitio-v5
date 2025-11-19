document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim(); 
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('mensaje-feedback');

    // Validación
    if (nombre === '' || email === '') { 
        feedback.textContent = 'ERROR: Todos los campos son obligatorios.';
        feedback.style.color = '#e74c3c'; // Rojo para error
        return; 
    }

    // CAMBIO SIGNIFICATIVO: Flujo de UI al tener éxito
    
    // 1. Ocultar el formulario
    document.getElementById('contacto-form').style.display = 'none';

    // 2. Mostrar un mensaje de éxito grande y visible
    const mainContainer = document.querySelector('main');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`;
    
    // Aseguramos que el mensaje no se duplique si se intenta enviar de nuevo (aunque el form está oculto)
    if (!document.querySelector('.success-message')) {
        mainContainer.appendChild(successDiv);
    }
    
    // 3. Limpiar el feedback anterior
    feedback.textContent = '';
});