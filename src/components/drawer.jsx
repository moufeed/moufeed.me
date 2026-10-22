import React from "react"
import { site } from "../data/site"
import { copy } from "../data/copy"

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
              >
                <img
                  src="/icons/twitter.png"
                  width={24}
                  height={24}
                  alt={copy.contact.twitter}
                />
              </a>
            </li>
            {site.socialLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  className="drawer--social-list--link"
                  rel="noreferrer"
                >
                  <img
                    src={`/icons/${item.icon}`}
                    width={24}
                    height={24}
                    alt={item.label}
                  />
                </a>
              </li>
            ))}
          </ul>
          <button className="btn no-border" onClick={() => close(false)}>
            <img
              src="/icons/delete.png"
              width={24}
              height={24}
              alt={copy.a11y.closeDrawer}
            />
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
