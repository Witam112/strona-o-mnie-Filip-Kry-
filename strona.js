document.getElementById('contact-Form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Dane z formularza:');
    console.log('Email:', email);
    console.log('Wiadomość:', message);

    this.reset(); 
});