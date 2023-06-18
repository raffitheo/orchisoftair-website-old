import { Contact } from "@interfaces/Contact.types"
import { Navigation } from "@interfaces/Navigation.types"
import { Social } from "@interfaces/Social.types"

type NavbarProps = {
  contacts: Array<Contact>
  className?: string | undefined
  navigation: Array<Navigation>
  socials: Array<Social>
  style?: React.CSSProperties | undefined
  onMobileMenuChange: (newValue: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void
}

export default NavbarProps
