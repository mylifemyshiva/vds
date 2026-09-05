// FAQ Accordion Toggle
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('i');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.replace('fa-minus', 'fa-plus');
        } else {
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            document.querySelectorAll('.faq-question i').forEach(i => i.classList.replace('fa-minus', 'fa-plus'));

            answer.style.display = 'block';
            icon.classList.replace('fa-plus', 'fa-minus');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});