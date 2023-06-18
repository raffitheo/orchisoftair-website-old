import React, { useContext, useEffect, useState } from "react"

import BackToTopProps from "./BackToTopProps.types"
import IconExtension from "../IconExtension/IconExtension"

import { ScrollSizeContext } from "../../pages/OrchiWebsite"

import styles from "./BackToTop.module.scss"

const BackToTop: React.FC<BackToTopProps> = (componentProps: BackToTopProps) => {
  const [overrideVisible, setOverrideVisible] = useState(true)
  const [visible, setVisible] = useState(false)

  const scrollSize = useContext(ScrollSizeContext)

  const backToTop = () => {
    const scrollTo = (offset: number, callback: () => void) => {
      const fixedOffset = offset.toFixed()
      const onScroll = () => {
        if (window.pageYOffset.toFixed() === fixedOffset) {
          window.removeEventListener("scroll", onScroll)
          callback()
        }
      }

      window.addEventListener("scroll", onScroll)
      onScroll()
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      })
    }

    setOverrideVisible(false)

    scrollTo(0, () => setOverrideVisible(true))
  }

  useEffect(() => {
    const handleVisibility = () => {
      if (overrideVisible) {
        if (scrollSize > componentProps.minVisibleSize) {
          if (componentProps.maxVisibleSize) {
            if (scrollSize < componentProps.maxVisibleSize) {
              setVisible(true)
            } else {
              setVisible(false)
            }
          } else {
            setVisible(true)
          }
        } else {
          setVisible(false)
        }
      } else {
        setVisible(false)
      }
    }

    handleVisibility()
  }, [overrideVisible, scrollSize])

  return (
    <div className={`${styles["BackToTop"]}${visible ? ` ${styles["Active"]}` : ""}`} onClick={backToTop}>
      <IconExtension name="ChevronUp" size={35} />
    </div>
  )
}

export default BackToTop
