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
// ==== Contact Form Validation ====
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "⚠️ All fields are required!";
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMsg.style.color = "red";
    formMsg.textContent = "⚠️ Enter a valid email!";
    return false;
  }

  formMsg.style.color = "green";
  formMsg.textContent = "✅ Message sent successfully!";
  return false; // prevent actual form submission (assignment purpose)
}

// ==== Smooth Scroll for Nav Links ====
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.getAttribute("href").includes(".html")) return; // skip external pages
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ==== Typing Animation (Homepage) ====
const typingElement = document.getElementById("typing");
if (typingElement) {
  const text = "I am Rutvi Patel | IT Student";
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  type();
}
