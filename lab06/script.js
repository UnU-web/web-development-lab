// ===== Dark mode товч =====
var root = document.documentElement;
var themeBtn = document.getElementById("theme-btn");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeBtn.setAttribute("aria-pressed", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // хадгалах боломжгүй бол үл тоомсорлоно
  }
}

// Эхлэх горим: хадгалсан сонголт, байхгүй бол төхөөрөмжийн тохиргоо
var saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (e) {
  saved = null;
}
var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (prefersDark ? "dark" : "light"));

themeBtn.addEventListener("click", function () {
  var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(next);
});

// ===== Flip товчнууд =====
var flipButtons = document.querySelectorAll(".flip-btn");

flipButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var card = btn.closest(".card");
    var flipped = card.classList.toggle("is-flipped");
    btn.setAttribute("aria-pressed", flipped);
  });
});
