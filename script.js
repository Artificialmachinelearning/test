// Add animations using JavaScript or libraries like jQuery or GSAP

// Example: Animate the header on page load
window.addEventListener('load', function() {
    const header = document.querySelector('header');
    header.style.opacity = 0;
  
    setTimeout(function() {
      header.style.transition = 'opacity 0.5s';
      header.style.opacity = 1;
    }, 500);
  });
  
  // Example: Toggle navigation menu for small screens
  function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show-menu');
  }
  
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', toggleMenu);
  