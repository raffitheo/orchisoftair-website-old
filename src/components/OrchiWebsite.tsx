import React from 'react';

import { Navbar } from './Navbar/Navbar';

import { Container } from './OrchiWebsite.style';

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

    return (
        <Container>
            <Navbar 
                contacts={contacts}
                socials={socials}
            />
        </Container>
    );
}
