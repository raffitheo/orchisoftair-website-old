import { Contact } from '../../interfaces/IContact';
import { Navigation } from '../../interfaces/INavigation';
import { Social } from '../../interfaces/ISocial';

type NavbarProps = {
	contacts: Contact[];
	navigation: Navigation[];
	socials: Social[];
	onMobileMenuChange: (
		newValue: boolean,
		event?: React.ChangeEvent<HTMLInputElement>
	) => void;

	className?: string | undefined;
	style?: React.CSSProperties | undefined;
};

export default NavbarProps;
