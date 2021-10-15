import { RiArrowLeftSLine } from "react-icons/ri"
import styled from "styled-components"

const Button = styled.button`
  background-color: transparent;
  border: none;
  min-height: 42px;
  font-size: 50px;
  color: #8e66db;
  padding: 0 24px;
  box-shadow: 0 -1px 0 0 rgba(255 255 255 / 10%);
  text-align: ${(p) => (p.shrink ? "center" : "right")};

  @media (max-width: 800px) {
    display: none;
  }
`

function NavToggle(props) {
  return (
    <Button {...props} onClick={() => props.setShrink(Number(!props.shrink))}>
      <i>
        <RiArrowLeftSLine />
      </i>
    </Button>
  )
}

export default NavToggle
