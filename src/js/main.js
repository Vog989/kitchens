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


document.addEventListener('DOMContentLoaded', () => {
    const buttonImage = document.querySelector('.menu__open-btn');
    const menuList = document.querySelector('.menu__list');
    const menuIcon = 'src/images/icons/menu-btn.svg';
    const menuClose = 'src/images/icons/close.svg';
    buttonImage.addEventListener('click', () => {
        if (buttonImage.src.endsWith(menuIcon)) {
            buttonImage.src = menuClose;
            // menuList.style.display = 'block';
            menuList.classList.toggle('expanded');
        } else {
            buttonImage.src = menuIcon;
            menuList.classList.toggle('expanded');
            // menuList.style.display = 'none';
        }
    })
})


let swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
}

const getScreenSlides = () => {

    const projectsGallery = document.querySelector('.projects-gallery');
    if (projectsGallery.clientWidth <= 360) {
        swiperOptions = {
            slidesPerView: 2,
            spaceBetween: 10,
        }
        return;
    }

    if (projectsGallery.clientWidth <= 1024) {
        swiperOptions = {
            slidesPerView: 2,
            spaceBetween: 40,
        }
    }
}

window.addEventListener('resize', getScreenSlides);

getScreenSlides();

const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".projects-gallery__swiper-actions-next",
        prevEl: ".projects-gallery__swiper-actions-prev",
    },
    slidesPerView: swiperOptions.slidesPerView,
    spaceBetween: swiperOptions.spaceBetween,
    allowTouchMove: false,
    loop: true,
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

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.footer-top__title');

    items.forEach(item => {
        item.addEventListener('click', function() {
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

