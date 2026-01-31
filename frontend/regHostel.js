document.querySelector("form").addEventListener("submit", async e => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  const res = await fetch("/api/hostel/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user.id,
      hostel: hostel.value,
      block_name: block_name.value,
      room_no: room_no.value
    })
  });

  if (res.ok) {
    window.location.href = "dashboard.html";
  } else {
    alert("Registration failed");
  }
});
