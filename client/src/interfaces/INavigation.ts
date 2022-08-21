interface INavigation {
	text: string;
}

interface INavigationWithLink extends INavigation {
	link: string;
}

interface INavigationWithSubmenu extends INavigation {
	subMenu: {
		text: string;
		link: string;
	}[];
}

export type Navigation = INavigationWithLink | INavigationWithSubmenu;
