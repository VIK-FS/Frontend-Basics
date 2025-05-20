document
  .getElementById("gender-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Отменяем перезагрузку страницы

    const nameInput = document.getElementById("name-input");
    const resultElement = document.getElementById("result");
    const name = nameInput.value.trim();

    if (!name) {
      resultElement.textContent = "Пожалуйста, введите имя.";
      return;
    }

    try {
      const response = await fetch(`https://api.genderize.io?name=${name}`);
      const data = await response.json();

      if (data.gender) {
        const probability = (data.probability * 100).toFixed(2);
        const genderRu = data.gender === "male" ? "мужской" : "женский";
        resultElement.textContent = `Имя: ${data.name}, Пол: ${genderRu}, С вероятностью ${probability}%`;
      } else {
        resultElement.textContent = `Не удалось определить пол для имени "${name}".`;
      }
    } catch (error) {
      resultElement.textContent = "Произошла ошибка при получении данных.";
      console.error(error);
    }
  });
