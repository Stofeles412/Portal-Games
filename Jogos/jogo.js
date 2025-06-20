document.querySelectorAll('.imagens').forEach(function(img) {
    img.addEventListener('click', function() {
      this.classList.toggle('zoom');
    });
  });