// Tämä koodi huolehtii dynaamisista animaatioista ja interaktiivisista elementeistä

document.addEventListener("DOMContentLoaded", function() {
    // Animaatio, joka tuo otsikot näkyviin sivun vierityksessä
    const fadeInElements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', checkVisibility);

    function checkVisibility() {
        fadeInElements.forEach(function(element) {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;

            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    // Ladataan sivu animaatio (Loader)
    const loader = document.querySelector('.loader');
    window.addEventListener('load', function() {
        loader.style.display = 'none'; // Piilottaa latauskuvan, kun sivu on ladattu
    });
});
