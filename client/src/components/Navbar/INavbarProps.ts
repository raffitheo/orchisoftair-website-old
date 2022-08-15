import IContact from '../../interfaces/IContact';
import INavigation from '../../interfaces/INavigation';
import ISocial from '../../interfaces/ISocial';

interface INavbarProps {
	contacts: IContact[];
	navigation: INavigation[];
	socials: ISocial[];
	onMobileMenuChange: (
		newValue: boolean,
		event?: React.ChangeEvent<HTMLInputElement>
	) => void;
	isMobile: boolean;

	className?: string | undefined;
	style?: React.CSSProperties | undefined;
	small?: boolean;
}

export default INavbarProps;
