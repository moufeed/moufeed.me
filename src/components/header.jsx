import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Header = () => {
  const {
    site: { siteMetadata: siteData },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteTitle
        }
      }
    }
  `)

  return (
    <header className="mainHeader container">
      <div className="mainHeader--logo ">
        <Link to="/" className="d-flex">
          <StaticImage
            src="../images/icon.png"
            width={60}
            layout="fixed"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="moufeed logo"
          />
          <strong className="d-inline">{siteData.siteTitle}</strong>
        </Link>
      </div>
    </header>
  )
}

export default Header
