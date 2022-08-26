import { Contact } from '../interfaces/IContact';
import { Navigation } from '../interfaces/INavigation';
import { Social } from '../interfaces/ISocial';

export const ContactElements: Contact[] = [
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

export const NavigationElements: Navigation[] = [
    {
        text: 'Home',
        link: '#home',
    },
    {
        text: 'Chi siamo',
        subMenu: [
            {
                text: 'L\'associazione',
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

export const SocialElements: Social[] = [
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
