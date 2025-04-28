"use strict";

// 7 примитивов
// Object

const x = 10;
// x=13;

let y, z;
y = 12;

let b = 13;

console.log({ b });

// Operator

// operator, operand
// a + b - binary operator
// !a - унарные операторы
/// a ? b : c; - тернарный оператор

// Math
// +,-,/,*,%,**
// reminder

let sum = 1 + 2;
console.log(sum);
let exmpl2 = "1" + 2;
console.log(exmpl2); // 12

let exmpl3 = true + 4; // under the hood - implicit - true -> 1 , false -> 0
console.log(exmpl3); // 5

let exmpl4 = "a" / 9;
console.log(exmpl4); // NaN

let exmpl5 = "9" - 5; // - вызвал имплицитное преобразование типа  '9' -> 9
console.log(exmpl5); // 4

// let exmpl6 = '9' * 5; // - вызвал имплицитное преобразование типа  '9' -> 9
// console.log(exmpl6); // 4

let exmpl6 = 7 % 3; // 3 +3 + 1/3
console.log(exmpl6);

// 8 % 3 -> 2
// 8 % 4 -> 0

const myAge = 38;
const myAgeIsEven = myAge % 2 === 0; // odd - нечетный, even - четный
console.log(myAgeIsEven);

// const exmpl7 =

// Logical
// || - хотя бы один операнд истина
// && - оба истинны
// ! - отрицание

let exmpl8 = true && false; // false
let exmpl9 = true && false; // false
let exmpl10 = !!true; // true

// более сложные примеры
let exmpl11 = !!5; // true
let exmpl12 = !!0; // false
console.log(exmpl11);
console.log(exmpl12);
let exmpl13 = Boolean(5);

// c || - интересный случай

const myName = "Vitalii";
const defaultName = "John";

const result = myName || defaultName;
console.log(result);

const userAge = undefined;
const age = userAge || 18;
console.log(age); // если eserAge не указан, то age будет 18

let a = Infinity;
console.log(a);

// операторы сравнения
// >, <, >=, <=

console.log(6 > NaN); // false
console.log(NaN > NaN); // false

// Равенство
// == -нестрогим равенством = loose equality
// === - строгое равно = strict equality

console.log("5" == 5); // true - если типы различаются
// - пробует сделать привидение типов, и сравнить еще раз

console.log("5" == 5); // false - строгое равенство - если разные типы
// - то дальше не идет и возвращает false

console.log("Hello" === true); // false
console.log("Hello" == true); // false
console.log("true" == true); // false
console.log(String(true)); // true
console.log(Number("Hello")); // NaN
console.log(Number(true)); // 1
// 1 === NaN - после преобразования

console.log("9" == 9); // true
console.log(Number("9"));
console.log("9" + 3 == 12); // '93' --> 93 === 12 // false
// исключение
console.log(undefined == null); // true
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

//  != - не строгое с привидением типов
// !== - строгое неравенство = unequality
