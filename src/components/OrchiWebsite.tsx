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
            info: '??? ??? ????'
        }
    ];
    var socials: {
        icon: string,
        link: string
    }[] = [
        {
            link: 'https://www.instagram.com/orchisoftair_official/',
            icon: 'Instagram'
        },
        {
            link: 'https://www.facebook.com/orchitrieste/',
            icon: 'Facebook'
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
