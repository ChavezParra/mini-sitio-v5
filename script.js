// [Cambio Signif. #4] Implementación de validación simple
document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('mensaje-feedback');

    // Validación: verifica si el campo nombre está vacío o solo contiene espacios
    if (nombre.trim() === '') {
        // [Cambio Signif. #4] Lógica para manejar error
        feedback.textContent = 'El campo Nombre es obligatorio.';
        feedback.style.color = 'red';
        return; 
    }

    // Validación: verifica si el campo email está vacío
    if (email.trim() === '') {
        // [Cambio Signif. #4] Lógica para manejar error
        feedback.textContent = 'El campo Correo Electrónico es obligatorio.';
        feedback.style.color = 'red';
        return;
    }

    // Si ambas validaciones pasan:
    // [Cambio Signif. #4] Lógica para manejar éxito
    feedback.textContent = '¡Mensaje enviado con éxito!';
    feedback.style.color = 'green';
    document.getElementById('contacto-form').reset(); // Limpia el formulario
});