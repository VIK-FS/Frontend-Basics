/**
 * Homework
Задание 1
🏠
Дан объект

const house = {
  address: "Pfondorfer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};

Используя деструктуризацию объекта, получите в отдельные переменные цвет стен, и адрес.
 */

const house = {
  address: "Pfondorfer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};

const { address, wallColor } = house;
console.log("address: ", address);
console.log("wallColor: ", wallColor);
