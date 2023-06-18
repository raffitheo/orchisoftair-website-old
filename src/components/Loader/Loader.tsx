import React from "react"

import LoaderProps from "./LoaderProps.types"

import styles from "./Loader.module.scss"

const Loader: React.FC<LoaderProps> = (componentProps: LoaderProps) => (
  <div
    className={`${styles["LoaderElement"]}${componentProps.fadeOut ? ` ${styles["FadeOut"]}` : ""}${
      componentProps.className ? ` ${componentProps.className}` : ""
    }`}
    id={componentProps.id}
    style={componentProps.style}
  />
)

export default Loader
