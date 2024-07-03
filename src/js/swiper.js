const prevBtn = document.querySelector('.projects-gallery__swiper-actions-prev');
const nextBtn = document.querySelector('.projects-gallery__swiper-actions-next');

const counter = document.querySelector('.projects-gallery__current-counter-value');
const maxValue = 10;

// const currentValue = Number(counter.innerText);

prevBtn.addEventListener('click', () => {
    const currentValue = Number(counter.innerText);
    if (currentValue > 1) {
        counter.innerText = currentValue-1;
    } else {
        counter.innerText = 10;
    }
});

nextBtn.addEventListener('click', () => {
    const currentValue = Number(counter.innerText);
    if (currentValue < 10) {
        counter.innerText = currentValue+1;
    } else {
        counter.innerText = 1;
    }
});