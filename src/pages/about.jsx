import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Progress from '../components/progress'
import { graphql } from "gatsby"
const About = ({data}) => {

  const skills = [
    ["HTML", 90],
    ["CSS", 90],
    ["javascript", 80],
    ["React js", 60],
    ["Asp.net core", 50],
    ["Angular", 60],
    ["TypeScript", 55],
    ["Angular js", 50],
    ["Sass", 80],
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
              general, I am interested in
                <strong className="text-darken"> Flutter</strong> , along with some
              <strong className="text-darken">React Native</strong> too.
            </p>
            <br />
            <p>
              I can quickly and efficiently join your team using
              continuous-integration methods and tools such as
              <strong className="text-darken">Git</strong> and
              <strong className="text-darken">Agile</strong>.
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
              these main categories, like{" "}
              <strong className="text-darken">jquery</strong> ,
              <strong className="text-darken">Handlebar</strong> ,{" "}
              <strong className="text-darken">Webpack</strong> ,
              <strong className="text-darken">Gulp</strong> and{" "}
              <strong className="text-darken">Less</strong>
            </p>
            <br />
            <p>also , familiar with Adobe Photoshop ,xd and Illustrator.</p>
            <br />
            <p>
              download my{" "}
              <a
                rel="noreferrer"
                href={data.file.publicURL}
                target="_blank"
                className="btn btn-primary"
              >
                resume
              </a>
            </p>
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
