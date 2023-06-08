import React from "react"

import SocialsProps from "./ISocialsProps"

import SocialItemLink from "./SocialItemLink/SocialItemLink"

import styles from "./Socials.module.scss"

const Socials = (componentProps: SocialsProps) => (
  <div id={styles["SocialWrapper"]}>
    <div id={styles["SocialContainer"]}>
      {componentProps.socials.map((social, index) => (
        <SocialItemLink
          key={`SocialItemLink${index}`}
          index={index}
          icon={social.icon}
          link={social.link}
          hoverColor={social.hoverColor}
        />
      ))}
    </div>
  </div>
)

export default Socials
