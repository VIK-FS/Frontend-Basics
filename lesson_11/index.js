// const numbers = [1, 2, 3, 4, 5, 6, 7]
//     const copyArray = [...numbers]
//     // [1, 7] = [7, 1];
//     [copyArray[0], copyArray[copyArray.length-1]] = [copyArray[copyArray.length-1], copyArray[0]]
// console.log(copyArray);

// destructuring assignment of array
// const numbers = [1, 7, 3, 6, 5, 6];

// destructuring assignment of array
const numbers = [1, 7, 3, 6, 5, 6];

const [, seven] = numbers;
console.log(seven);

// destructuring assignment of object
const admin = {
  email: "admin@gmail.com",
  age: 24,
  firstName: "Administrina",
  secondName: "Tiranikus",
};

// const email = admin.email; // старый

const { age, secondName } = admin;
console.log(age, secondName);

const catPerson = {
  name: "Annamay",
  cats: ["Tom", "Garfield", "Barsik"],
};

console.log(catPerson);

// const { cats } = catPerson;
// console.log(cats);
// const [, garfield] = cats;
// console.log(garfield);

const {
  cats: [, garfield],
} = catPerson;
console.log(garfield);

const arr = [[1, 2, 3], ["Igor", "John", "Bob"], { isDrunk: true }];

// 2, John, isDrunk
// получить в отдельные переменные
const [[, secondNumber], [, john], { isDrunk }] = arr;

console.log(secondNumber, john, isDrunk);

// Создайте метод который принимает массив строк, ничего!! не возвращает.
// Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.

// ["apple", "orange"] ---> ["Apple", "orange"]

function capitalize(word) {
  if (word && word.length > 2) {
    return word.at(0).toUpperCase() + word.slice(1);
  } else {
    throw new Error("Invalid argument");
  }
}

function capitalizeFirstElement(arr) {
  if (arr.length) {
    arr[0] = capitalize(arr[0]);
  }
}

const fruits = ["asd", "asdasdsa"];
capitalizeFirstElement(fruits);
console.log(fruits);