// Мы можем создавать элементы с нуля и прикрепить их к документу к HTML
// создадим пустой элемент p

const newElement = document.createElement("p");
// console.log(newElement);
newElement.textContent = "Я был создан при помощи JS";
newElement.style.border = "2px solid red";
document.body.append(newElement);

const targetElement = document.getElementById("target-element");
const newBtn = document.createElement("button");
newBtn.type = "button";
newBtn.textContent = "Нажми на меня";
targetElement.append(newBtn)
