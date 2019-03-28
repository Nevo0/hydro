import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeder, Banner } from "../utils"
import img from "../images/about.png"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeder img={img}>
      <PageHeder img={img}>
        <Banner title={"O nas"} subTitle={"onas"} />
      </PageHeder>
    </PageHeder>
  </Layout>
)

export default AboutPage
