// проверяем подключился ли скрипт
console.log("check");

let count = 0;

// подключаем элементы в переменные

const infoBtn = document.getElementById("info-btn");
// console.log(infoBtn);
const removeInfoBtn = document.getElementById("remove-info-btn")


const infoMessage = document.createElement("p");
infoMessage.innerText = "This summer is not warm at all";
console.log(infoMessage); // <p>This summer is not warm at all</p>

// повесить слушатель событий
infoBtn.addEventListener("click", () => {
  // console.log("click-click"); // проверить
  // добавили вновь созданный элемент в body документа
  document.body.appendChild(infoMessage);
  count++;
  console.log(count);
});

// слушатель для кнопки удаления
removeInfoBtn.addEventListener("click", ()=>{
    // удалить элемент со страницы
    // чтобы удалить элемент
    infoMessage.remove() // 
})

//
const infoClone = document.cloneNode(infoBtn)
infoClone.id = "new-id-msg"
console.log("Склонированный узел, с инменненным id", infoClone);