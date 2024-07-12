document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formStatus = document.getElementById('form-status');
  formStatus.textContent = 'Sending...';
  
  const formData = new FormData(this);
  
  fetch('https://your-backend-url.com/contact', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    formStatus.textContent = 'Thank you for your message!';
  })
  .catch(error => {
    formStatus.textContent = 'An error occurred. Please try again later.';
  });
});
