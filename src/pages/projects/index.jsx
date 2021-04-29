import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image"
const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const {
    projects: { nodes: projects },
    contacts: { siteMetadata: contacts },
  } = data
  console.log(projects, contacts)

  return (
    <div>
      {projects.map(({ frontmatter: project }, index) => (
        <Link key={index} to={`/projects/${project.slug}`}>
          <div>
            <Img fluid={project.thumb.childImageSharp.fluid} />
            {project.title}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProjectsPage
