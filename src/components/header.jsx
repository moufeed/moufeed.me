import * as React from "react"
import useWindowSize from "../hooks/window-size"
import { breakpoint, site } from "../data/site"
import { copy } from "../data/copy"
import ThemeToggle from "./ThemeToggle.jsx"

/** Site header with nav, CV link, and light/dark mode toggle */
const Header = ({ drawer }) => {
  const [width] = useWindowSize()

  return (
    <header className="mainHeader container">
      <div className="grid">
        <div className="mainHeader--logo ">
          <a
            href="/"
            className="d-flex align-items-center mainHeader--logo--link"
          >
            <img
              src="/icon.png"
              width={55}
              height={55}
              alt={copy.a11y.logoAlt}
            />
            <strong className="d-inline text-dark">{site.siteTitle}</strong>
          </a>
        </div>
        {width > breakpoint ? (
          <div className="mainHeader--nav d-flex justify-flex-end">
            <nav className="mainNavigation d-flex align-items-center">
              {site.menuLinks.map((link, index) => (
                <a href={link.url} key={index} className="mainNavigation--link">
                  {link.label}
                </a>
              ))}
              <a
                href={site.resumeUrl}
                className="btn mainNavigation--resume"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mainNavigation--resume-label">
                  {copy.nav.resume}
                </span>
              </a>
              <ThemeToggle />
            </nav>
          </div>
        ) : (
          <div className="mainHeader--tools">
            <ThemeToggle />
            <button
              onClick={() => drawer()}
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
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
