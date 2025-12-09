const menuBtn = document.querySelector('.menu-btn');
const navUl   = document.querySelector('.main-nav ul');

// Abrir / cerrar con el botón
menuBtn.addEventListener('click', () => {
  const isOpen = navUl.classList.toggle('activo');

  if (isOpen) {
    document.body.style.overflow = 'hidden'; // bloquea scroll
  } else {
    document.body.style.overflow = '';       // restaura scroll
  }
});

// Cerrar al hacer clic fuera del menú
window.addEventListener('click', (event) => {
  if (navUl.classList.contains('activo') && !navUl.contains(event.target) && event.target !== menuBtn) {
    navUl.classList.remove('activo');
    document.body.style.overflow = '';
  }
});

// Cerrar con tecla ESC
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navUl.classList.contains('activo')) {
    navUl.classList.remove('activo');
    document.body.style.overflow = '';
  }
});

// Cerrar al hacer clic en un enlace del menú
navUl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('activo');
    document.body.style.overflow = '';
  });

});
