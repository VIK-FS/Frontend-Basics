/**
 * 1. Отправить запрос на https://api.sampleapis.com/wines/whites 
 * и получить (вывести в консоль) массив с данными о белых винах
// 2. Отрисовать карточки вин с рейтингом 4.8 и более (image, wine, winery, rating)
// 3. Стилизовать карточки (border, padding, border-radius). 
// Из контейнера сделать grid - 5 колонок + отступы
//  display: grid;
//  grid-template-columns: repeat(5, 1fr);
//  gap: 40px;
// 4. Если у вина рейтинг 4.9 и больше то покрасить карточку в светло-зеленый. 
// А если 4.8 - то в светло-голубой
 */

// const container = document.getElementById('wine-container');
const container = document.querySelector(".container");

// 1. Отправляем запрос
fetch("https://api.sampleapis.com/wines/whites")
  .then((res) => res.json())
  .then((data) => {
    console.log(data); // Проверка полученных данных

    // 2. Фильтруем вина с рейтингом 4.8+
    const filteredWines = data.filter(
      (wine) => parseFloat(wine.rating?.average) >= 4.8
    );

    // 3. Отрисовка карточек
    filteredWines.forEach((wine) => {
      const card = document.createElement("div");
      card.classList.add("wine-card");

      // 4. Покраска карточек в зависимости от рейтинга
      const rating = parseFloat(wine.rating.average);
      if (rating >= 4.9) {
        card.classList.add("green-bg");
      } else if (rating >= 4.8) {
        card.classList.add("blue-bg");
      }

      // Заполняем карточку содержимым
      card.innerHTML = `
        <img src="${wine.image}" alt="${wine.wine}">
        <h3>${wine.wine}</h3>
        <p><strong>${wine.winery}</strong></p>
        <p>Rating: ${wine.rating.average}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });
