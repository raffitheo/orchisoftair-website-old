import { Navigation } from "@interfaces/Navigation.types"

type MobileMenuProps = {
  currentlySelected: number
  currentlySelectedSubMenu: number
  logo: string
  mobileSubMenuOpen: number
  navigation: Array<Navigation>
  onClickElement: (elementIndex: number, subMenuElementIndex: number) => void
  onDismiss: (elementIndex: number) => void
}

export default MobileMenuProps
