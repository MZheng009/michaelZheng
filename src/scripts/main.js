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
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}