import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage   = () => (
  <Layout>
    <Seo title="Home" />

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    {[1, 2, 3, 4].map((_, index) => (
      <Link to="/project/" key={index} state={{ slug: index }}>
        Go to {index}
      </Link>
    ))}
    <p>
      <Link to="/project/">Go to page 2</Link> <br />
      <Link to="/projects/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
