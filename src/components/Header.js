import { BiMenuAltLeft } from "react-icons/bi"
import { Link } from "react-router-dom"
import styled from "styled-components"

const MenuIconButton = styled.div`
  margin-left: 1rem;
  font-size: 2.5rem;
`

const Header = ({ clicked }) => {
  return (
    <MenuIconButton>
      <Link to="/">
        <BiMenuAltLeft onClick={clicked} />
      </Link>
    </MenuIconButton>
  )
}

export default Header
