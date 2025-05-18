const container = document.querySelector(".container");

async function fetchProducts() {
  try {
    // const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    render(data);
    console.log(data);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    container.innerText = "Ошибка загрузки продуктов.";
  }
}

function render(products) {
  container.innerHTML = ""; // очистить "Загрузка..."

  products
    // .filter((product) => product.price >= 10)
    .forEach(({ title, price, image, category, rating }) => {
      const card = document.createElement("div");
      const img = document.createElement("img");
      const name = document.createElement("p");
      const priceEl = document.createElement("p");
      const cat = document.createElement("p");
      const ratingElem = document.createElement("p");

      //   img.src = images[0];
      img.src = image;
      //   img.src = category.image;
      // Надёжный способ выбрать фото
      //   img.src = images[0]?.includes("unsplash.com")
      //     ? category.image
      //     : images[0];
      img.alt = title;
      name.innerText = `Название: ${title}`;
      priceEl.innerText = `Цена: $${price}`;
      //   cat.innerText = `Категория: ${category.name}`;
      cat.innerText = `Категория: ${category}`;
      ratingElem.innerText = `Рейтинг: ${rating?.rate}`;

      // Цвет фона в зависимости от цены
      //   card.className = price >= 300 ? "lightgreen" : "lightblue";
    //   card.className = rating?.rate >= 4.7 ? "lightgreen" : "lightblue";
    if (rating?.rate !== undefined) {
        card.className = rating.rate >= 4.7 ? "lightgreen" : "lightblue";
      } else {
        card.className = "no-rating"; // или добавь текст "Нет рейтинга"
      }

      card.append(img, name, priceEl, cat, ratingElem);
      container.append(card);
    });
}

fetchProducts();
