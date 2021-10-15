import {
  IoIosArrowBack,
  IoIosArrowForward,
  AiOutlineWallet,
  GiBank,
  VscCreditCard,
} from "react-icons/all"
import { IconContext } from "react-icons"
import {
  OnholdBtn,
  ProcessedBtn,
  SecondCard,
  LastCard,
  OneCard,
  MiddleCard,
  ButtonApply,
  NeedCashText,
  ApplyCard,
  WalletCard,
  Icons,
  PaymentText,
  CardTop,
  Slide,
  Mainboard,
} from "./dashaboard-style"
import { useRef } from "react"

const sideScroll = (element, direction, speed, distance, step) => {
  let scrollAmount = 0
  const slideTimer = setInterval(() => {
    if (direction === "left") {
      element.scrollLeft -= step
    }else{
      element.scrollLeft += step

    }
    scrollAmount += Math.abs(step)
    if (scrollAmount >= distance) {
      clearInterval(slideTimer)
    }
  }, speed)
}

function Dashboard() {
  const contentWrapper = useRef(null)

  return (
    <Mainboard>
      {/* top */}
      <CardTop>
        <WalletCard>
          <div
            style={{
              display: "flex",
              alignContent: "start",
              justifyContent: "space-between",
              fontWeight: "200",
              fontSize: "20px",
            }}
          >
            <p
              style={{
                marginLeft: "1rem",
                color: "#4d4b4b",
                fontWeight: "400",
              }}
            >
              YOUR WALLET
            </p>
            <p
              style={{
                marginRight: "1rem",
                color: "#4d4b4b",
                fontWeight: "400",
              }}
            >
              Feb 2.2021
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Wallet Balance</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "-5rem",
              }}
            >
              <img
                src="images/naira.png"
                width="35px"
                height="35px"
                alt="naira symbol"
              />
              <p style={{ marginLeft: "10px", fontSize: "60px" }}>14.61</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Icons>
              <IconContext.Provider value={{ color: "white", size: "40px" }}>
                <VscCreditCard
                  style={{
                    background: "#6f3ecc",
                    borderRadius: "100%",
                    padding: "8px",
                    alignTextAlign: "center",
                  }}
                />
              </IconContext.Provider>
              <p>Withdraw</p>
            </Icons>
            <Icons>
              <IconContext.Provider value={{ color: "white", size: "40px" }}>
                <AiOutlineWallet
                  style={{
                    background: "#6f3ecc",
                    borderRadius: "100%",
                    padding: "8px",
                    alignTextAlign: "center",
                  }}
                />
              </IconContext.Provider>
              <p>Fund Wallet</p>
            </Icons>
            <Icons>
              <IconContext.Provider value={{ color: "white", size: "40px" }}>
                <GiBank
                  style={{
                    background: "#6f3ecc",
                    borderRadius: "100%",
                    padding: "8px",
                    alignTextAlign: "center",
                  }}
                />
              </IconContext.Provider>
              <p>Transactions</p>
            </Icons>
          </div>
        </WalletCard>

        <ApplyCard>
          <NeedCashText>
            <p>Need cash Instantly?</p>
          </NeedCashText>
          <div>
            <ButtonApply>Apply for a loan</ButtonApply>
          </div>
        </ApplyCard>
      </CardTop>
      {/* middle */}
      <MiddleCard>
        <PaymentText>
          <p style={{ marginLeft: "20px" }}>MAKE PAYMENTS </p>
          <span>
            <img
              style={{
                textAlign: "center",
                filter:
                  "invert(48%) sepia(17%) saturate(6858%) hue-rotate(231deg) brightness(91%) contrast(86%)",
              }}
              src="icons/information.png"
              alt="info"
              width="20px"
              height="20px"
            />
          </span>
        </PaymentText>
        <span
          onClick={() => {
            sideScroll(contentWrapper.current,"left" ,50, 100, 130)
          }}
        >
          <IconContext.Provider
            value={{ style: { color: "#4204b8", fontSize: "40px" } }}
          >
            <IoIosArrowBack />
          </IconContext.Provider>
        </span>
        <Slide ref={contentWrapper}>
          <figure>
            <img
              src="icons/donation.png"
              alt="donation"
              width="50px"
              height="50px"
            />
            <figcaption>
              <span>Donation & Charities</span>
            </figcaption>
          </figure>
          <figure>
            <img
              src="icons/healthcare.png"
              alt="health"
              width="50px"
              height="50px"
            />
            <figcaption>Insurance</figcaption>
          </figure>
          <figure>
            <img
              src="icons/credit-card.png"
              alt="credit-card"
              width="50px"
              height="50px"
            />
            <figcaption>Payment Services</figcaption>
          </figure>
          <figure>
            <img
              src="icons/call-center-agent.png"
              alt="call-center-agent"
              width="50px"
              height="50px"
            />
            <figcaption>Agent & Dealers</figcaption>
          </figure>
          <figure>
            <img
              style={{ jjustifyItems: "end" }}
              src="icons/card.png"
              alt="card"
              width="50px"
              height="50px"
            />
            <figcaption>visa & Embassy Payments</figcaption>
          </figure>
          <figure>
            <img
              src="icons/donation.png"
              alt="donation"
              width="50px"
              height="50px"
            />
            <figcaption>
              <span>Donation & Charities</span>
            </figcaption>
          </figure>
          <figure>
            <img
              src="icons/healthcare.png"
              alt="health"
              width="50px"
              height="50px"
            />
            <figcaption>Insurance</figcaption>
          </figure>
          <figure>
            <img
              src="icons/credit-card.png"
              alt="credit-card"
              width="50px"
              height="50px"
            />
            <figcaption>Payment Services</figcaption>
          </figure>
          <figure>
            <img
              src="icons/call-center-agent.png"
              alt="call-center-agent"
              width="50px"
              height="50px"
            />
            <figcaption>Agent & Dealers</figcaption>
          </figure>
          <figure>
            <img
              style={{ jjustifyItems: "end" }}
              src="icons/card.png"
              alt="card"
              width="50px"
              height="50px"
            />
            <figcaption>visa & Embassy Payments</figcaption>
          </figure>
        </Slide>
        <span
          onClick={() => {
            sideScroll(contentWrapper.current,"right", 50, 100, 130)
          }}
        >
          <IconContext.Provider
            value={{ style: { color: "#4204b8", fontSize: "40px" } }}
          >
            <IoIosArrowForward />
          </IconContext.Provider>
        </span>
      </MiddleCard>

      {/* last */}
      <LastCard>
        <OneCard>
          <img
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            src="images/chocolate-cake.jpg"
            width="100%"
            object="contain"
            height="100%"
            alt="chocolate"
          />
          <p className="gir">Chocolate Cake</p>
          <p>Cakes</p>
          <p>09.04.2018</p>
          <ProcessedBtn>PROCESSED</ProcessedBtn>
          <input type="checkbox" />
        </OneCard>
        <SecondCard>
          <img
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            src="images/chocolate-cake.jpg"
            width="100%"
            height="100%"
            alt="chocolate"
          />
          <p>Cheese Cake</p>
          <p>Cupcakes</p>
          <p>09.04.2018</p>
          <OnholdBtn>ON HOLD</OnholdBtn>
          <input type="checkbox" />
        </SecondCard>
      </LastCard>
    </Mainboard>
  )
}

export default Dashboard
