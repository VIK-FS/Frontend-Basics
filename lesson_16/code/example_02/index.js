// Regular expressions
// RegExp

// Найти фрагмент строки, подходящий под описание
// Можем все вхождения на какую-нибудь другую строку
// Проверить ли соответвует ли строка шаблону - валидации

const text1 = "Hello, Alisher! oh, Anna, you are also here, well hello there!";

console.log(text1.match(/Hello/));
console.log(text1.replace(/Hello/, "Good day"));

// без флага только первое вхождение
// Что такое флаги? i, g
const text2 = "Apple Orange apple orange Apple Orange apple orange";
const newText2 = text2.replace(/apple/, "banana");
console.log(newText2);

//
console.log(text2.replace(/apple/g, "banana"));
// флаг i делает нечуствительным к регистру
// banana Orange banana orange banana Orange banana orange
console.log(text2.replace(/apple/gi, "banana"));

// хочу проверить что выражение состоит  из буквы и нескольких чисел
// а87
// b675
// c99

// x88y - нет

const code = "Cakea87";

console.log(code.match(/.87/)); // точка соответствует любому символу - метасимвол

// проверим начинается ли выражиние со слова Cake
console.log(code.match(/^Cake/)); // каретка ^ - обозначает начало строки

const example = "Hello, John!";
console.log(example.match(/^John/)); // null - в начале строки нет указанного выражения

// мы можем проверить заканчивается ли слово в конце строки?
// для этого мы воспользуемся $
console.log(example.match(/John!$/));

// Хочу проверить, что выражение из четырех символов начиналось
// на t и заканчивалось на 8

const example2 = "tuh8"; // должно проходить
const example3 = "tuh9"; //

console.log(example2.match(/^t..8$/));
console.log(example3.match(/^t..8$/));

// если нужно найти точку как знак препинания
// aaa.aaa.aaa

const example4 = "aaa.aaa.aaa";
// экранировать точку с помощью обратного слэша
// другие спецсимволы тоже придется экранироватт
console.log(/aaa\.aaa\.aaa/);

// Как обозначить буквенные символы

// Хочу чтобы слово начиналось с букв h, l или b?
// hate, late, bate - ok
// wate - не ok

const example5 = "hate"
console.log(example5.match(/[hlb]ate/));
console.log("wate".match(/[hlb]ate/)); // null

// слово должно начинаться на букву F дальше 
// на втором месте должна быть буква а или цифра 6 
// на третьем месте может быть любой символ 
// слово должно 
const word = "F6mv" // ok

console.log(word.match(/^F[a6].[a-z]$/));