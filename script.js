document.addEventListener('DOMContentLoaded', function () {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Form submitted!');
    }

    var form = document.querySelector('.contact-form form');
    form.addEventListener('submit', handleSubmit);
});
