import React from "react"
import Hero from '../components/hero'
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Moufeed Jobakji" />
    <Hero/>
  </Layout>
)

export default IndexPage

/*

<StaticImage
      src="../assets/images/gatsby-astronaut.png"
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
    */