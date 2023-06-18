import React, { createContext, lazy, Suspense, useEffect, useRef, useState } from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Contact } from "@interfaces/Contact.types"
import { Navigation } from "@interfaces/Navigation.types"
import { Slider } from "@interfaces/Slider.types"
import { Social } from "@interfaces/Social.types"

import ContactData from "../mock/ContactData.json"
import NavbarData from "../mock/NavbarData.json"
import SliderData from "../mock/SliderData.json"
import SocialData from "../mock/SocialData.json"

import styles from "./OrchiWebsite.module.scss"

const BackToTop = lazy(() => import("@components/BackToTop/BackToTop"))
const Loader = lazy(() => import("@components/Loader/Loader"))
const Navbar = lazy(() => import("@components/Navbar/Navbar"))

const HomePage = lazy(() => import("../pages/HomePage/HomePage"))

const DATA_STATUS = {
  ERROR: "ERROR",
  INITIALIZED: "INITIALIZED",
  LOADING: "LOADING",
  LOADED: "LOADED"
} as const

type ObjectValues<T> = T[keyof T]

type DataStatus = ObjectValues<typeof DATA_STATUS>

const DEFAUTL_MOBILE_MAX_SIZE = 767
const DEFAUTL_MOBILE_MIN_SIZE = 319

export const BaseURL = createContext("")
export const IsMobileContext = createContext(false)
export const PageSizeContext = createContext(0)
export const ScrollSizeContext = createContext(0)

const OrchiWebsite: React.FC = () => {
  const [canRender, setCanRender] = useState(false)
  const [dataState, setDataState] = useState<DataStatus>(DATA_STATUS.INITIALIZED)
  const [isMobile, setIsMobile] = useState(false)
  const [pageSize, setPageSize] = useState(0)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [scrollSize, setScrollSize] = useState(0)
  const [showLoader, setShowLoader] = useState(true)

  const pageContent = useRef<HTMLDivElement>(null)

  const getBaseURL =
    window.location.href.indexOf("github") !== -1 || window.location.href.indexOf("localhost") !== -1
      ? "/orchisoftair-website"
      : "/"

  const getContactData = JSON.parse(JSON.stringify(ContactData)) as Array<Contact>
  const getNavbarData = JSON.parse(JSON.stringify(NavbarData)) as Array<Navigation>
  const getSliderData = JSON.parse(JSON.stringify(SliderData)) as Array<Slider>
  const getSocialData = JSON.parse(JSON.stringify(SocialData)) as Array<Social>

  const onMobileMenuChange = (newValue: boolean) => {
    const navbar = document.querySelector(`[id*=${"\""}NavbarWrapper${"\""}]`) as HTMLElement
    const navbarMobile = document.querySelector(`[id*=${"\""}MobileMenuWrapper${"\""}]`) as HTMLElement

    if (navbar && navbarMobile && pageContent && pageContent.current) {
      if (newValue) {
        navbar.style.transform = "translateX(250px)"
        navbarMobile.style.transform = "translateX(250px)"
        pageContent.current.style.paddingLeft = "250px"
      } else {
        navbar.style.transform = "translateX(0)"
        navbarMobile.style.transform = "translateX(0)"
        pageContent.current.style.paddingLeft = "0"
      }
    }
  }

  useEffect(() => {
    setDataState(DATA_STATUS.LOADING)

    setTimeout(() => {
      setDataState(DATA_STATUS.LOADED)
      setCanRender(true)

      setTimeout(() => setShowLoader(false), 500)
    }, Math.floor(Math.random() * (2500 - 1000 + 1)) + 1000)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollSize(window.pageYOffset)

    const handleResize = () => {
      const width = window.innerWidth
      const mobile = width > DEFAUTL_MOBILE_MAX_SIZE || width < DEFAUTL_MOBILE_MIN_SIZE ? false : true

      setIsMobile(mobile)
      setPageSize(width)

      if (!mobile) {
        onMobileMenuChange(false)
      }

      if (pageContent && pageContent.current) {
        pageContent.current.style.marginTop = `${navbarHeight}px)`
      }
    }

    if (canRender) {
      handleScroll()
      handleResize()

      window.addEventListener("scroll", handleScroll)
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (canRender) {
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [canRender])

  useEffect(() => {
    const navbar = document.querySelector("[id*=\"NavbarWrapper\"]") as HTMLElement

    if (navbar) {
      setNavbarHeight(navbar.offsetHeight)
    }
  }, [pageSize])

  return (
    <Suspense
      fallback={
        <div
          className={`${dataState === DATA_STATUS.LOADED ? `${styles["FadeOut"]}` : ""}`}
          id={`${styles["MainLoader"]}`}
        >
          <div
            style={{
              left: "50%",
              position: "absolute",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <Loader fadeOut={dataState === DATA_STATUS.LOADED} />
          </div>
        </div>
      }
    >
      {showLoader ? (
        <div
          className={`${dataState === DATA_STATUS.LOADED ? `${styles["FadeOut"]}` : ""}`}
          id={`${styles["MainLoader"]}`}
        >
          <div
            style={{
              left: "50%",
              position: "absolute",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <Loader fadeOut={dataState === DATA_STATUS.LOADED} />
          </div>
        </div>
      ) : (
        <></>
      )}

      {dataState === DATA_STATUS.LOADED ? (
        <BaseURL.Provider value={getBaseURL}>
          <IsMobileContext.Provider value={isMobile}>
            <PageSizeContext.Provider value={pageSize}>
              <ScrollSizeContext.Provider value={scrollSize}>
                <Router>
                  <Navbar
                    contacts={getContactData}
                    navigation={getNavbarData}
                    socials={getSocialData}
                    onMobileMenuChange={onMobileMenuChange}
                  />

                  <BackToTop minVisibleSize={114} />

                  <div
                    id={styles["PageContent"]}
                    ref={pageContent}
                    style={{
                      marginTop: `${navbarHeight}px`
                    }}
                  >
                    <Routes>
                      <Route
                        element={<HomePage navbarHeight={navbarHeight} sliders={getSliderData} />}
                        path={getBaseURL}
                      />
                    </Routes>
                  </div>
                </Router>
              </ScrollSizeContext.Provider>
            </PageSizeContext.Provider>
          </IsMobileContext.Provider>
        </BaseURL.Provider>
      ) : (
        <></>
      )}
    </Suspense>
  )
}

export default OrchiWebsite
