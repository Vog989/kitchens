const prevBtn = document.querySelector('.swiper-actions-prev');
const nextBtn = document.querySelector('.swiper-actions-next');

const counter = document.querySelector('.current-counter__value');
const maxValue = 10;

// const currentValue = Number(counter.innerText);

prevBtn.addEventListener('click', () => {
    const currentValue = Number(counter.innerText);
    if (currentValue > 1) {
        counter.innerText = currentValue-1;
    }
});

nextBtn.addEventListener('click', () => {
    const currentValue = Number(counter.innerText);
    if (currentValue < 10) {
        counter.innerText = currentValue+1;
    }
});