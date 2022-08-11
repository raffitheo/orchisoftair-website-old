import IContact from '../../interfaces/IContact';
import ISocial from '../../interfaces/ISocial';

interface INavbarProps {
	contacts: IContact[];
	navigation: {
		text: string;
		link: string;
		subMenu?: {
			text: string;
			link: string;
		}[];
	}[];
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
