import { useEffect, useRef, useState } from "react"

export const useHeightElement = () => {
  const [elementHeight, setElementHeight] = useState<number>(0)
  const element = useRef<HTMLElement>(undefined)

  useEffect(() => {
    const gettingHeaderHeight = () => {
      if (element.current?.clientHeight) {
        setElementHeight(element.current?.clientHeight)
      }
    }
    gettingHeaderHeight()
  }, [])

  return {
    elementHeight,
    element,
  }
}