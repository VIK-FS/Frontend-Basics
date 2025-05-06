// const drinks = [
//   { name: "Bloody Mary", strength: 14, price: 7 },
//   { name: "Jin", strength: 25, price: 4 },
//   { name: "Beer", strength: 7, price: 3.5 },
//   { name: "Cider", strength: 2, price: 5 },
// ];

// 1. найти индекс джина, заменить Jin на "Tecila".
// 2. сделайте все напитки в массиве крепче на 1 градус

const drinks = [
  { name: "Bloody Mary", strength: 14, price: 7 },
  { name: "Jin", strength: 25, price: 4 },
  { name: "Beer", strength: 7, price: 3.5 },
  { name: "Cider", strength: 2, price: 5 },
  { name: "Beer", strength: 7, price: 5 },
];

// 1. Найти индекс Джина и заменить на "Tecila"
const indexOfJin = drinks.findIndex((drink) => drink.name === "Jin");

console.log(drinks);
drinks.splice(indexOfJin, 1, { ...drinks[indexOfJin], name: "Tecila" }); // удалили по индексу
console.log(drinks);

// 2
drinks.forEach((drink) => drink.strength++);
console.log("StrongereDrinks: ", drinks);


// 3
const totalBeerPrice = drinks.reduce((acc, drink) => {
  if (drink.name === "Beer") {
    return acc + drink.price;
  }
  return acc;
}, 0);

console.log("totalBeerPrice: ", totalBeerPrice);

// filter
// создать новый массив,

const beers = drinks.filter((drink) => drink.name === "Beer");
console.log("beers: ", beers);
