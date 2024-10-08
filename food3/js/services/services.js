// Функция для отправки данных на указанный URL методом POST.
// Постitab andmeid määratud URL-ile POST meetodiga.
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data // Отправляемые данные в формате JSON.
// Saatmise andmed JSON formaadis.
    });

    return await res.json(); // Возвращаем ответ в формате JSON.
// Tagastame vastuse JSON formaadis.
};

// Функция для получения ресурса по указанному URL методом GET.
// Funktsioon ressurssi hankimiseks määratud URL-ilt GET meetodiga.
async function getResource(url) {
    let res = await fetch(url); // Выполняем запрос к URL.

// Teostame päringu URL-ile.

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`); // Если запрос не удался, выбрасываем ошибку.
// Kui päring ebaõnnestus, viskame vea.
    }

    return await res.json(); // Возвращаем ответ в формате JSON.
// Tagastame vastuse JSON formaadis.
}

export { postData };
export { getResource };
