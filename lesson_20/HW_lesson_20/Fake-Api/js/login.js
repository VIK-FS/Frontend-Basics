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

    if (response.ok && data.access_token) {
      // localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("token", data.access_token);
      message.style.color = "green";
      message.textContent = "Успешный вход!";
      setTimeout(() => {
        // window.location.href = "/assets/index.html";
        window.location.href = "/index.html";
      }, 1000);
    } else {
      message.style.color = "red";
      message.textContent = data.message || "Неверные данные";
    }
  } catch (error) {
    message.textContent = "Сетевая ошибка. Попробуйте позже.";
    console.error("Ошибка входа:", error);
  }
});