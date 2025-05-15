const heading = document.getElementById("heading");
const imgPirate = document.getElementById("pirate-picture");
const favDrinkElement = document.getElementById("fav-drink");
const parrotsContainer = document.getElementById("parrots-container");

fetch("https://vik-fs.github.io/fake-pirate/joe-sparrow.json")
  // Promise<res>
  //   .then((res) => res.json())
  .then((res) => {
    //     console.log(res.status);
    //     console.log(res.ok);
    if (res.status === 404) {
      throw new Error("Custom not found message");
    }

    //
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
    // return res.text();
    // console.log(res);
  })

  .then((data) => {
    console.log(data); // обязательно посмотрите чем является тело ответа
    const { name, url, favouriteDrink, parrots } = data;
    heading.innerText = name;
    imgPirate.src = url;
    imgPirate.style.width = "200px";
    favDrinkElement.innerText = favouriteDrink;
    
    parrots.forEach((parrot) => {
      const parrotCard = document.createElement("li");
      parrotCard.innerText = parrot.name;
      parrotsContainer.appendChild(parrotCard);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

// method: GET
// создать - метод POST

// HTTP - протокол клиент-серверного взаимодействия
// Статусы:
// 200 - Success - успех - получили ответ
// 400 - Bad request
// 401 - Not Authorized -
// 403 - Access Denied - доступ запрещен
// 404 - Not found
// 500 - Server error

// 200-299 - положительные статусы
// 300-400 - редирект
// 400-500 - ошибки

// // Отправляем HTTP-запрос по указанному URL с помощью fetch()
// fetch("https://vik-fs.github.io/fake-pirate/joe-sparrow.json")

//   // Когда ответ получен, преобразуем его в JSON-формат
//   .then((res) => res.json())

//   // Когда JSON успешно распарсен, выводим результат в консоль
//   .then((res) => {
//     console.log(res);
//   });

/**
  🧠 Краткое пояснение:
  fetch(...) — встроенная функция для запросов к серверу.
  
  .then((res) => res.json()) — преобразует ответ от сервера в формат JavaScript-объекта.
  
  .then((res) => {...}) — выполняется после успешного преобразования, 
  и в res уже обычный объект, с которым можно работать.
  */
