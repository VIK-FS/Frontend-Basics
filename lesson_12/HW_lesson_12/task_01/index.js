/**
 * Задание 1
Создайте метод, который принимает объект, а возврщает новый объект, в котором ключи и значения поменялись местами.

{name: "Bob"} --> {"Bob": "name"}

(вам понабится поработать с Object.values, Object.keys ) */

function reverseKeyValue(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const reserved = {};

  for (let i = 0; i < keys.length; i++) {
    reserved[values[i]] = keys[i];
  }
  return reserved;
}

const person = {
  name: "Bob",
  surname: "Jonson",
  age: 18,
  gender: "male",
  email: "test@gmail.com",
};

const newPerson = reverseKeyValue(person);

console.log(person);
console.log(newPerson);
