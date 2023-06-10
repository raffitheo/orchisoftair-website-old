import React from "react"

import IconExtensionProps from "./IIconExtensionProps"

import * as icons from "react-feather"

const IconExtension = (componentProps: IconExtensionProps) => {
  const IconComponent = icons[componentProps.name]

  return <IconComponent {...componentProps} />
}

export default IconExtension
