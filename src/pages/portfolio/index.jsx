import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from '../../components/layout'
import Seo from '../../components/seo';
const ProjectsPage = ({data}) => {


  const {
    projects: { nodes: projects },
    contacts: { siteMetadata: contacts },
  } = data


  return (
    <Layout>
      <Seo title="Portfolio" />
      <div className="container portfolio-page">
        <div className="portfolio-page--header">
          <h1 className="portfolio-page--header--title">
            Web Development Portfolio
          </h1>
          <p className="portfolio-page--header--excerpt">
            Online success comes with a site that can load quickly, offers easy
            navigation, and is built according to best practices and a sense of
            design.
          </p>
        </div>
        <div className="portfolio-page--gallery">
          {projects.map(({ frontmatter: project }, index) => (
            <Link
              key={index}
              to={`/portfolio/${project.slug}`}
              className="portfolio-page--gallery--item"
            >
              <Img fluid={project.thumb.childImageSharp.fluid} />
              <span>{project.title}</span>
              <div className="number">{String(index + 1).padStart(2, "0")}</div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: [ASC] }
    ) {
      nodes {
        frontmatter {
          slug
          title
          excerpt
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contacts: site {
      siteMetadata {
        email
      }
    }
  }
`
export default ProjectsPage
