import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeder, Banner } from "../utils"
import img from "../images/menu.png"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeder img={img}>
      <Banner title={"Nasza oferta"} subTitle={"oferta"} />
    </PageHeder>
  </Layout>
)

export default MenuPage
