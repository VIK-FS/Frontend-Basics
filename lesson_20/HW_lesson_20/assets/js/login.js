const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Успешный вход — токен можно сохранить
      localStorage.setItem("token", data.access_token);
      message.style.color = "green";
      message.textContent = "Успешный вход!";
      // здесь можно сделать переход на главную
      // window.location.href = "/";
    } else {
      message.style.color = "red";
      message.textContent = data.message || "Неверные данные";
    }
  } catch (error) {
    message.textContent = "Сетевая ошибка. Попробуйте позже.";
    console.error("Ошибка входа:", error);
  }
});
