import { Navigation } from '../../../interfaces/INavigation';

type MobileMenuProps = {
	currentlySelected: number;
	currentlySelectedSubMenu: number;
	logo: string;
	mobileSubMenuOpen: number;
	navigation: Navigation[];
	onClickElement: (elementIndex: number, subMenuElementIndex: number) => void;
	onDismiss: (elementIndex: number) => void;
};

export default MobileMenuProps;
