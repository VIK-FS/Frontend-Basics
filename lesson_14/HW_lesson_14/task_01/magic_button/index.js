// создаем кнопку "Нажми на меня"

// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  clonedBtn.textContent = "Я изменю тебя";
  
  // Добавляем CSS-класс и индивидуальные стили
//   clonedBtn.className = "second-btn";
//   clonedBtn.classList = "second-btn";
clonedBtn.classList.add("second-btn");

clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";

  if (!document.getElementById("magic-btn-2")) {
      document.body.appendChild(clonedBtn);
    }
});

// здесь можете создать EventListener для второй кнопки
// При клике на вторую кнопку — изменяем стили первой
clonedBtn.addEventListener("click", () => { 

    console.log("click");
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
});
