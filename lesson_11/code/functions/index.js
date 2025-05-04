// call
sayHi();
// hosting = поднятие
// когда вызов может быть раньше в коде, чем сама декларация функции

// functional declaration
function sayHi() {
  console.log("Hi");
}

console.log(x); //hosting var без инициализации - только объявление
var x = 10;
// const и let так не работают!

//Function expression
let y = 1;
const sayGoodbye = function () {
  console.log("Bye bye");
};

sayGoodbye();

//
function butler(action) {
  action();
}

butler(sayHi);
butler(sayGoodbye);

// сосед
function neighbour(action, thing) {
  action(thing);
}

const party = function (track) {
  console.log("tuc-tuc-tuc " + track);
};

const drill = function (item) {
  console.log("I drill " + item);
};

neighbour(party, "Britney Spears");
neighbour(party, "Alabama Snecks");
neighbour(party, "Ramstein");
neighbour(drill, "wall");

// пример калькулятор
// calculator (add, 9,7)
// calculator (devide, 12,4)

function calculator(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}
function devide(a, b) {
  return a / b;
}

console.log(calculator(add, 9, 7));
console.log(calculator(devide, 12, 4));

// anonymous function

const res = calculator(
  function (a, b) {
    return a - b;
  },
  9,
  4
);
console.log(res);

const res2 = calculator((a, b) => a - b, 9, 4);
console.log('res: ',res);

// arrow function
// умножение

const multyply = (a, b) => a * b; // стрелочная функция без тела
const multyply2 = (a, b) => {
  // стрелочная функция с телом
  return a * b;
};

// стрелочная функция, которую передали в качестве параметра в другую функцию наз callback
// возведение в степень

const  power   = (a, b) => a ** b;
const twoInPowerOfTree = calculator(power, 2, 3);
console.log(twoInPowerOfTree); // 8

/// pirate

function pirate(operation, item) {
  operation(item);
}

const drinkSmth = (a) => {
  console.log("I drink " + a);
};

const swim = (vehicle) => {
  console.log("I roam seas in my " + vehicle);
};

pirate(swim, "ship");
pirate(drinkSmth, "rom");
pirate(swim, "barrel");
pirate(drinkSmth, "water");
