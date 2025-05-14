const word = "1998-hjklw:John";

const notDigit = /[^0-9]/; // если каретка находится внутри квадратных скобок - она обозначает отрицание
const digit = /\d/; // одна цифра
const nondigit = /\D/; // не число

const letter = 9;

console.log(digit.test(letter));
// [0-9] === \d
// [^0-9] === \D

// alphanumeric symbol
// \w === [0-9A-Za-z_]
// \W === [^0-9A-Za-z_] // отрицание

// \s - white space, tab, new line
const fullName = "John Bowie";

const regex2 = /John\sBowie/;
console.log(regex2.test(fullName));

const regex3 = /[A-Z][a-z]{3}\s[A-Z][a-z]{4}/;

console.log(regex3.test(fullName));

// если символ должен быть
const regex4 = /[A-Z][a-z]+\s[A-Z][a-z]+/;
console.log(regex4.test("Al Key")); // true
console.log(regex4.test("A Key")); // false

// символы, которые обозначают количество называются кванторами

// с помощью значка "?" можем обозначать опциональный элемент (0 или 1 вхождение)
const cameraModel = "Canon 5R";
const cameraModel2 = "Canon 5RD";
const cameraModel3 = "Canon 12RD";
const cameraModel4 = "Canon 1200RD"; // NOOO!!!

// сделаем выражение , которое бы подошло код оба варианта
const regex5 = /Canon \d\d?RD?/;

console.log(regex5.test(cameraModel));
console.log(regex5.test(cameraModel2));
console.log(regex5.test(cameraModel3));
console.log(regex5.test(cameraModel4));

// "*" - значит неопределенное количество вхождений - (0 или более)

const regex6 = /\d*/; // 1, 12,15, - ok. "1h" - не подойдет

// Группировка

const text = "I am programmer but you can never say. I am sure";

const regex7 = /(I) (am)/gi;
console.log(text.replace(regex7, `$2 $1`));

const fullNameReg = /([A-Z][a-z]+)\s([A-Z][a-z]+)/g;
const text2 = "I am Alisher Khamidov, I am looking for Eva Dieterle";

console.log(text2.replace(fullNameReg, `$2 $1`));

// const phoneNumber = "0151 52466512";
const phoneNumber = "015152466512";

// +49 (151) 524 662 12

// const phoneRegex = /0(\d{3})\s(\d{3})(\d{3})(\d{2})/;
const phoneRegex = /0(\d{3})\s?(\d{3})(\d{3})(\d{2})/;

const maskedPhone = phoneNumber.replace(phoneRegex, `+49 ($1) $2 $3 $4`);
console.log(maskedPhone);

// Code Wars - решать javascript с 8 уровня. также и на Java
// Leet code - Java, javascript

// input pattern