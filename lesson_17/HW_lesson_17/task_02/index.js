/**
 * Задание 2 — Промис с рандомной ошибкой
Создайте Promise, который с одинаковой вероятностью (50/50):

либо возвращает строку "Best day of my life"
либо выбрасывает ошибку с сообщением "Something is off"
Затем обработайте результат с помощью .then() и .catch().
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const rand = getRandomNumber(2);

const printerPresent = new Promise(function (res, rej) {
  setTimeout(() => {
    if (rand) {
    //   console.log("Блок if", rand);
      res("Best day of my life");
    } else {
    //   console.log("Блок else", rand);
      rej(new Error("Something is off"));
    }
  }, 2000);
});

printerPresent
  .then((present) => {
    console.log(present);
  })
  .catch((err) => {
    console.log(err.message);
  });
