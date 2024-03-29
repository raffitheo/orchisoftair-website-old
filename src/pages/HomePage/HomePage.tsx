import React from "react"

import HomePageProps from "./HomePageProps.types"

import LandingSlider from "@components/LandingSlider/LandingSlider"
import LandingCards from "@components/LandingCards/LandingCards"

import styles from "./HomePage.module.scss"

const HomePage: React.FC<HomePageProps> = (componentProps: HomePageProps) => (
  <>
    <div
      id={styles["HomeWrapper"]}
      style={{
        height: `calc((100vh - ${componentProps.navbarHeight}px) + 50px)`,
        scrollMarginTop: `${componentProps.navbarHeight}px`
      }}
    >
      <div
        id="home"
        style={{
          left: "0",
          position: "absolute",
          top: `-${componentProps.navbarHeight}px`
        }}
      />

      <LandingSlider navbarHeight={componentProps.navbarHeight} sliders={componentProps.sliders} />

      <LandingCards />
    </div>

    <div style={{ height: "100vh" }} />
  </>
)

export default HomePage
