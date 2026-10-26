import * as React from "react"
import { copy } from "../data/copy"
import { applyTheme, resolveTheme, toggleTheme } from "../data/theme"

const THEME_EVENT = "themechange"

const ThemeToggle = ({ className = "" }) => {
  const [theme, setThemeState] = React.useState("light")
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    const sync = () => {
      setThemeState(applyTheme(resolveTheme()))
      setReady(true)
    }

    sync()

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onMedia = () => {
      try {
        if (!localStorage.getItem("theme")) sync()
      } catch {
        sync()
      }
    }
    const onThemeEvent = (event) => {
      const next = event?.detail?.theme
      if (next === "light" || next === "dark") setThemeState(next)
      else sync()
    }

    media.addEventListener("change", onMedia)
    document.addEventListener("astro:after-swap", sync)
    window.addEventListener(THEME_EVENT, onThemeEvent)
    return () => {
      media.removeEventListener("change", onMedia)
      document.removeEventListener("astro:after-swap", sync)
      window.removeEventListener(THEME_EVENT, onThemeEvent)
    }
  }, [])

  const onToggle = () => {
    const next = toggleTheme()
    setThemeState(next)
    window.dispatchEvent(
      new CustomEvent(THEME_EVENT, { detail: { theme: next } })
    )
  }

  const isDark = theme === "dark"
  const label = isDark ? copy.a11y.themeToLight : copy.a11y.themeToDark

  return (
    <button
      type="button"
      className={`themeToggle ${isDark ? "is-dark" : "is-light"} ${className}`.trim()}
      onClick={onToggle}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      disabled={!ready}
    >
      <span className="themeToggle--track" aria-hidden="true">
        <span className="themeToggle--option themeToggle--option-light">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" />
            <path
              d="M12 4v1.5M12 18.5V20M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M4 12h1.5M18.5 12H20M5.6 18.4l1.1-1.1M17.3 6.7l1.1-1.1"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="themeToggle--option themeToggle--option-dark">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
            <path
              d="M15.1 3.6A8.5 8.5 0 1 0 20.4 12a6.75 6.75 0 0 1-5.3-8.4Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="themeToggle--thumb" />
      </span>
    </button>
  )
}

export default ThemeToggle
