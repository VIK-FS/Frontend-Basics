// Array.prototype

// push, pop, shift, unshift
const fruits = ["apple", "orange", "grape"];
console.log(fruits.at(0));
console.log(fruits.at(-1));

//map
// создает новый массив и не мутирует исходный
const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsUpper);

const fruitLengthes = fruits.map((fruit) => fruit.length);
console.log(fruitLengthes); // [ 5, 6, 5 ]

// pipeline
// [ "5", "6","5" ]

const strArr = fruits.map((fruit) => fruit.length.toString());
console.log(strArr);

// примет использования с массивами объектов

const animals = [
  { name: "Po", specie: "panda", weight: 300 },
  { name: "Tigrica", specie: "tiger", weight: 250 },
  { name: "Kovalsky", specie: "penguin", weight: 5 },
  { name: "Melman", specie: "giraffe", weight: 600 },
];

// хочу назвать массив с более толстыми версиями этих животных

// const americanAnimals = animals.map((animal) => {
//   const americanAnimal = { ...animal };
//   americanAnimal.weight *= 1.3;
//   return americanAnimal;
// });

const americanAnimals = animals.map((animal) => ({
  ...animal,
  weight: animal.weight * 1.3,
}));

const foo1 = (a) => {
  return a;
};
const foo2 = (a) => a;

console.log(animals);
console.log(americanAnimals);

const animalsNames = animals.map((animal) => animal.name);
console.log(animalsNames); //[ 'Po', 'Tigrica', 'Kovalsky', 'Melman' ]

// Если мы хотим изменить исходный массив - элементы в нем, то лучше воспользоваться
// методом  forEach
// метод можно использовать, чтобы выполнить операции с каждым из элементов

// добавим в каждый объект исходоного массива новое поле
// то есть мутируем каждое животное
// isIll false

animals.forEach((animal) => {
  animal.isHealthy = true;
});

console.log(animals); // //{ name: 'Po', specie: 'panda', weight: 300, isHealthy: true },

// reduce
//
// грузоподъемнось автобуса 2500 кг

let acc = 0;
for (let i = 0; i < animals.length; i++) {
  acc += animals.at(i).weight;
}

console.log(acc);

const totalWeight = animals.reduce((acc, current) => acc + current.weight, 0);

// acc 0 current 300 = 0 + 300
// acc 300 current 250 = 300 + 250
//
console.log(totalWeight);

const dishes = [
  { name: "bamboo", calories: 500 },
  { name: "meat", calories: 1600 },
  { name: "fish", calories: 1000 },
];

const totalCalories = dishes.reduce(
  (acc, current) => acc + current.calories,
  0
);
console.log(totalCalories);

//
// let acc1 = 0;

// const dishes = [
//     {name: "bamboo", calories: 500},
//     {name: "meat", calories: 1600},
//     {name: "fish", calories: 1000},
// ];

// const updatedDishes = dishes.map(dish => ({
//     ...dish,
//     calories: dish.name === "meat" ? dish.calories * 3 : dish.calories,
// }));

const totalCalories1 = dishes.reduce(
  (acc, dish) =>
    acc + (dish.name === "meat" ? dish.calories * 3 : dish.calories),
  0
);

// console.log(totalCalories); // 3100

// const totalCaloriesMitMeat = updatedDishes.reduce((acc, current) => acc + current.calories, 0);

// console.log(totalCaloriesMitMeat);   // 6300
console.log(totalCalories1);

// join

const fruitsCoctail = fruits.join("-");
console.log(fruitsCoctail); //apple-orange-grape

// split
const ensurance = "123.128.12412312";
const numsAsStrings = ensurance.split("."); // dilimeter - разделитель - символ, который отделяет друг от друга
console.log(numsAsStrings); // [ '123', '128', '12412312' ]

const nums = numsAsStrings.map((element) => Number(element));
console.log(nums);

// Пингвин заболел
// найти и заразить
animals.forEach((animal) => {
  if (animal.specie === "penguin") {
    animal.isHealthy = false;
  }
});

console.log(animals);

//к нам пришла инспекция
// ест ли больные

const isQuaranteen = animals.some((animal) => animals.isHealthy === false);
console.log("isQuaranteen:", isQuaranteen);

// болеют ли все животные?
const isEmidemy = animals.some((animal) => animals.isHealthy === false);
console.log("isEmidemy:", isEmidemy);

// hasKiller
let hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);
console.log(hasKiller);
// к нам забрался киллер
animals.push({ name: "Killer", specie: "tiger", weight: 400 });

// снова проеверим его наличие
hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);

console.log(hasKiller);
console.log(animals);

// как найти
// find
// животное с именем
const killer = animals.find((animal) => animal.name === "Killer");
console.log(killer);

// как найти индекс элемента удовлетворяющих условию
const indexOfKiller = animals.findIndex((animal) => animal.name === "Killer");
console.log(indexOfKiller);

const indexOfPanda = animals.lastIndexOf((animal) => (animal.name = "Po"));

// slice
// создает копию из исходного массива. указываем с какого по какой
// первый парамент показывает начало - включительно
// второй - не включительно , можно не указывать
// третий - необязательный параметр
const shortOfAnimals = animals.slice(2, 4);

console.log(animals); //
console.log(shortOfAnimals);

// splice
// mutable

const months = ["January", "February", "March", "April"];
// можно указать элементы, которые мы хотим подставить вместо вырезанного куска
//
const removedMonths = months.splice(2, 2, "July", "August"); //

console.log(months);
console.log(removedMonths); //[ 'March', 'April' ]

const chars = ["@", "@", "@", "*", "*", "$"];
// "*" заменить на "#"
const substitutes = ["#", "#"];
chars.splice(3, 2, ...substitutes);
console.log(chars);

// findIndex, splice

animals.splice(indexOfKiller, 1);
console.log(animals);

//

