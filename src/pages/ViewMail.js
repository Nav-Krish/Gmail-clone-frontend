import React, { useState } from "react"
import ViewEmail from "../components/ViewEmail.js"
import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar.js"

const ViewMail = () => {

    const [openDrawer, setOpenDrawer] = useState(true)

    const toggleDrawer = () => {
      setOpenDrawer((prevState) => !prevState)
    }

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <ViewEmail openDrawer={openDrawer} />
    </>
  )
}

export default ViewMail