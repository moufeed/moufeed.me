import React, { useLayoutEffect, useState } from "react"

const ScrollTop = ({ showBelow = 250 }) => {
  const [show, setShow] = useState(false)

  useLayoutEffect(() => {
    const handleScroll = () => {
      setShow(window.pageYOffset > showBelow)
    }

    if (showBelow) {
      window.addEventListener("scroll", handleScroll)
      handleScroll()
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [showBelow])

  const clickHandle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!show) return null

  return (
    <button onClick={clickHandle} className="btn btn-backTop" type="button">
      &#x21a5;
    </button>
  )
}

export default ScrollTop
