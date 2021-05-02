import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
const Image = ({ src, ...rest }) => {

  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  const image = data.images.edges.find(image => image.node.relativePath === src)

  return <Img fluid={image.node.childImageSharp.fluid} {...rest}/>
}


export default Image;