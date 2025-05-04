for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 100; i >= 0; i -= 3) {
  console.log(i);
}

function count(number) {
  for (let i = number; i >= 0; i -= 3) {
    console.log(i);
  }
}

count(162);

// для примера более сложный пример
for (let i = 100, j = 5; i > j && j < 60; i--, j++) {
  console.log(i, j);
}

// while

let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

const animals = ["panda", "wolf", "fox"];

// с помощью цыкла while все животные были с большой буквы

const animals1 = ["panda", "wolf", "fox"];

let j = 0;
while (j < animals1.length) {
  animals1[j] = animals1[j].charAt(0).toUpperCase() + animals1[j].slice(1);
  j++;
}

console.log(animals1);

//for ...of
for (let animal of animals) {
    console.log(animal);
}