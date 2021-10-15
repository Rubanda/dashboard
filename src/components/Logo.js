import styled from "styled-components"

const SidebarLogo = styled.div`
  background: #8e66db;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  color: #fff;
  .logo {
    opacity: ${(p) => Number(!p.shrink)};
    color: rgba(255, 255, 255, 0.9);
    transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
    display: flex;
  }
`
const ImageLogo = styled.img`
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
`
const ButtonLogo = styled.div`
  border: 1px solid #fff;
  border-radius: 30px;
  padding: 10px;
`
const CancleBtn = styled.div`
  position: absolute;
  border: 1px solid black;
  cursor: pointer;
  opacity: 0.8;
  background: #000000;
  border-radius: 10px;
  padding: 10px;
  top: 0;
  right: 0;
  @media (min-width: 788px) {
    display: none;
  }
`

const Logo = (props) => {
  return (
    <SidebarLogo>
      <CancleBtn onClick={props.close}>X</CancleBtn>
      <div className="logo">
        <div>
          <ImageLogo
            src="images/elon.jpg"
            alt=""
            width="100px"
            height="100px"
          />
        </div>
        <div>
          <p>Elon Musk</p>
          <p>ID: 9AD34990</p>
          <ButtonLogo>View Profile</ButtonLogo>
        </div>
      </div>
    </SidebarLogo>
  )
}

export default Logo
