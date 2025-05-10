// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");

// копируем ее - получилась вторая кнопка, ее можно использовать
const clonedBnt = btn.cloneNode(true);
// задаем id
clonedBnt.id = "magic-btn-2";

// храним начальные стили первой кнопки
const originalStyles = {
  backgroundColor: btn.style.backgroundColor || "#f7c815",
  color: btn.style.color || "white",
};

// переменная состояния: true - изменено, false - оригинал
let isChanged = false;

// применим стили и класс при создании
btn.addEventListener("click", () => {
  // устанавливаем текст
  clonedBnt.textContent = "Я изменю тебя";

  // добавим CSS-класс и индивидуальные стили
  clonedBnt.className = "second-btn";

  // удалим инлайн-стили, чтобы не мешали :hover
  clonedBnt.removeAttribute("style");

//   clonedBnt.classList.add = "second-btn";
  clonedBnt.style.backgroundColor = "#a78b71";
  clonedBnt.style.color = "white";

  // добавим в документ, если еще не добавлена
  if (!document.getElementById("magic-btn-2")) {
    document.body.appendChild(clonedBnt);
  }
});

// при клике на вторую кнопку - изменить стили первой
clonedBnt.addEventListener("click", () => {
  if (!isChanged) {
    // изменение первой кнопки
    btn.style.backgroundColor = "#9c4a1a";
    btn.style.color = "black";
    clonedBnt.textContent = "Reset";
    clonedBnt.style.backgroundColor = "";
    isChanged = true;
} else {
    // возврат в исходное состояние
    btn.style.backgroundColor = originalStyles.backgroundColor;
    btn.style.color = originalStyles.color;
    clonedBnt.textContent = "Я изменю тебя";
    isChanged = false;

    // удалить вторую кнопку
    clonedBnt.remove();
  }
});
