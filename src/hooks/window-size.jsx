import { useLayoutEffect, useState } from "react"

/**
 * Window size for responsive chrome. Always starts at [0, 0] so SSR HTML
 * and the client's first hydration render match (avoids React #423).
 * Real dimensions are applied after mount via useLayoutEffect.
 */
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}

export default useWindowSize
