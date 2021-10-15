import React, { useState } from "react"
import styled from "styled-components"
import {
  AiOutlineHome,
  IoIosPhonePortrait,
  MdPhonelinkSetup,
  RiBillLine,
  RiFileSettingsLine,
  GrCompliance,
  BsFillChatDotsFill,
  IoMdLogOut,
} from "react-icons/all"
import Backdrop from "../ui/Backdrop"
import Logo from "./Logo"
// import NavToggle from "./button/Toggle"

const StyledNav = styled.section`
  background: #fff;
  overflow-y: auto;
  width: ${(p) => (p.shrink ? "70px" : "300px")};
  height: 100vh;
  position: relative;
  z-index: 1000;
  @media (max-width: 799px) {
    position: fixed;
    transform: translate3d(
      ${(p) => (p.visible ? 0 : "calc(300px - (300px * 2))")},
      0,
      0
    );
    transition: transform 0.3s
      ${(p) =>
        p.visible
          ? "cubic-bezier(0.4,0,1,1)"
          : "cubic-bezier(0,0,0.2,1)"} !important;
  }
`
const Ul = styled.ul`
  list-style-type: none;
`

const Tag = styled.a`
  display: flex;
  align-items: center;
`

export default function Sidebar(props) {
  const [shrink, setShrink] = useState(0)

  return (
    <>
      <Backdrop visible={props.visible} onClick={props.close} />
      <StyledNav {...props} shrink={shrink}>
        <Logo {...props} shrink={shrink} />
        <Ul>
          <li>
            <Tag>
              <AiOutlineHome
                style={{ marginRight: "10px", cursor: "pointer",fontSize: "30px" }}
              />
              <p>Home</p>
            </Tag>
          </li>
          <li>
            <Tag>
              <IoIosPhonePortrait
                style={{ marginRight: "10px", fontSize: "30px" }}
              />
              <p>Buy Airtime</p>
            </Tag>
          </li>
          <li>
            <Tag>
              <MdPhonelinkSetup
                style={{ marginRight: "10px", fontSize: "30px" }}
              />
              <p>Send Money</p>
            </Tag>
          </li>
          <li>
            <Tag>
              <RiBillLine style={{ marginRight: "10px", fontSize: "30px" }} />
              <p>Bills Payment</p>
            </Tag>
          </li>
          <li>
            <Tag>
              <RiFileSettingsLine
                style={{ marginRight: "10px", fontSize: "30px" }}
              />
              <p>Free Credit Report</p>
            </Tag>
          </li>
          <li>
            <Tag>
              <GrCompliance style={{ marginRight: "10px", fontSize: "30px" }} />
              <p>Complaints</p>
            </Tag>
          </li>
          <li>
            <Tag>
              <BsFillChatDotsFill
                style={{ marginRight: "10px", fontSize: "30px" }}
              />
              <p>Contact Us</p>
            </Tag>
          </li>
          <li>
            <Tag>
              <IoMdLogOut style={{ marginRight: "10px", fontSize: "30px" }} />
              <p>Logout</p>
            </Tag>
          </li>
        </Ul>
        {/* <NavToggle shrink={shrink} setShrink={setShrink} /> */}

        {/* <button onClick={()=>setShrink(Number(!shrink))}>g</button> */}
      </StyledNav>
    </>
  )
}
