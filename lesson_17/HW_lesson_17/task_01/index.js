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
  return input.replace(/^(\d+)\.(\d+)\.(\d+) (\d+)$/, "$1 $2:$3-$4");
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"

/**
function formatString2(input) {
  const [part1, part2, rest] = input.split(".");
  const [part3, part4] = rest.split(" ");

  return `${part1} ${part2}:${part3}-${part4}`;
}

const result2 = formatString2("1333.132.123 00");
console.log(result2); // "1333 132:123-00"
 */
