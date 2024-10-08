function timer(id, deadline) {
    // Функция для установки таймера обратного отсчета
    // Funktsioon tagasipööratava ajastuse seadmiseks
    function getTimeRemaining(endtime) {
        // Функция для вычисления оставшегося времени
        // Funktsioon allesjäänud aja arvutamiseks
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
              minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
              seconds = Math.floor((t % (1000 * 60)) / 1000);

        return {
            total: t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function updateClock() {
        // Функция для обновления таймера
        // Funktsioon ajastuse värskendamiseks
        const t = getTimeRemaining(deadline);

        document.querySelector('#days').innerHTML = t.days;
        document.querySelector('#hours').innerHTML = t.hours;
        document.querySelector('#minutes').innerHTML = t.minutes;
        document.querySelector('#seconds').innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateClock();
    const timeInterval = setInterval(updateClock, 1000);
}

export default timer;
