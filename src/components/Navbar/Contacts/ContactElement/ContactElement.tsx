import React from "react"

import ContactElementProps from "./ContactElementProps.types"

import IconExtension from "../../../IconExtension/IconExtension"
import { IconName } from "../../../IconExtension/IconExtensionProps.types"

import styles from "./ContactElement.module.scss"

const ContactElement: React.FC<ContactElementProps> = (componentProps: ContactElementProps) => (
  <div className={styles["ContactElement"]}>
    <IconExtension
      name={componentProps.icon as IconName}
      size={16}
      style={{
        left: "8px",
        position: "absolute",
        top: "-3px"
      }}
    />

    <h4 className={styles["ContactTitle"]}>{componentProps.title}</h4>

    <h2 className={styles["ContactInfo"]}>{componentProps.info}</h2>
  </div>
)

export default ContactElement
