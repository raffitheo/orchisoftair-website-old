interface INavigation {
	text: string;
	link: string;

	subMenu?: {
		text: string;
		link: string;
	}[];
}

export default INavigation;
