document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission to avoid page reload
    
    // Collect form data
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
    };

    // Send the form data using fetch()
    fetch('https://n8n.ltbventures.com/webhook/web-form-submission', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for contacting us! We will get back to you shortly.');
        } else {
            alert('There was an issue with your submission.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});
