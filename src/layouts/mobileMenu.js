// src/scripts/mobileMenu.js

function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const closeButton = document.getElementById('close-menu-button');
  const menuPage = document.getElementById('mobile-menu-page');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuButton || !menuPage) {
    console.error("Mobile menu elements not found.");
    return;
  }

  function openMenu() {
    menuPage.style.transform = 'translateY(0)';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuPage.style.transform = 'translateY(-100%)';
    document.body.style.overflow = '';
  }

  menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu();
  });

  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Swipe down to close
  let touchStartY = 0;
  menuPage.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  menuPage.addEventListener('touchmove', (e) => {
    const touchEndY = e.touches[0].clientY;
    const diff = touchEndY - touchStartY;
    
    if (diff > 50) { 
      closeMenu();
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', initMobileMenu);