const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCars = cars.map(({ brand, isDiesel }) => ({
  brand,
  isDiesel,
}));

console.log(newCars);

// 2

// const dieselCars = cars.filter((c) => c.isDiesel);
const dieselCars = cars.filter((c) => {
  return c.isDiesel;
});
console.log(dieselCars);

// 3

const notDieselCars = cars.filter((c) => !c.isDiesel);
console.log(notDieselCars);

// 4
const nonDieselTotalPrice = notDieselCars.reduce(
  (acc, car) => acc + car.price,
  0
);
console.log(nonDieselTotalPrice);

// 5

const notDieselCarsV2 = cars.reduce((acc, car) => {
  if (!car.isDiesel) {
    return acc + car.price;
  }
  return acc;
});

const notDieselCarsV3 = cars.reduce(
  (acc, car) => (!car.isDiesel ? acc + car.price : acc),
  0
);
console.log(notDieselCarsV3);

// 5
// let totalCarsPrice = 0;
cars.forEach((car) => {
  car.price *= 1.2;          // повышаем цену
//   totalCarsPrice += car.price; // прибавляем к сумме
});

// console.log("totalCarsPrice:", totalCarsPrice);

// 6
const modernCars = cars.map((car) =>
  car.isDiesel ? { brand: "Tesla", price: 25000, isDiesel: false } : car
);
console.log(modernCars);
