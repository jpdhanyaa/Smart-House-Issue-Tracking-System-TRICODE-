document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("remember-me").checked;

  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, rememberMe })
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = data.isNewUser ? "regHostel.html" : "dashboard.html";
  } else {
    alert(data.message);
  }
});
