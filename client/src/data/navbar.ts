import IContact from '../interfaces/IContact';
import INavigation from '../interfaces/INavigation';
import ISocial from '../interfaces/ISocial';

const Contacts = (): IContact[] => {
	return [
		{
			icon: 'AtSign',
			title: 'Scrivici',
			info: 'info@orchisoftair.it',
		},
		{
			icon: 'Phone',
			title: 'Chiamaci',
			info: '+39 348 469 1962',
		},
	];
};

const Navigation = (): INavigation[] => {
	return [
		{
			text: 'Home',
			link: '#home',
		},
		{
			text: 'Chi siamo',
			link: '#chi-siamo',
			subMenu: [
				{
					text: "L'associazione",
					link: '#chi-siamo-l-associazione',
				},
				{
					text: 'Il team',
					link: '#chi-siamo-il-team',
				},
				{
					text: 'Dove giochiamo',
					link: '#chi-siamo-dove-giochiamo',
				},
			],
		},
		{
			text: 'Eventi',
			link: '#event',
			subMenu: [
				{
					text: 'In arrivo',
					link: '#eventi-in-arrivo',
				},
				{
					text: 'Storico',
					link: '#eventi-storico',
				},
			],
		},
		{
			text: 'Contatti',
			link: '#contatti',
		},
		{
			text: 'Area riservata',
			link: 'area-riservata',
		},
	];
};

const Socials = (): ISocial[] => {
	return [
		{
			link: 'https://www.instagram.com/orchisoftair_official/',
			icon: 'Instagram',
			hoverColor: 'hsl(326, 57%, 48%)',
		},
		{
			link: 'https://www.facebook.com/orchitrieste/',
			icon: 'Facebook',
			hoverColor: 'hsl(214, 89%, 52%)',
		},
	];
};

export { Contacts, Navigation, Socials };
