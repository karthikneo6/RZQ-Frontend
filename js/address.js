document.getElementById('submitButton').addEventListener('click', function (event) {
    var form = document.getElementById('userForm');
    if (form.checkValidity()) {
        // Submit the form if valid
        form.submit();
    } else {
        // Trigger form validation if not valid
        form.reportValidity();
    }
});

// scroll smooth
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
