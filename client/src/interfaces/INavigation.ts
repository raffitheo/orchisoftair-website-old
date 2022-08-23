type NavigationBase = {
	text: string;
};

type NavigationWithLink = {
	link: string;
} & NavigationBase;

type NavigationWithSubmenu = {
	subMenu: {
		text: string;
		link: string;
	}[];
} & NavigationBase;

export type Navigation = NavigationWithLink | NavigationWithSubmenu;
