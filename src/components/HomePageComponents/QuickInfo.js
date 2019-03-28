import React, { Component } from "react"
import { Section, Title, SectioButton } from "../../utils/index"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="pozwol nam się przedstawić" title="nasza misja" />

        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            perspiciatis nam culpa itaque quidem voluptatem! Quis, ipsa
            inventore ducimus possimus quidem doloribus corrupti deleniti,
            necessitatibus et, voluptatibus nulla non. Ab Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Aut perspiciatis nam culpa itaque
            quidem voluptatem! Quis, ipsa inventore ducimus possimus quidem
            doloribus corrupti deleniti, necessitatibus et, voluptatibus nulla
            non. Ab.
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <SectioButton style={{ margin: "2rem auto" }}>o nas</SectioButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 998px) {
    width: 50%;
  }
`
