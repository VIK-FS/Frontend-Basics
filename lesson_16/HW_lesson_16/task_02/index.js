/**
 * Задание 2 : Замена слова в строке
🎯 Цель:
Научиться использовать string.replace() с регулярными выражениями и флагами g и i.

📘 Условие:
У вас есть строка:

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";

Замените все вхождения слова "javascript", независимо от регистра, на слово "TypeScript".

🔍 Ожидаемый результат:
"TypeScript is great. I love TypeScript. TypeScript is everywhere!"
 */

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";

console.log(sentence.replace(/javascript/gi, "TypeScript"));