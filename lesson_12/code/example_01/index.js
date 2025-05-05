// Object
// key - value

const user = { email: "john@gmail.com" };
const age = 18;

// user = {amail: "bob@gmail.com"}

user.email = "john2@yahoo.org";
console.log(user);

// как добавить в объект новое свойство
user.eyeColor = "brown";

console.log(user);

// "hair color"
user["hair color"] = "yellow";

console.log(user);
const { "hair color": color } = user;

console.log(color);

// пример того как можно создавать объект из переменных

const pandaName = "Po";
const favouriteFood = "bamboo";

const panda = {
  name: pandaName,
  favouriteFood, // short syntax - если имя совпадает с ключом
};

// создайте переменную рост назовите ее bobHeigh и пусть будет равна 184

// создайте объект bob с ключом height в котором будет лежать значение bobHeigh

const bobHeigh = 184;

const bob = {
  height: bobHeigh,
};

console.log(bob);

// динамический ключ- ключ, который лежит внутри переменной
const key1 = "name";
const girafeSam = {
  name: "Sam",
  age: 7,
};

console.log(girafeSam.key1);
console.log(girafeSam[key1]);

const keys = ["name", "age"];
for (let i = 0; i < keys.length; i++) {
  console.log(girafeSam[keys[i]]);
}

// Какие у объекта есть ключи?

// список ключей объекта

const keysOfGirafe = Object.keys(girafeSam);
console.log(keysOfGirafe); // ['name', 'age]

// список значений объекта

const valuesOFGirafe = Object.values(girafeSam);
console.log(valuesOFGirafe); // ['Sam', 7]

// entries - пары ключ-значение
const entries = Object.entries(girafeSam);
console.log(entries); // [ [ 'name', 'Sam' ], [ 'age', 7 ] ]

const breakfast = {
  title: "omlet",
  calories: 1200,
};

Object.freeze(breakfast);

//
breakfast.warm = true;

console.log(breakfast.warm);
console.log(breakfast);

// можно ли изменить значения уже бывших свойств? нет
breakfast.title = "cereal";
console.log(breakfast); // { title: 'omlet', calories: 1200 }

const dinner = {
  title: "pasta",
  colories: 2000,
};
Object.seal(dinner);

dinner.fat = true;
console.log(dinner); //{ title: 'omlet', calories: 1200 }

// могу ли я изменить старые свойства? да
dinner.colories += 200; // увеличили

console.log(dinner); //{ title: 'pasta', colories: 2200 }

// Object create - можем создавать объекты
const musician = Object.create({ name: "Freddy Mercury" });
console.log(musician); //{}
console.log(musician.name); //Freddy Mercury

// поговорим про прототипное наследование позже

const address = {
  street: "Pfondorfer",
  number: 12,
};

const firma = {
  title: "Hons and hoofs",
};

Object.assign(firma, address); // копирует и добавляет
console.log(firma); //{ title: 'Hons and hoofs', street: 'Pfondorfer', number: 12 }

address.post = 10407;
console.log(firma);

// аналог того же самого это спред оператор

const personalInfo = {
  name: "Fedor",
};
const medicalInfo = {
  bloodtype: 1,
};

const fedor = {
  ...personalInfo,
  ...medicalInfo,
  age: 19,
};

console.log(fedor);

////

// function unify(object, key, value) {
//     object[key] = value;
//     return object;
//   }
//   const result = unify({ email: "bob@gmail.com" }, "eyeColor", "brown");
//   console.log(result);

///
// function unify(obj, key, value) {
//     return { ...obj, [key]: value };
//   }

const unify = (obj, key, value) => ({ ...obj, [key]: value });

const original = { email: "bob@gmail.com" };
const result1 = unify(original, "eyeColor", "brown");

console.log("original:", original); // { email: 'bob@gmail.com' }
console.log("result:", result1); // { email: 'bob@gmail.com', eyeColor: 'brown' }
