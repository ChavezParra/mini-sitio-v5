document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim(); 
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('mensaje-feedback');

    if (nombre === '' || email === '') { 
        feedback.textContent = 'ERROR: Todos los campos son obligatorios.';
        feedback.style.color = '#e74c3c'; 
        return; 
    }
    
    document.getElementById('contacto-form').style.display = 'none';

    const mainContainer = document.querySelector('main');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`;
    
    if (!document.querySelector('.success-message')) {
        mainContainer.appendChild(successDiv);
    }

    feedback.textContent = '';
});