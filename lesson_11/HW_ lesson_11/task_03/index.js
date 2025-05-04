/**
 * Задание 3
Создайте функцию gardener, которая принимает в себя два параметра:
операцию и предмет, на который эта операция будет направлена.

Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this "
плюс название конкретного цветка.

Вызовите фунцкию gardener c параметрами: функция поливать цветок, 'rose'.

Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 
 */
function water(item) {
  console.log("I water this " + item) ;
}

function plant(item) {
  console.log("I plant the " + item);
}

function hill(item) {
  console.log("I hill the " + item);
}

function trim(item) {
  console.log("I trim the " + item);
}

function waterTwice(item) {
  console.log("I water the " + item + " twice");
}

function fertilize(item) {
  console.log("I fertilize the " + item);
}

function gardener(operation, item) {
  operation(item);
}
const rose = "rose";
const herb = "herb";
const bush = "bush";
const tree = "tree";
const tulip = "tulip";
const grass = "grass";

gardener(water, rose);
gardener(plant, herb);
gardener(hill, bush);
gardener(trim, tree);
gardener(waterTwice, tulip);
gardener(fertilize, grass);
