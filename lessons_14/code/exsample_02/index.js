const cars = [
  { brand: "AMW", price: 20000, isDiesel: true },
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

// reverse - mutable - но возвращает ссылку на исходный массив

const newCars = cars.reverse();

console.log(cars);
console.log(newCars);

// sort

const parts = ["air filter", "tires", "spark plug", "accumulator"];

parts.sort();
console.log(parts); //[ 'accumulator', 'air filter', 'spark plug', 'tires' ]

const nums = [1, 4, 2, 10, 12];

nums.sort();
console.log(nums); // [ 1, 10, 12, 2, 4 ] - отсортировал как строки

// -1, 0, 1
nums.sort((a, b) => b - a);
console.log(nums); // [ 12, 10, 4, 2, 1 ]

parts.sort((a, b) => b.localeCompare(a));
console.log(parts); //[ 'tires', 'spark plug', 'air filter', 'accumulator' ]

cars.sort((a, b) => a.price - b.price);
console.log(cars);

// сравнение по нескольким параметрам
// сначала сравниваем по цене
// если цена совпадает, то сортируем уже по названию

const compareCars = (a, b) => {
  const priceComparisonResult = a.price - b.price;
  if(priceComparisonResult === 0){
    // проверяем по алфавиту
    return a.brand.localeCompare(b.brand)
  }
  return priceComparisonResult
};

cars.sort(compareCars)

console.log(cars);
