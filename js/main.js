const themeToggle = document.getElementById("theme-toggle");
const themeLink = document.getElementById("light-theme");
themeToggle.addEventListener("click", () => {
  toggleTheme();
});
function toggleTheme() {
  if (themeLink.getAttribute("href") === "./styles/light-style.css") {
    themeLink.setAttribute("href", "./styles/dark-style.css");
  } else {
    themeLink.setAttribute("href", "./styles/light-style.css");
  }
}
