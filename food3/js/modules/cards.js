import { getResource } from '../services/services';

function cards() {
    // Функция для создания карточек меню
    // Funktsioon menüükardinate loomiseks
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 1; // коэффициент для изменения валюты
            this.changeToUSD();
        }

        changeToUSD() {
            // Функция для изменения цены в доллары
            // Funktsioon hinna dollariteks muutmiseks
            this.price = this.price * this.transfer;
        }

        render() {
            // Функция для рендеринга карточки меню на странице
            // Funktsioon menüükardi renderimiseks lehele
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = ['menu__item'];
                element.classList.add(...this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = 
                `<img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Hind:</div>
                    <div class="menu__item-total"><span>${this.price}</span> euro/paev</div>
                </div>`;

            this.parent.append(element);
        }
    }

    getResource('http://localhost:3000/menu')
        .then(data => {
            // Получение данных и рендеринг карточек
            // Andmete saamine ja kaartide renderimine
            data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
}

export default cards;
