const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "/login";
}

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

async function fetchProfile() {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка при получении профиля");
    }

    const user = await response.json();

    document.getElementById(
      "welcome"
    ).textContent = `Добро пожаловать, ${user.name}!`;
    document.getElementById("name").textContent = `Имя: ${user.name}`;
    document.getElementById("email").textContent = `Email: ${user.email}`;

    const avatar = document.getElementById("avatar");

    // Назначаем аватар, или ставим заглушку
    if (isValidURL(user.avatar)) {
      avatar.src = user.avatar;
    } else {
      avatar.src = "https://i.imgur.com/cznkkPI.jpeg";
    }

    // Если загрузка аватара не удалась — подставляем заглушку
    avatar.onerror = () => {
      avatar.onerror = null; // чтобы не зациклиться
      avatar.src = "https://i.imgur.com/cznkkPI.jpeg";
    };

    avatar.alt = "Аватар пользователя";
    avatar.referrerPolicy = "no-referrer";
    avatar.crossOrigin = "anonymous";
  } catch (err) {
    console.error("Ошибка профиля:", err);
    // При ошибке не выкидываем пользователя с профиля — показываем заглушку
    document.getElementById("welcome").textContent = "Ошибка загрузки профиля";
    document.getElementById("name").textContent = "";
    document.getElementById("email").textContent = "";
    const avatar = document.getElementById("avatar");
    avatar.onerror = null;
    avatar.src = "https://i.imgur.com/cznkkPI.jpeg";
  }
}

fetchProfile();

function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}
