import React, { useState } from "react"
import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar.js"
import { Box } from "@mui/material"
import Emails from "../components/Emails.js"


const MainPage = () => {
  const [openDrawer, setOpenDrawer] = useState(true)
  

 

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState)
  }

  return (
    <>
      <Header toggleDrawer={toggleDrawer}   />
      <Box>
        <Sidebar openDrawer={openDrawer} />
        <Emails openDrawer={openDrawer} />
      </Box>
    </>
  )
}

export default MainPage