document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.querySelector('.progress-bar');
  
    if (progressBar) {
      var progressValue = parseInt(progressBar.getAttribute('data-progress'));
      progressBar.style.width = progressValue + '%';
    }
  });


