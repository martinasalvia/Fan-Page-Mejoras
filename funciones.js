// Abrir modal
function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // bloquea scroll del fondo
  }
}

// Cerrar modal
function closeModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // restaura scroll
  }
}

// Cerrar al hacer clic fuera del contenido
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
}

// Cerrar con tecla ESC
window.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.classList.remove('show');
    });
    document.body.style.overflow = '';
  }
});

