import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import eye from '../images/eye.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />



    <div style={{ maxWidth: `700px`, marginBottom: `1.45rem` }}>
      <img src={eye} />

    </div>
  </Layout>
)

export default IndexPage
