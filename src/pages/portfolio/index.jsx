import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
const ProjectsPage = ({data}) => {


  const {
    projects: { nodes: projects },
    contacts: { siteMetadata: contacts },
  } = data


  return (
    <div>
      {projects.map(({ frontmatter: project }, index) => (
        <Link key={index} to={`/portfolio/${project.slug}`}>
          <div>
            <Img fluid={project.thumb.childImageSharp.fluid} />
            {project.title}
          </div>
        </Link>
      ))}
    </div>
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
