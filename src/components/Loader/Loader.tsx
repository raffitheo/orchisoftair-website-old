import React from "react"

import LoaderProps from "./ILoaderProps"

import styles from "./Loader.module.scss"

const Loader = (componentProps: LoaderProps) => (
  <div
    className={`${styles["LoaderElement"]}${componentProps.fadeOut ? ` ${styles["FadeOut"]}` : ""}${
      componentProps.className ? ` ${componentProps.className}` : ""
    }`}
    id={componentProps.id}
    style={componentProps.style}
  />
)

export default Loader
