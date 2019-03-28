import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { HomeHeder, Banner, BunnerButton } from "../utils"
import img from "../images/index.png"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
// import Banner from "../utils/Banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeder img={img}>
      <Banner
        title={"Wojciech Tarnawski"}
        subTitle={"Olkuska 92, 32-085 Szyce"}
      >
        <BunnerButton style={{ margin: "2rem auto" }}>menu</BunnerButton>
      </Banner>
    </HomeHeder>
    <QuickInfo />
  </Layout>
)

export default IndexPage
