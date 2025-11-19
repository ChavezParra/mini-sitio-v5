document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // [Suggestion implementada: Se aplica .trim() para limpiar espacios en blanco]
    const nombre = document.getElementById('nombre').value.trim(); 
    const email = document.getElementById('email').value.trim();

    const feedback = document.getElementById('mensaje-feedback');

    // --- 1. Validaciones de Campos Vacíos ---
    if (nombre === '') { 
        feedback.textContent = 'El campo Nombre es obligatorio.';
        feedback.style.color = '#e74c3c'; 
        return; 
    }

    if (email === '') {
        feedback.textContent = 'El campo Correo Electrónico es obligatorio.';
        feedback.style.color = '#e74c3c';
        return;
    }

    // --- 2. [CORRECCIÓN DEL ISSUE/BLOCKER]: Validación de formato de email ---
    // Esta expresión regular verifica si el formato es similar a: 'a@b.c'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        feedback.textContent = 'ERROR: El formato del correo electrónico es inválido.';
        feedback.style.color = '#e74c3c';
        return;
    }
    // --- Fin de la validación ---

    // --- 3. [CAMBIO SIGNIFICATIVO]: Flujo de UI al tener éxito ---
    
    // Ocultar el formulario
    document.getElementById('contacto-form').style.display = 'none';

    // Mostrar un mensaje de éxito grande y visible
    const mainContainer = document.querySelector('main');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`;
    
    // Aseguramos que el mensaje no se duplique 
    if (!document.querySelector('.success-message')) {
        mainContainer.appendChild(successDiv);
    }
    
    // Limpiar el feedback anterior
    feedback.textContent = '';
});