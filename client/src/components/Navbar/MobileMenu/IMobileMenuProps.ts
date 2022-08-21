import { Navigation } from '../../../interfaces/INavigation';

interface IMobileMenuProps {
	currentlySelected: number;
	currentlySelectedSubMenu: number;
	logo: string;
	mobileSubMenuOpen: number;
	navigation: Navigation[];
	onClickElement: (elementIndex: number, subMenuElementIndex: number) => void;
	onDismiss: (elementIndex: number) => void;
}

export type MobileMenuProps = IMobileMenuProps;
