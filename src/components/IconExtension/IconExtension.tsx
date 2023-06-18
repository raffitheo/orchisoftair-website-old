import React from "react"

import IconExtensionProps from "./IconExtensionProps.types"

import * as icons from "react-feather"

const IconExtension: React.FC<IconExtensionProps> = (componentProps: IconExtensionProps) => {
  const IconComponent = icons[componentProps.name]

  return <IconComponent {...componentProps} />
}

export default IconExtension
