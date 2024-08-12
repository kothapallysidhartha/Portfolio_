// Smooth Scroll & Active Nav Link
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// Header Shrink on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Typing Animation for Header Text
document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.querySelector('.animated-title');
    
    // Prevent typing effect from running multiple times
    if (typedText.textContent === "") {
        const text = "Hello I am Sai Sidhartha!";
        let index = 0;

        function type() {
            if (index < text.length) {
                typedText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust typing speed here
            }
        }

        type();
    }
});
