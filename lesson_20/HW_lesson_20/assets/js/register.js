const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        avatar: "https://api.lorem.space/image/face?w=150&h=150", // обязательный ключ
      }),
    });

    if (response.ok) {
      console.log("Регистрация успешна, редирект...");
      // alert("Регистрация успешна! Сейчас перейдём на страницу входа.");
      window.location.href = "/login"; // редирект
      // window.location.href = "login/index.html"; // редирект
    } else {
      const errorData = await response.json();
      message.textContent = errorData.message || "Ошибка регистрации";
    }
  } catch (error) {
    message.textContent = "Сетевая ошибка. Попробуйте позже.";
    console.error("Ошибка:", error);
  }
});
