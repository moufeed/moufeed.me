import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectPage = ({ location }) => {
  const slug = location.state?.slug ? location.state.slug : null
  return (
    <Layout>
      <Seo title="Page two" />
      <h1> {slug} </h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ProjectPage
