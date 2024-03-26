import { useState, useEffect } from 'react'

export const useDisplayViewSize = () => {
  const [dimensions, setDimensions] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { displayWidth: dimensions }
}
