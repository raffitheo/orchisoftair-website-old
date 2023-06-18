type NavigationBase = {
  text: string
}

type NavigationWithLink = {
  link: string
} & NavigationBase

type NavigationWithSubmenu = {
  subMenu: Array<{
    text: string
    link: string
  }>
} & NavigationBase

export type Navigation = NavigationWithLink | NavigationWithSubmenu
