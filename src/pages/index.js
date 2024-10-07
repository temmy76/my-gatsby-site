import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
        <p>Main Page</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage