// Toggle Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar navbar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Change Header Background on Scroll
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkMode();

themeSwitch.addEventListener("click", function () {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("dataForm");

  form.addEventListener("submit", function (event) {
    // Cegah submit form default
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("no-hp").value.trim();
    const keyboard = document.getElementById("keyboard").value;
    const address = document.getElementById("address").value.trim();

    // Validasi sederhana
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      keyboard === "" ||
      address === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Validasi format email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Jika validasi berhasil
    alert("Form submitted successfully!");
    form.reset(); // Reset form setelah submit
  });
});
