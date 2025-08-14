// script.js - Smooth Slide-Up Animation

document.addEventListener('DOMContentLoaded', () => {
  const tiles = document.querySelectorAll('.tile');
  const contents = document.querySelectorAll('.hidden-content');

  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      // Hide all
      contents.forEach(content => {
        content.classList.remove('active');
      });

      // Show target
      const targetId = tile.getAttribute('data-content');
      const targetContent = document.querySelector(targetId);
      
      if (targetContent) {
        // Force reflow for animation restart
        targetContent.style.display = 'block';
        targetContent.offsetHeight;
        targetContent.classList.add('active');
        
        // Scroll smoothly
        targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
