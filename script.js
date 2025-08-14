// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tiles = document.querySelectorAll('.tile');
  const contents = document.querySelectorAll('.hidden-content');

  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      // Hide all contents
      contents.forEach(content => {
        content.classList.remove('active');
      });

      // Show the clicked content
      const targetContentId = tile.getAttribute('data-content');
      const targetContent = document.querySelector(targetContentId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});