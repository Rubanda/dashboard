import React, { useState } from "react"
import Sidebar from "../components/Siderbar"
import Dashboard from "../components/Dashboard"
import Header from "../components/Header"
import styled from "styled-components"
// import { device } from '../components/Device'
import { BrowserRouter } from "react-router-dom"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "nav main main main";
  min-height: 100vh;
`
const GridSidebar = styled.div`
  grid-area: nav;
  background: #ffffff;
`
const GridHeader = styled.header`
  background: #ffffff;
  grid-area: header;
  height: 48px;
`

const GridDashboard = styled.main`
  background: #f5f1fb;
  grid-area: main;
`

function App() {
  const [sidebar, setSidebar] = useState(false)
  // const [mobile, setMobile] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  // const [sidebar, setSidebar] = useState(false)

  return (
    <BrowserRouter>
      <Grid>
        <GridHeader>
          <Header clicked={showSidebar} />
        </GridHeader>

        <GridSidebar>
          <Sidebar visible={sidebar} close={showSidebar} />
        </GridSidebar>

        <GridDashboard>
          <Dashboard />
        </GridDashboard>
      </Grid>
    </BrowserRouter>
  )
}
export default App
