/**Задание 1
Создайте метод который принимает массив и возврашает новый! массив с теми же данными,
но первый и последний элементы в массиве должны быть поменяны местами.

Исходный массив должен остаться неизмененным после вызова метода.
 */

function swapFirstLastElements(array) {
  if (array.length < 2) return array;
  const copyArray = [...array];
  let temp = array[0];
  copyArray[0] = copyArray[copyArray.length - 1];
  copyArray[copyArray.length - 1] = temp;
  return copyArray;
}

originalArray = [45, "Vitaliy", "Brown", 56, "89"];
console.log("originalArray:", originalArray);

console.log("copyArray:    ", swapFirstLastElements(originalArray));
