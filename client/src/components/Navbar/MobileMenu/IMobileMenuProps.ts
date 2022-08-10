interface IMobileMenuProps {
	currentlySelected: number;
	currentlySelectedSubMenu: number;
	logo: string;
	mobileSubMenuOpen: number;
	navigation: {
		text: string;
		link: string;
		subMenu?: {
			text: string;
			link: string;
		}[];
	}[];
	onClickElement: (elementIndex: number, subMenuElementIndex: number) => void;
	onDismiss: (elementIndex: number) => void;
}

export default IMobileMenuProps;
