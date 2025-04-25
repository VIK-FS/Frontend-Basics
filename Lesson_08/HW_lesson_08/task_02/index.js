/**
Задача 2
Объявите две переменные с разными именами и присвойте им значения:

количество котов (какое-то число)
"Я не кошатник"
В случае если количество котов равно нулю, должна выводиться фраза из второй переменной.

Выведите значения переменных в консоль.
*/
const catsQty = 0;
const me = "I am not a cat person";

// if (!catsQty) {
//   console.log(me);
// }

if (catsQty === 0) {
  console.log(me);
}

console.log(`The value of the variable "catsQty" is ${catsQty}`);
console.log(`The value of the variable "me" is ${me}`);
