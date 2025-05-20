const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  try {
    // Проверка существующего пользователя
    const usersRes = await fetch("https://api.escuelajs.co/api/v1/users");
    const users = await usersRes.json();
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      message.textContent = "Пользователь с таким email уже существует.";
      message.style.color = "red";
      return;
    }

    const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        avatar: "https://i.pravatar.cc/150?u=email",
      }),
    });

    if (response.ok) {
      message.style.color = "green";
      message.textContent = "Регистрация успешна. Перенаправление...";
      setTimeout(() => {
        // window.location.href = "/login/index.html";
        window.location.href = "/login";
      }, 1000);
    } else {
      const errorData = await response.json();
      message.textContent = errorData.message || "Ошибка регистрации";
    }
  } catch (error) {
    message.textContent = "Сетевая ошибка. Попробуйте позже.";
    console.error("Ошибка:", error);
  }
});
