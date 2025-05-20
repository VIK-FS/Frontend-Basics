async function loadFlowers() {
  const container = document.getElementById("flowers-container");

  try {
    const response = await fetch(
      "https://alisherkhamidov.github.io/book-api/flowers.json"
    );
    const flowers = await response.json();

    flowers.forEach((flower) => {
      // Создание карточки
      const card = document.createElement("div");
      card.classList.add("card");

      // Название цветка
      const title = document.createElement("span");
      title.classList.add("card-el", "title");
      title.textContent = flower.name;

      // Изображение цветка
      const image = document.createElement("img");
      image.src = flower.image;
      image.alt = flower.name;

      // Вложенность
      card.append(image, title);
      container.append(card);
    });
  } catch (error) {
    console.error("Ошибка загрузки данных о цветах:", error);
    container.textContent = "Не удалось загрузить цветы 😢";
  }
}

// Вызов при загрузке страницы
document.addEventListener("DOMContentLoaded", loadFlowers);
