import '../scss/style.scss';

// const swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq__question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = this.classList.contains('active');

            if (isOpen) {
                answer.style.maxHeight = 0;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }

            this.classList.toggle('active');
        });
    });
});