// по умолчаню фетч делает GET запрос
function fetchBooks() {
  fetch("https://vik-fs.github.io/my-favorite-book/book.json")
    .then((res) => res.json())
    .then((data) => {
      const titleElement = document.createElement("h1");
      titleElement.textContent = `Title: ${data.title}`;

      const authorElement = document.createElement("p");
      authorElement.textContent = `Author: ${data.author}`;

      const yearElement = document.createElement("p");
      yearElement.textContent = `Year: ${data.year}`;

      document.body.appendChild(titleElement);
      document.body.appendChild(authorElement);
      document.body.appendChild(yearElement);

      //   console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

fetchBooks();
