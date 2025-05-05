/**
 * Задание 2
🍏 Создайте метод, который принимает массив стрингов и еще один параметр типа стринг prefix.
Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива,
слева к которым присоединен префикс.

Исходный массив должен остаться неизменным.

Пример: ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]
 */

const arr = ["apple", "orange", "banana"];
const prefix = "pine";

function prefixPlusArrElement(array, prefix) {
  const copyArray = [];
  for (let i = 0; i < array.length; i++) {
    copyArray[i] = prefix + array[i];
  }
  return copyArray;
}

console.log("SourceArray: ", arr);
console.log("OutputArray: ", prefixPlusArrElement(arr, prefix));
console.log("SourceArray: ", arr);
