import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"

const AboutPage = () => {
    return (
        <Layout pageTitle={"About Page"}>
            <p>This is about page</p>
        </Layout>
    )
}

export const Head = () => <title>About Page</title>

export default AboutPage