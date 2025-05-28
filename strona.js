document.getElementById('contact-Form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Dane z formularza:');
    console.log('Email:', email);
    console.log('Wiadomość:', message);

    const tekst = document.createElement('p');
    tekst.textContent = 'Dziękuje za wysłanie wiadomości!'
    tekst.id = 'tekst-wiadomosc'

    const istniejacawiadomosc = document.getElementById('tekst-wiadomosc');
    if (istniejacawiadomosc) {
        istniejacawiadomosc.remove();
    }

    document.getElementById('contact-Form').appendChild(tekst);

    this.reset(); 
});