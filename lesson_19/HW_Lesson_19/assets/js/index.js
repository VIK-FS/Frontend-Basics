const container = document.querySelector(".container");

async function fetchProducts() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
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
    .forEach(({ title, price, images, category }) => {
      const card = document.createElement("div");
      const img = document.createElement("img");
      const name = document.createElement("p");
      const priceEl = document.createElement("p");
      const cat = document.createElement("p");

      // img.src = images[0];
      //   img.src = category.image;
      img.src = images[0]?.includes("unsplash.com")
        ? category.image
        : images[0];
      img.alt = title;
      name.innerText = `Название: ${title}`;
      priceEl.innerText = `Цена: $${price}`;
      cat.innerText = `Категория: ${category}`;

      // Цвет фона в зависимости от цены
      // card.className = price >= 30 ? "lightgreen" : "lightblue";
      card.className = "lightgreen";
      // card.className = rating?.rate >= 4.7 ? "lightgreen" : "lightblue";
      // if (rating?.rate !== undefined) {
      //     card.className = rating.rate >= 4.7 ? "lightgreen" : "lightblue";
      //   } else {
      //     card.className = "no-rating"; // или добавь текст "Нет рейтинга"
      //   }

      card.append(img, name, priceEl, cat);
      container.append(card);
    });
}

fetchProducts();
