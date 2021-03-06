import React, { Component } from "react"
import { Section, Title, SectioButton } from "../../utils/index"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "#",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "#",
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "#",
      },
    ],
  }

  render() {
    return (
      <FooterWrapper>
        <div className="title">Hydrosystem</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">copyright &copy; 2019 HYDROSYSTEM</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 20rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .title {
    text-align: center;
    width: 14rem;
    text-transform: uppercase;
    color: ${styles.colors.mainYellow};
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
`
