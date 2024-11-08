// Select pricing buttons and pop-up elements
const planButtons = document.querySelectorAll('.pricing-button');
const popup = document.getElementById('popupMessage');
const closePopup = document.getElementById('closePopup');

// Show pop-up when any plan button is clicked
planButtons.forEach(button => {
  button.addEventListener('click', () => {
    popup.style.display = 'block'; // Show the pop-up
  });
});

// Close pop-up when the close button is clicked
closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the pop-up
});