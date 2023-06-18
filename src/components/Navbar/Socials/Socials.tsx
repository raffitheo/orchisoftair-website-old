import React from "react"

import SocialsProps from "./SocialsProps.types"

import SocialItemLink from "./SocialItemLink/SocialItemLink"

import styles from "./Socials.module.scss"

const Socials: React.FC<SocialsProps> = (componentProps: SocialsProps) => (
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
