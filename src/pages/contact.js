import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { PageHeder } from "../utils"
import img from "../images/about.png"
import Map from "../components/global/mapbox"
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

const ContactPage = props => {
  console.log(Map)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h3>Hello from asdfContactPage</h3>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "40vh",
          width: "40vw",
        }}
        center={[19.8546732, 50.1486687]}
        zoom={[15]}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[19.855571, 50.1486887]} />
        </Layer>
      </Map>

      {/* <Map style="mapbox://styles/mapbox/streets-v8" /> */}
    </Layout>
  )
}

export default ContactPage
