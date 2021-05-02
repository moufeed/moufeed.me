import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/layout';
export default function projectDetails({data}) {

  const { markdownRemark :project } = data;

  return (
    <Layout>
      project details
    </Layout>
  )
}


export const query = graphql`
  query projectDetailsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        date
        featureImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`