import styled from "styled-components"
import { styles } from "../utils"

const BunnerButton = styled.button`
  display: block;
  color: ${styles.colors.mainYellow};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-weight: 900;
  ${styles.border({ color: `${styles.colors.mainWhite2}` })};
  margin-bottom: 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainYellow};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
`

const SectioButton = styled(BunnerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
`

export { BunnerButton, SectioButton }
