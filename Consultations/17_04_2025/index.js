//
//

let dog = "Sharik";
dog = "Tuzik";
dog = 12;
console.log("dog: ", dog);

// примитивные типы данных
// 1.

let str1 = "Можно в двойных";
let str2 = "Можно в одинарных";

let str3 = "13"; //  это стринг
let str4 = str1 + " " + str2;
console.log(str4);
console.log(str1.toUpperCase()); // перевод в верхний регистр

// 2. число
let num1 = 9;
let num2 = 9.6;

// 3. bigInt
let num3 = 1239n; // больший диапазон, чем у number

// 4. boolean

let isDrunk = true;
// условная конструкция
if (isDrunk) {
  console.log("Ты пьян");
}
const result = isDrunk ? "Ты пьян" : "Ты не пьян";

//.5 undefined

let str5;
str5 = 12;
console.log(str5);

// 6. null
// null - отсутствие значения
// document.getElementById("несуществующий id")---> null
// Можно присвоить null вручную

let empty = null;
console.log(empty);

// .7 symbol
// Новый тип,раньше его не было и сейчас остается малопопулярным
// Используется для создания уникальных значений внутри программы
let s1 = Symbol("something");
console.log(s1);

console.log(typeof s1);

// преобразование типов
// 1. преобразование в строку
// неявное преобразование

let str7 = "" + 9;
console.log("str7: ", str7);

// явное преобразование
const num4 = 10;
let str8 = String(num4); // "10"

//  пример
const res = 9 + 12 + "5"; // "21"+"5" = 215
console.log("res: ", res);
const res2 = "5" + 9 + 12; // "21"+"5" = 215
console.log("res: ", res2);

// неявное
const num5 = +"6"; // число 6
const sum = +"9" + +"10"; //
console.log(sum);

// Явное преобразование
const num6 = Number("117"); // число 117
const num7 = Number("129*&#"); // NaN - not a number появляетсся при неудачном преобразовании
// или неудачной математической операции
console.log(typeof num6);
console.log(typeof num7);

// 3. Преобразование в булевое значение
// Число в булевое значение
const res4 = Boolean(9); // TRUE
const res5 = Boolean(); // FALSE
console.log(res5);
// преобразование строки в булевое значение
const res6 = Boolean(""); // FALSE
const res7 = Boolean(" "); // TRUE
console.log(res7);
const res8 = Boolean(null); // FALSE
console.log(res8); // FALSE
const res9 = Boolean(undefined); // FALSE
console.log(res9); // FALSE

// Равенство строгое и нестрогое
// = - присвоение
// === - строгое равенство
// == - не строгое равенство

console.log(9 === "9"); // false
console.log(9 == "9"); // true

const b = ("b" + "a" + +"a" + "a").toLowerCase();

const student = { age: 22 };
console.log("student: ", student);
const student1 = [age, 22]  ;
