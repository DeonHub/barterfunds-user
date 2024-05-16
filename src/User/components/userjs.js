

function toggleSidebar() {
    var sidebar = document.querySelector('.nk-sidebar');

    // Check if sidebar exists
    if (sidebar) {
        // Toggle the 'nk-sidebar-mobile' class to show/hide the sidebar on smaller screens
        sidebar.classList.toggle('nk-sidebar-mobile');
    }
}

// Add event listener to the navigation toggle button
document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('.nk-nav-toggle');

    if (navToggle) {
        navToggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            console.log("Clicked");
            toggleSidebar(); // Toggle the sidebar
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.querySelector('.progress-bar');
  
    if (progressBar) {
      var progressValue = parseInt(progressBar.getAttribute('data-progress'));
      progressBar.style.width = progressValue + '%';
    }
  });


