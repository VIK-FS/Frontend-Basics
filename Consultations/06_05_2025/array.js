const brothers = [
  { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
  { race: "human", height: 185, age: 46, name: "Aragorn" },
  { race: "elf", height: 189, age: 110, name: "Legolas" },
  { race: "dworf", height: 140, age: 150, name: "Gimly" },
  { race: "human", height: 195, age: 200, name: "Gandalf" },
];

// 1
const names = brothers.map((element) => element.name);
console.log(names);

// console.log(brothers);

const ages = brothers.map((brother) => brother.age);
console.log(ages);

// 3
const racesNames = brothers.map((brother) => brother.race + " " + brother.name);
console.log(racesNames);

//Пример 4
// высокий - выше или равно 170
// маленький - ниже 170
// массив из слов [маленький, высокий,высокий, маленький,высокий]

const sizes = brothers.map((brother) => {
  if (brother.height >= 170) {
    return "Высокий";
  }
  return "Маленький";
});

console.log(sizes);

// ForEach - изменение исходного массива
// 5
// состарить на 1 год

brothers.forEach((brother) => (brother.age += 1));
console.log(brothers);

//7
brothers.forEach((brother) => (brother.name = brother.name.toUpperCase()));
console.log(brothers);

// 8
// 3 метода reduce
// c помощью цикла for

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

console.log(sum);

// 9
const sum2 = ages.reduce((acc, current) => acc + current, 0);
console.log(sum2);
// Аккумулятор (accumulator) - значение,
// которое накапливает результат применения функции.
// Текущий элемент массива (currentValue).
// Текущий индекс (currentIndex) элемента в массиве.
// Сам массив (array), к которому применяется метод reduce.
// Функция callback должна возвращать новое значение аккумулятора
// после обработки текущего элемента.

// initialValue (необязательный): Начальное значение аккумулятора.
// Если это значение указано,
//  то оно будет использовано в качестве начального значения аккумулятора
// при первом вызове функции callback.
// Если initialValue не указан, то первый элемент массива станет
// начальным значением аккумулятора.

// Комбинация map+reduce
// общая высота наших героев
const totalHeight = brothers.reduce((acc, brother) => acc + brother.height, 0);
console.log(totalHeight); // 819

// можно сделать цепочку
const totalHeight2 = brothers
  .map((brother) => brother.height) //получили массив ростов
  .reduce((acc, height) => acc + height, 0);
console.log(totalHeight2); // 819

// 12
// split разделяет строку на массив

const str = "Gandalf, Sauron, Sarunam, Legolas, Elrond";
const namesArr = str.split(","); // метод принимает разделитель
console.log(namesArr);

// 13
// join

const newString = namesArr.join();
console.log(newString);

// 14
// find - возвращает первое совпадение с заданным условием

const person = brothers.find((brother) => brother.race === "human");
console.log(person);

const person2 = brothers.find((brother) => brother.name === "Aragorn");
console.log(person2);

// Пример 16
// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)
//Выбрать тех кто старше 100 лет

const oldBrothers = brothers.filter((brother)=> brother.age > 100 && brother.race !== "human")
console.log("oldBrothers: ",oldBrothers);





