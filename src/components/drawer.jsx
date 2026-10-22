import React from "react"
import { site } from "../data/site"
import { copy } from "../data/copy"
import ThemeToggle from "./ThemeToggle.jsx"
import SocialIcon from "./SocialIcon.jsx"

const Drawer = ({ opened, close }) => {
  return (
    <div className={`drawer  ${opened ? "opened" : ""}`}>
      <div className="drawer--container">
        <div className="drawer--social">
          <ul className="list-style-none drawer--social-list">
            <li>
              <a
                href={`https://twitter.com/${site.author}`}
                target="_blank"
                rel="noreferrer"
                title={copy.a11y.twitterConnect}
                className="drawer--social-list--link"
                aria-label={copy.contact.twitter}
              >
                <SocialIcon name="twitter" />
              </a>
            </li>
            {site.socialLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  className="drawer--social-list--link"
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  <SocialIcon name={item.icon} />
                </a>
              </li>
            ))}
          </ul>
          <button
            className="btn no-border drawer--close"
            type="button"
            onClick={() => close(false)}
            aria-label={copy.a11y.closeDrawer}
          >
            <svg
              className="drawer--close-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M5 5l14 14M19 5L5 19"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="list-style-none drawer--list ">
          {site.menuLinks.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="type-2 drawer--list--link ">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.resumeUrl}
          className="btn drawer--resume"
          target="_blank"
          rel="noreferrer"
        >
          <span className="drawer--resume-label">{copy.nav.resume}</span>
        </a>
        <ThemeToggle className="drawer--theme" />
      </div>
      <div
        aria-hidden="true"
        className="drawer--overlay"
        onClick={() => close(false)}
      ></div>
    </div>
  )
}

export default Drawer
