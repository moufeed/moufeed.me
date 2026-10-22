import * as React from "react"
import useWindowSize from "../hooks/window-size"
import { breakpoint, site } from "../data/site"

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
              alt="mofid logo"
            />
            <strong className="d-inline text-dark">{site.siteTitle}</strong>
          </a>
        </div>
        {width > breakpoint ? (
          <div className="mainHeader--nav d-flex justify-flex-end">
            <nav className="mainNavigation d-flex align-items-center">
              {site.menuLinks.map((link, index) => (
                <a
                  href={link.url}
                  key={index}
                  className="mainNavigation--link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ) : (
          <button
            onClick={() => drawer()}
            className="btn mainHeader--button no-border"
            type="button"
            aria-label="Open menu"
          >
            <img
              src="/icons/menu.inline.svg"
              width="30"
              height="30"
              alt="menu icon"
            />
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
