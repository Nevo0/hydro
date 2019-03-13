import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/global/navbar"
import { createGlobalStyle } from "styled-components"

// import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --mainOrange: #f15025;
}

body {
  font-family: "Caveat", 'cursive';
  color: #262626;
  background: white
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
