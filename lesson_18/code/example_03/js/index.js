// HTTP
// status

// method - метод
// GET - получение информации
// POST - создать какой-то ресурс
// DELETE - удалить ресурс

// Структура запроса:
// url
// https://www.amazon.de/new-releases?ref_=nav_cs_newreleases
// протокол соедениения                   https
// домен                                  www.amazon.de
// путь path                              /new-releases
// параметры запроса, query params        ?category=cars&max=12000

// по умолчаню фетч делает GET запрос
function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.products[0]);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProducts();

function fetchProductById(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProductById(2);

// POST
//

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  body: JSON.stringify({ username: "emilys", password: "emilyspass" }),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
