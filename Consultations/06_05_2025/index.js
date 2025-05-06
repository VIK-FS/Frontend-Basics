// создание объекта

const student = {
  age: 22,
  name: "Вася",
};

// пример 2
// если ключ имеет пробелы- его нужно обернуть в кавычки

const product = {
  title: "iphone",
  price: 2000,
  "molel of phone": "XR",
};

// получить значение по ключу
console.log(product.price);
console.log(product["molel of phone"]);

// положить значение по ключу
product.diagonal = 6.5;
product["type of adapter"] = "USB-C";
console.log(product);

// Пример 3
// Если у нас есть переменная и мы хотим доставать
// значения из объекта по этой переменной

let key = "age";
console.log(student[key]);
key = "name";
console.log(student[key]);

// 4
const title = "Titanic";
const capacity = "1500";

const titanic = {
  title,
  capacity,
};
console.log(titanic);

// 5
const name1 = "Avrora";
const cap = "300";

// хочу изменить объект из этих 

const avrora = {
    title: name1, 
    capacity: cap
}
console.log(avrora);
