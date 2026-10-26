import React, { useEffect, useState } from "react"
import { breakpoint } from "../data/site"
import { copy } from "../data/copy"
import ThemeToggle from "./ThemeToggle.jsx"
import Drawer from "./Drawer.jsx"

/** Mobile-only theme toggle, menu button, and drawer */
const MobileChrome = () => {
  const [drawerOpened, setOpened] = useState(false)

  const toggleDrawer = () => setOpened((state) => !state)

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${breakpoint + 1}px)`)
    const onChange = (event) => {
      if (event.matches) setOpened(false)
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  return (
    <>
      <ThemeToggle />
      <button
        onClick={toggleDrawer}
        className="btn mainHeader--button no-border"
        type="button"
        aria-label={copy.a11y.openMenu}
      >
        <svg
          className="mainHeader--icon"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
          <path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
          <path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" />
        </svg>
      </button>
      <Drawer opened={drawerOpened} close={toggleDrawer} />
    </>
  )
}

export default MobileChrome
