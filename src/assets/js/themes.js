const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon")
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon")

const prefersDarkColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches

if (prefersDarkColorScheme()) {
  document.documentElement.classList.add("dark")
  themeToggleLightIcon?.classList.remove("hidden")
} else {
  document.documentElement.classList.remove("dark")
  themeToggleDarkIcon?.classList.remove("hidden")
}

var themeToggleBtn = document.getElementById("theme-toggle")

themeToggleBtn?.addEventListener("click", function () {
  themeToggleDarkIcon.classList.toggle("hidden")
  themeToggleLightIcon.classList.toggle("hidden")

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
  } else {
    document.documentElement.classList.add("dark")
  }
})
