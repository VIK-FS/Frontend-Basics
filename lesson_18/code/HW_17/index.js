/**
 * Homework (опциональное)
📘 Задание 1 — Форматирование строки
Создайте функцию, которая принимает строку в формате вида "1333.132.123 00" — числа могут быть любыми, но структура такая же: три группы, разделённые точками и пробелом.

Цель: преобразовать строку к следующему формату: 📌 "1333 132:123-00"

💡 Пример:
function formatString(input) {
    // Ваша реализация здесь
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"
*/

function formatString(input) {
  // Ваша реализация здесь
  const regex = /(\d{4}).(\d{3}).(\d{3})\s(\d{2})/;
  return input.replace(regex, `$1 $2:$3-$4`);
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"

// Task 2

/**
 * Задание 2 — Промис с рандомной ошибкой
Создайте Promise, который с одинаковой вероятностью (50/50):

либо возвращает строку "Best day of my life"
либо выбрасывает ошибку с сообщением "Something is off"
Затем обработайте результат с помощью .then() и .catch().
 */

const dayMoto = new Promise(function (resolve, reject) {
  const random = Math.floor(Math.random() * 2);
  if (random) {
    resolve("Best day of my life");
  }
  reject(new Error("Something is off"));
});

dayMoto
  .then((moto) => {
    console.log(moto);
  })
  .catch((err) => {
    console.log(err.message);
  });
