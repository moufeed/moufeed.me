import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className="container about-page">
        <h1 className="about-page--title">Who I Am</h1>
        <p className="about-page--info">
          I am a Front-end Developer with 6+ years commercial experience based
          in Istanbul, Turkey. I create successful websites that are fast, easy
          to use, and built with best practices. During the day I’m the senior
          developer at a local agency. During the evenings I spend my time with
          my family and working on freelance projects. I prefer to keep learning,
          continue challenging myself, and do interesting things that matter
        </p>
      </div>
    </Layout>
  )
}

export default About
