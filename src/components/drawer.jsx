import React from "react"
import { site } from "../data/site"

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
                title="Connect with me on Twitter"
                className="drawer--social-list--link"
              >
                <img
                  src="/icons/twitter.png"
                  width={24}
                  height={24}
                  alt="Twitter"
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
              alt="close drawer"
            />
          </button>
        </div>

        <ul className="list-style-none drawer--list ">
          <li>
            <a href="/" className="type-2 drawer--list--link ">
              home
            </a>
          </li>
          {site.menuLinks.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="type-2 drawer--list--link ">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
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
