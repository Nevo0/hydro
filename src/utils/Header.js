import React from "react"
import styled from "styled-components"
import img from "../images/index.png"

function HomeHeder({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

function PageHeder({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 73px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover no-repeat;
  /* width: 100%; */
  /* height: 100%; */

  @media (min-width: 1300px) {
    margin: 0 5%;
    padding: 20%;
  }
`

HomeHeder.defaultProps = {
  img: img,
}

DefaultHeader.defaultProps = {
  img: img,
}

export { HomeHeder, PageHeder }
