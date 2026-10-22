import React, { useEffect, useState } from "react"
import useWindowSize from "../hooks/window-size"
import { breakpoint } from "../data/site"
import Header from "./Header.jsx"
import Drawer from "./Drawer.jsx" // mobile nav + SVG social icons

const SiteChrome = () => {
  const [drawerOpened, setOpened] = useState(false)
  const [width] = useWindowSize()

  const toggleDrawer = () => setOpened((state) => !state)

  useEffect(() => {
    if (width > breakpoint && drawerOpened) {
      setOpened(false)
    }
  }, [width, drawerOpened])

  return (
    <>
      <Header drawer={toggleDrawer} />
      {width < breakpoint ? (
        <Drawer opened={drawerOpened} close={toggleDrawer} />
      ) : null}
    </>
  )
}

export default SiteChrome
