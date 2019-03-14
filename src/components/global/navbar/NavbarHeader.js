import React, { Component } from "react"
import { Link } from "gatsby"
import logoh from "../../../images/logoh.png"
// import logom from "../../../images/logom.png"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWraper>
        <Link to="/">
          <img src={logoh} alt="HYDRO-SYSTEM" className="logo" />
        </Link>
        {/* <Link to="/" className="toggle-icon hs">
          <img src={logom} alt="HYDRO-SYSTEM" className="hs" />
        </Link> */}
        <FaAlignRight className="toggle-icon hs" onClick={handleNavbar} />
      </HeaderWraper>
    )
  }
}

const HeaderWraper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  /*  */
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
    max-height: 130px;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
  /* @media (max-width: 767px) {
    .toggle {
      display: none;
      max-width: 40%;
    }
  }  */
`
// Gatsby Project - Lecture - 18 - Navbar Links Media Quer
