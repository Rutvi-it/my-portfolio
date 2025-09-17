// ==== Dark Mode Toggle ====
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // save theme in local storage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Load theme on page load
window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// ==== Mobile Menu Toggle ====
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
