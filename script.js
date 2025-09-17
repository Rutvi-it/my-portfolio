// ==== Dark Mode Toggle ====
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("theme-btn");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    btn.textContent = "☀️"; // change icon
  } else {
    localStorage.setItem("theme", "light");
    btn.textContent = "🌙"; // change icon
  }
}

// Load theme on page load
window.onload = function () {
  const btn = document.getElementById("theme-btn");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
};

// ==== Mobile Menu Toggle ====
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
