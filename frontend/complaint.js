document.querySelector("form").addEventListener("submit", async e => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  const res = await fetch("/api/complaints/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.value,
      description: description.value,
      category: category.value,
      priority: priority.value,
      user_id: user.id
    })
  });

  const data = await res.json();
  alert(data.message);
});
