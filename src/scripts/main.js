document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const aboutMe = document.getElementById('about-me');
    const hobbies = document.getElementById('hobbies');

    greeting.textContent = 'About Me.';
    aboutMe.textContent = 'Hello! I am Michael Z, a passionate web developer.';
    hobbies.textContent = 'In my free time, I enjoy paddling and swimming.';

    const changeContentButton = document.getElementById('change-content');
    let isOriginalContent = true;
    changeContentButton.addEventListener('click', () => {
        if (isOriginalContent) {
            aboutMe.textContent = 'I love learning new technologies and building projects.';
            hobbies.textContent = 'Currently, I am exploring JavaScript frameworks like React and Vue.';
        } else {
            aboutMe.textContent = 'Hello! I am Michael Z, a passionate web developer.';
            hobbies.textContent = 'In my free time, I enjoy paddling and swimming.';
        }
        isOriginalContent = !isOriginalContent;
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                var formData = new FormData(form);
                fetch(form.action, {
                    method: form.method,
                    body: formData
                }).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if (data.status === 'success') {
                        document.getElementById('thank-you-message').style.display = 'block';
                        form.reset();
                    } else {
                        alert('Failed to send the message. Please try again.');
                    }
                });
            }
        });
    }

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}