import React,
    {
        useEffect,
        useState
    }
from 'react';
import { NavbarSticky } from './NavbarSticky/NavbarSticky';

import { NavbarTop } from './NavbarTop/NavbarTop';

export const OrchiWebsite: React.FC = () => {
    var contacts: {
        icon: string,
        title: string,
        info: string
    }[] = [
        {
            icon: 'AtSign',
            title: 'Scrivici',
            info: 'info@orchisoftair.it'
        },
        {
            icon: 'Phone',
            title: 'Chiamaci',
            info: '+39 348 469 1962'
        }
    ];
    var socials: {
        icon: string,
        link: string,
        hoverColor: string
    }[] = [
        {
            link: 'https://www.instagram.com/orchisoftair_official/',
            icon: 'Instagram',
            hoverColor: 'hsl(349, 75%, 31%)'
        },
        {
            link: 'https://www.facebook.com/orchitrieste/',
            icon: 'Facebook',
            hoverColor: 'hsl(349, 75%, 31%)'
        }
    ];

    var navigation: {
        text: string,
        link: string,
        subMenu?: {
            text: string,
            link: string
        }[]
    }[] = [
        {
            text: 'Home',
            link: '#'
        },
        {
            text: 'Chi siamo',
            link: '#',
            subMenu: [
                {
                    text: 'L\'associazione',
                    link: '#'
                },
                {
                    text: 'Il team',
                    link: '#'
                }
            ]
        },
        {
            text: 'Il gioco',
            link: '#',
            subMenu: [
                {
                    text: 'Softair',
                    link: '#'
                },
                {
                    text: 'Il nostro campo',
                    link: '#'
                }
            ]
        },
        {
            text: 'Contattaci',
            link: '#'
        }
    ];
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [topNavElement, setTopNavElement] = useState<Element>();

    const handleScroll = () => {
        var position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        var topNav = document.getElementById('top-bar');
        if (topNav)
            setTopNavElement(topNav);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <NavbarTop
                contacts={contacts}
                socials={socials}
                id={'top-bar'}
            />

            <NavbarSticky
                navigation={navigation}
                style={{
                    top: topNavElement ? scrollPosition > (topNavElement as unknown as HTMLElement).clientHeight ? '0' : '-100%' : '-100%'
                }}
            />

            <div
                style={{
                    height: '200vh'
                }}
            ></div>
        </>
    );
}
