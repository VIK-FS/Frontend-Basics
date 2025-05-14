/**
     * Homework (опициональное)
📘 Задание 1
Прочитайте теоретический материал в разделе "Теория".
Создайте метод validate, который принимает строку и возвращает true, если она соответствует следующему шаблону:
начинается с одной маленькой буквы латинского алфавита (a–z);
затем идёт число 19;
далее — две любые цифры (00–99);
строка должна **заканчиваться на "born"`.
🧪 Примеры:
validate("c1986born"); // true
validate("b1988born"); // true
validate("1986born"); // false — нет начальной буквы
validate("c1886born"); // false — не 19XX
validate("c1986bor"); // false — не заканчивается на 'born'
     */

function validate(word) {
  const regex = /^[a-z]19[0-9]{2}born$/;
  //   if (word.match(regex)) {
  //     return true;
  //   }
  //   return false;
  return regex.test(word);
}

console.log(validate("c1986born"));; // true
console.log(validate("b1988born"));; // true
console.log(validate("1986born"));; // false — нет начальной буквы
console.log(validate("c1886born"));; // false — не 19XX
console.log(validate("c1986bor"));; // false — не заканчивается на 'born'

/**
 * Задание 2 : Замена слова в строке
🎯 Цель:
Научиться использовать string.replace() с регулярными выражениями и флагами g и i.

📘 Условие:
У вас есть строка:

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";

Замените все вхождения слова "javascript", независимо от регистра, на слово "TypeScript".

🔍 Ожидаемый результат:
"TypeScript is great. I love TypeScript. TypeScript is everywhere!"
 */

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";

console.log(sentence.replace(/javascript/gi, "TypeScript"));

