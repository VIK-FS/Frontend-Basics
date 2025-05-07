// Методы массивов в JavaScript
// 🔹 1. Добавление элемента в конец массива
// Задание:
// Создай массив fruits с элементами ["apple", "banana"] . Добавь в конец массива
// строку "orange" с помощью метода push .
// Ожидаемый результат:
// ["apple", "banana", "orange"]

const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); //[ 'apple', 'banana', 'orange' ]

/**
 * 2. Удаление последнего элемента
Задание:
Дан массив numbers = [10, 20, 30, 40] . Удали последний элемент массива с 
помощью метода pop .
Ожидаемый результат:
[10, 20, 30]
 */

const numbers = [10, 20, 30, 40];
numbers.pop(3);
console.log(numbers); //[ 10, 20, 30 ]

/**
 * Задание:
Создай массив colors = ["blue", "green"] . Добавь в начало массива строку "red" с 
помощью метода unshift .

Ожидаемый результат:
["red", "blue", "green"]
 */

const colors = ["blue", "green"];
colors.unshift("red");
console.log(colors); //[ 'red', 'blue', 'green' ]

/**
 * 4. Удаление первого элемента массива
Задание:
Дан массив days = ["Monday", "Tuesday", "Wednesday"] . Удали первый элемент с 
помощью метода shift .
Ожидаемый результат:
["Tuesday", "Wednesday"]
 */

const days = ["Monday", "Tuesday", "Wednesday"];
days.shift(0);
console.log(days); // [ 'Tuesday', 'Wednesday' ]

/**
 * 5. Найди индекс элемента
Задание:
Дан массив cities = ["Paris", "London", "Berlin", "Madrid"] . Найди индекс элемента "Berlin" с 
помощью метода indexOf .
Ожидаемый результат:
2
 */

const cities = ["Paris", "London", "Berlin", "Madrid"];
const idxOfBerlin = cities.indexOf("Berlin");
console.log(idxOfBerlin); //2

/**
 * 6. Проверка наличия элемента
Задание:
Дан массив nums = 1, 2, 3, 4 . Проверь, содержится ли в массиве число 3 с 
помощью метода includes .
Ожидаемый результат:
true
 */

const nums = [1, 2, 3, 4];
const isNumberThree = nums.includes(3);
console.log(isNumberThree); //true

/**
 * 7. Извлечение подмассива
Задание:
Дан массив letters = ["a", "b", "c", "d", "e"] . Получи новый массив из элементов "b", "c", 
"d" с помощью метода slice .
Ожидаемый результат:
["b", "c", "d"]
 */

const letters = ["a", "b", "c", "d", "e"];
const newLetters = letters.slice(1, 4);
console.log(newLetters); //[ 'b', 'c', 'd' ]

/**
 * 8. Удаление элементов с помощью splice
Задание:
Дан массив nums = 5, 10, 15, 20 . Удали один элемент начиная с индекса 1 с 
помощью метода splice .
Ожидаемый результат:
5, 15, 20
 */

const nums1 = [5, 10, 15, 20];
nums1.splice(1, 1);
console.log(nums1); //[ 5, 15, 20 ]

/**
 * Вставка элементов с помощью splice
Задание:
В массив animals = ["cat", "dog"] вставь элемент "parrot" на индекс 1 с помощью 
метода splice .
Ожидаемый результат:
["cat", "parrot", "dog"]
 */

const animals = ["cat", "dog"];
animals.splice(1, 0, "parrot");
console.log(animals); // [ 'cat', 'parrot', 'dog'

/**
 * 10. Сортировка чисел
Задание:
Дан массив numbers = 40, 10, 100, 30 . Отсортируй массив по возрастанию с 
помощью метода sort .
Ожидаемый результат:
10, 30, 40, 100
 */

const numbers1 = [40, 10, 100, 30];
numbers1.sort((a, b) => a - b);
console.log(numbers1); // [ 10, 30, 40, 100 ]

/**
 * 11. Обратный порядок
Задание:
Дан массив arr = 1, 2, 3, 4 . Сделай так, чтобы элементы шли в обратном 
порядке с помощью метода reverse .
Ожидаемый результат:
4, 3, 2, 1
 */

const arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr);

/**
 * 12. Объединение массивов
Задание:

Методы массивов в JavaScript 3


Создай два массива: a = 1, 2 и b = 3, 4 . Объедини их в один массив с 
помощью метода concat .
Ожидаемый результат:
1, 2, 3, 4
 */

const a = [1, 2];
const b = [3, 4];
const ab = a.concat(b);
console.log("ab: ", ab); //[ 1, 2, 3, 4 ]

/**
 * 13. Преобразование массива в строку
Задание:
Дан массив letters = ["a", "b", "c"] . Преобразуй его в строку через дефис с 
помощью метода join .
Ожидаемый результат:
"a-b-c"
 */

const letters1 = ["a", "b", "c"];
const str = letters1.join("-");
console.log(str); // a-b-c

/**
 * 14. Последний индекс элемента
Задание:
Дан массив arr = [1, 2, 3, 2, 1] . Найди последний индекс элемента 2 с помощью 
метода lastIndexOf .
Ожидаемый результат:
3
 */

const arr1 = [1, 2, 3, 2, 1];
const lastIndexOfTwo = arr1.lastIndexOf(2);
console.log(lastIndexOfTwo); // 3

/**
 * 15. Удаление всех элементов через цикл
Задание:
Дан массив arr = [1, 2, 3] . Удали все элементы по одному, используя pop в 
цикле.
Ожидаемый результат:
Пустой массив: []
 */

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = arr2.length - 1; i >= 0; i--) {
  arr2.pop();
}
console.log(arr2); // []

/**
 * 16. Копирование массива
Задание:
Скопируй массив a = [5, 10, 15] в новый массив b с помощью slice .
Ожидаемый результат:

b = 5, 10, 15 (независимая копия)
 */

const a1 = [5, 10, 15];
const b1 = a1.slice(0, 3);
console.log(a1); //[ 5, 10, 15 ]
console.log(b1); // [ 5, 10, 15 ]

/**
 * 7. Сравнение массивов
Задание:
Создай два массива a = [1, 2, 3] и b = a.slice() . Измени b[0] на 99 . Покажи, что a 
не изменился.
Ожидаемый результат:
a = [1, 2, 3] , b = [99, 2, 3]
 */

const a2 = [1, 2, 3];
const b2 = a2.slice();
b2.splice(0, 1, 99);
console.log(a2); // [ 1, 2, 3 ]
console.log(b2); // [ 99, 2, 3 ]

/**
 *  18. Найди сумму чисел
Задание:
Дан массив nums = [10, 20, 30] . Используя цикл, найди сумму всех чисел массива.
Ожидаемый результат:
60
 */
let sum = 0;
const nums2 = [10, 20, 30];
// for (let i = 0; i < nums2.length; i++) {
//   sum += nums2[i];
// }
nums2.forEach(num => sum += num);
// const sum = nums2.reduce((acc, num) => acc + num, 0);

console.log(sum); // 60
