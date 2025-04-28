//
// if

let age = 24;
if (age > 21) {
  console.log("You can buy alcohol");
} else {
  console.log("You can not buy alcohol");
}

if (age > 21) {
  console.log("You can buy alcohol");
} else if (age === 1) {
  console.log("Milk is the best option for you");
} else {
  console.log("You can not buy alcohol");
}

// switch

const country = "Iran";
switch (country) {
  case "UK":
    console.log("London");
    break;
  case "USA":
    console.log("Washingnot DC");
    break;
  default:
    console.log("Country is unknown");
}

// maAge
// switch
// если myAge 1 year - "малыш"
// если myAge 2 year - "ползунок"
// если myAge 5 year - "дошкольник"
// если myAge 16 year - "подросток"
// если myAge 45 year - "зрелый"

const myAge = 5;

switch (myAge) {
  case 1:
    console.log("малыш");
    break;
  case 2:
    console.log("ползунок");
    break;
  case 5:
    console.log("дошкольник");
    break;
  case 16:
    console.log("подросток");
    break;
  case 45:
    console.log("зрелый");
    break;
  default:
    console.log("Возраст вне заданных категорий");
}

console.log(12 - 3 + true + "12" + Boolean(NaN));
// 9 + true
// 9 + 1 + "12" + Boolean(NaN)
// 10 + "12" + Boolean(NaN)
// "1012" + Boolean(NaN)
// "1012" + false
// "1012" + "false"
// "1012false"

// функции
// кусок

function neighbour(time) {
  if (time > 0 && time < 8) console.log("1Drr-drr-drr-drr-drr");
  return "Drr-drr-drr-drr-drr1";
}

neighbour(); // вызов функции - call
neighbour(); // вызов функции - call

const result = neighbour(5); // вызов функции - call
console.log(result); // "Drr-drr-drr-drr-drr"

{
  const animal = "Panda";
}
// console.log(animal);

{
  var x = 10;
}
console.log(x);
