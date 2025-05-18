const title = document.getElementById("title");
const ageElement = document.getElementById("age");
const foodsContainer = document.getElementById("foods-container");
const drinksContainer = document.getElementById("drinks-container");

fetch("https://alisherkhamidov.github.io/fake-pirate/boris.json")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Fetch Boris Error");
  })
  .then((cat) => {
    console.log(cat);
    const { firstName, secondName, favFoods, favDrinks, age } = cat;
    title.innerText = firstName + " " + secondName;
    ageElement.innerText = "Age:" + age;
    
    favFoods.forEach((food) => {
      const li = document.createElement("li");
      li.innerText = food;
      foodsContainer.appendChild(li);
    });
  })
  .catch((err) => {
    console.error(err);
  });
