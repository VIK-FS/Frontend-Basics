const form = document.getElementById("animal-form");
const animalList = document.getElementById("animal-list");

let animals = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nickname = form.elements["nickname"].value.trim();
  const age = form.elements["age"].value.trim();
  const breed = form.elements["breed"].value.trim();

  console.log("Добавляется животное:", { nickname, age, breed });

  if (!nickname || !age || !breed) {
    alert("Пожалуйста, заполните все поля!");
    return;
  }

  const animal = { nickname, age, breed };
  animals.push(animal);
  console.log("Текущий список животных:", animals);

  renderAnimals();
  form.reset();  
});

function renderAnimals() {
  animalList.innerHTML = ""; 

  animals.forEach((animal) => {
    const div = document.createElement("div");
    div.textContent = `Кличка: ${animal.nickname}, Возраст: ${animal.age}, Порода: ${animal.breed}`;
    animalList.appendChild(div);
  });
}
