export const THEME_STORAGE_KEY = "theme"

export function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY)
  } catch {
    return null
  }
}

export function getSystemTheme() {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export function resolveTheme(stored = getStoredTheme()) {
  if (stored === "light" || stored === "dark") return stored
  return getSystemTheme()
}

export function applyTheme(theme) {
  const resolved = theme === "dark" ? "dark" : "light"
  const root = document.documentElement
  root.classList.toggle("dark", resolved === "dark")
  root.style.colorScheme = resolved

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute(
      "content",
      resolved === "dark" ? "#0e141b" : "#ffffff"
    )
  }

  return resolved
}

export function setTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
  return applyTheme(theme)
}

export function toggleTheme() {
  const next = resolveTheme() === "dark" ? "light" : "dark"
  return setTheme(next)
}
