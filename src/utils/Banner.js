import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export default function Banner({ title, subTitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h1 className="subTitle">{subTitle}</h1>
      {children}
    </BannerWrapper>
  )
}
const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainYellow};
    font-size: 3rem;
    /* text-transform: uppercase; */
    ${styles.letterSpacing({ spacing: "0.55rem" })}
  }
  .subTitle {
    color: ${styles.colors.mainYellow};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
Banner.defaultProps = {
  title: "default title",
  subTitle: "default subTitle",
}
