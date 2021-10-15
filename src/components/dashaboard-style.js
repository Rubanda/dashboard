import styled from "styled-components"
// import { device } from "./Device";

const Mainboard = styled.div`
  /* max-width: 1500px; */
  padding: 20px;
`
const CardTop = styled.div`
  display: grid;
  grid-template-columns: repeat(1) 1fr;
  grid-gap: 35px;
  margin-bottom: 20px;
  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const WalletCard = styled.div`
  background: #f0e8ff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #505050;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 350) {
    font-size: 0.7rem;
  }
`
const IconStyle = styled.div`
  img {
    /* filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(214deg) brightness(102%) contrast(100%); */
    background: #6e3ecb;
    border: 1px solid #fff;
    border-radius: 100%;
    padding: 15px;
  }
`

const MyReacIcons = styled.div`
  color: #6e3ecb;
  border: 1px solid #6e3ecb;
  padding: 5px;
  border-radius: 100%;
  font-size: 50px;
  align-items: center;
`

const ApplyCard = styled.div`
  background: #f7f7f7;
  border-radius: 12px;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  // display: grid;
  // grid-row: 300px;
  // align-content: center;
  // justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const NeedCashText = styled.div`
  fontsize: 20px;
`
const ButtonApply = styled.button`
  background: #4400c2;
  color: #fff;
  font-size: 16px;
  padding: 14px;
  min-width: 25rem;
  border: none;
  margin-bottom: 50px;
  @media(max-width: 1300px){
    min-width: 14rem;
    padding: 18px;
  @media (max-width: 500px){
    min-width: 13rem;
    padding: 10px;
    font-size: 12px;
  }
`
const MiddleCard = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  background: #fff;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
  margin-bottom: 20px;
  figure figcaption {
    font-size: 12px;
    font-weight: 200;
  }
  span {
    font-size: 12px;
  }
  @media (max-width: 600px) {
  }
`
const PaymentText = styled.div`
  display: flex;
  flex-grow: 1;
  font-weight: bold;
  margin-right: auto;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    max-width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
    background: transparent; /* make scrollbar transparent */
    -webkit-appearance: none;
    width: 0;
    height: 0;
`
const LastCard = styled.div`
  display: flex;
  flex-direction: column;
  // grid-template-columns: repeat(auto-fit, auto);
  // grid-auto-flow: dense;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  background: #f7f7f7;
  box-shadow: inset 0px 1px 3px -3px black;
  padding: 2rem;
  border-radius: 12px;
`
const OneCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-flow: dense;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  p {
    display: flex;
    justify-content: center;
  }
  button {
    display: flex;
    justify-content: center;
  }

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`
const SecondCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-flow: dense;
  justify-content: space-evenly;
  align-items: center;

  background: #fff;
  border-radius: 10px;
  p {
    display: flex;
    justify-content: center;
  }
  input {
    display: flex;
    justify-content: center;
  }
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`
const ProcessedBtn = styled.button`
  background: #922c8a;
  color: #fff;
  border-radius: 25px;
  padding: 5px;
  border: none;
  width: fit-content;
`
const OnholdBtn = styled.button`
  background: #4856ab;
  color: #fff;
  border-radius: 25px;
  padding: 5px;
  border: none;
  width: fit-content;
`
export {
  OnholdBtn,
  ProcessedBtn,
  SecondCard,
  LastCard,
  OneCard,
  MiddleCard,
  ButtonApply,
  NeedCashText,
  ApplyCard,
  MyReacIcons,
  IconStyle,
  WalletCard,
  PaymentText,
  Icons,
  CardTop,
  Mainboard,
  Slide,
}
