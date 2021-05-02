import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Progress from '../components/progress'
import { graphql } from "gatsby"
const About = ({data}) => {
  console.log(data)
  const skills = [
    ["HTML", 90],
    ["CSS", 90],
    ["javascript", 80],
    ["React js", 60],
    ["Asp.net core", 50],
    ["Angular", 60],
    ["TypeScript", 60],
    ["Angular js", 50],
    ["sass", 80],
  ]

  return (
    <Layout>
      <Seo title="About" />
      <div className="container about-page grid">
        <div className="about-page-wrapper ">
          <h1 className="about-page--title">Who I Am</h1>
          <div className="about-page--info ">
            <p>
              I am a Front-end Developer with 6+ years commercial experience
              based in Istanbul, Turkey. I create successful websites that are
              fast, easy to use, and built with best practices. During the day
              I’m the senior developer at a local agency. During the evenings I
              spend my time with my family and working on freelance projects. I
              prefer to keep learning, continue challenging myself, and do
              interesting things that matter
            </p>
            <br />

            <p>
              My primary area of experience in front-end development, but in
              general, I am interested in Flutter, along with some React Native
              too.
            </p>
            <br />
            <p>
              I can quickly and efficiently join your team using
              continuous-integration methods and tools such as Git and Agile.
            </p>
          </div>
          <br />
          <br />
          <h2 className="about-page--subtitle">My skills</h2>
          <div className="about-page--info ">
            <p>
              I use HTML, CSS, and JavaScript to produce responsive websites and
              web apps that provide users the best and most appropriate
              experience suited to their device and browser.
            </p>
            <br />

            {skills.map(([skill, percentage], index) => (
              <Progress skill={skill} percentage={percentage} key={index} />
            ))}
            <br />
            <p>
              This is a list of my foundational front-end development skills.
              I'm also familiar with many tools and frameworks that fall under
              these main categories
            </p>
            <br />

            <a href={data.file.publicURL} target="_blank" className="btn btn-primary">
              see resume
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
  {
    file(extension: { eq: "pdf" }) {
      publicURL
    }
  }
`
export default About
