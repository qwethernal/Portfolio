import { closeModal, openModal } from './modal';

function slider() {
    // Функция слайдера
    // Slaidide funktsioon
    let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');

    function showSlides(n) {
        // Отображение слайдов
        // Slaidide kuvamine
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => {
            item.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
        } else {
            total.textContent = slides.length;
            current.textContent = slideIndex;
        }
    }

    function plusSlides(n) {
        // Управление слайдами
        // Slaidide haldamine
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    showSlides(slideIndex);
}

export default slider;
