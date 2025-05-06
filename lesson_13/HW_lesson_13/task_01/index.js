/**
 * Задание 1
У вас есть массив объектов:
const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];


Создайте на основе старого массива новый массив объектов по образу:
[{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
 */

// Задание 1
// Создайте на основе старого массива новый массив объектов по образу:
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const brandAndIsDiesel = cars.map((car) => ({
  brand: car.brand,
  isDiesel: car.isDiesel,
}));
console.log(brandAndIsDiesel);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const dieselCars = cars.filter((car) => car.isDiesel);
console.log("DieselCars:", dieselCars);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const petrolCars = cars.filter((car) => !car.isDiesel);
console.log("PetrolCars:", petrolCars);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.
const costPetrolCars = petrolCars
  // .filter((car) => !car.isDiesel)
  .map((petrolCar) => petrolCar.price) //получили массив цен
  .reduce((acc, price) => acc + price, 0);
console.log("CostPetrolCars:", costPetrolCars);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.

cars.forEach((car) => (car.price += car.price * 0.2));
console.log("cars: ", cars);

// Задание 6
// Создайте новый массив, где все дизельные машины
// заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const swapDieselCars = cars.map((car) => {
  if (car.isDiesel) {
    return { brand: "Tesla", price: 25000, isDiesel: false };
  }
  return car;
});

console.log("SwapDieselCars: ", swapDieselCars);
