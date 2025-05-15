function fetchBooks() {
  fetch("https://vik-fs.github.io/my-favorite-book/book.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("book-info");
      container.innerHTML = `
        <h1>${data.title}</h1>
        <p><strong>Автор:</strong> ${data.author}</p>
        <p><strong>Год:</strong> ${data.year}</p>
      `;
    })
    .catch((err) => {
      document.getElementById("book-info").textContent =
        "Не удалось загрузить данные 😢";
      console.error("Ошибка загрузки JSON:", err.message);
    });
}

fetchBooks();
