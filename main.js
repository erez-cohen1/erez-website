const images = document.querySelectorAll('.feature-item img');

images.forEach(img => {
  let isActive = false; // Track whether the image is active or not
  
  img.addEventListener('click', function() {
    // Toggle the 'active' state when clicked
    isActive = !isActive;
    if (isActive) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });

  img.addEventListener('mouseover', function() {
    // Apply hover effect only if the image is active
    if (isActive) {
      img.classList.add('active'); // Keep the image active on hover
    }
  });

  img.addEventListener('mouseout', function() {
    // Remove 'active' state when mouse leaves if not hovered
    if (!img.matches(':hover')) {
      img.classList.remove('active');
      isActive = false; // Reset active state after hover ends
    }
  });
});
