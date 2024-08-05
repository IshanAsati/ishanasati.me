document.addEventListener('DOMContentLoaded', function() {
    // Load Navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));

    // Highlight code editor-like elements on page load
    const editorElements = document.querySelectorAll('.editor');
    editorElements.forEach(el => {
        el.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.2)';
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Display a minimal success message
                document.getElementById('formStatus').classList.remove('hidden');
                contactForm.reset(); // Clear the form
            }
        });
    }
});
