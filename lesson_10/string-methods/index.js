let fruit = "apple";

let friutUpper = fruit.toUpperCase();
console.log(friutUpper); // APPLE

console.log(fruit[0]); // a
console.log(fruit.at(0)); // a

console.log(fruit[10]); // undefined // box natation == syntax
console.log(fruit.at(10)); // undefined

console.log(fruit.toUpperCase().toLowerCase()); // apple // pipeline

console.log("0".toLowerCase());
console.log("A".toLowerCase());

console.log(fruit.charAt(5), "char at"); // пустой символ

console.log(fruit.charCodeAt(0)); // 97

// usefull
// "pine" + "apple"
// concat - для объединения двух строк

const pine = "pine";
if (pine) {
  const pineapple = pine.concat(null);
  console.log(pineapple);
}

const email = " john@mail.coM ";
console.log(email);
// trim leading - слева and trailing - в конце строки
console.log(email.trim().toLowerCase());
console.log(email.indexOf("@"));
console.log(email.indexOf("$"));

console.log(email.trimStart()); // John@mail.com
console.log(email.trimEnd()); // John@mail.coM

// pad

const cake = "Cake";
console.log(cake.padStart(10));
console.log(cake.length);
console.log(cake.padStart(10).length);
console.log(cake.padEnd(10, "*"));

// slice
const sliceOfCake = cake.slice(10);
console.log(sliceOfCake);
console.log(cake.slice(0)); // Cake
console.log(cake.slice(1)); // ake

console.log(cake.slice(1, 3)); // ak -> правый индекс не включительно
console.log(cake.slice(-2)); // ak -> правый индекс не включительно
console.log("курочка".slice(-2));
console.log("улыбочка".slice(-2));

// substring
const animal = "panda";
console.log(animal.substring(2)); // nda, если указываем
console.log(animal.slice(2)); // nda

//

// console.log('Null' , typeof(null));
// console.log('undefined' , typeof(undefined));
// console.log('Number' , typeof(number));
// console.log('String' , typeof(string));
// console.log('NaN' , typeof(NaN));
// console.log('Boolean' , typeof(boolean));
// console.log('Infinity' , typeof(Infinity));

console.log(animal.substring(2, 4)); // nd

console.log("курочка".substring(-2)); // курочка
// Вывод: slice удобнее / можно работать с отрицательными индексами

const token = "paper.bread.leaf";
const indexOfFirstDot = token.indexOf(".");
const indexOfLastDot = token.lastIndexOf("."); // чтобы найти индекс элемента справа
console.log(indexOfFirstDot);
console.log(indexOfLastDot);

// напишем метод который принимает email и возращает имя пользователя
// то есть все что идет до значка собачки
// getNameFromEmail
// "alisher-khamidov@gmail.com" --> alisher-khamidov

// function getNameFromEmail(email) {
//     // Убираем пробелы с начала и конца строки
//     const trimmedEmail = email.trim();

//     // Находим индекс символа "@"
//     const atIndex = trimmedEmail.indexOf("@");

//     // Если символ "@" не найден, возвращаем ошибку
//     if (atIndex === -1) {
//       return "Некорректный email";
//     }

//     // Возвращаем часть строки до "@"
//     return trimmedEmail.substring(0, atIndex);
//   }

//   console.log(getNameFromEmail("  alisher-khamidov@gmail.com  "));

function getNameFromEmail(email) {
  const atIndex = email.indexOf("@");
  if (atIndex < 0) {
    throw new Error("Invalid email");
  }
  return email.slice(0, atIndex).trimStart();
}

// console.log(getNameFromEmail(""));

try {
  console.log(getNameFromEmail("alisher-khamidov@gmail.com"));
  console.log(getNameFromEmail("alisher-khamidovgmail.com"));
  console.log("До этого кода мы не дойдем");
} catch (error) {
  console.error(error);
}

console.log('Дальше');
