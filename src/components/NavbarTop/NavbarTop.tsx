import React from 'react';

import { INavbarTopProps } from './INavbarTopProps';

import { IconExtension } from '../IconExtension/IconExtension';
import { IconName } from '../IconExtension/IIconExtensionProps';

import logo from '../../assets/logo.png';

import {
    ContactInfo,
    Contacts,
    ContactsContainer,
    ContactsWrapper,
    ContactTitle,
    Container,
    Logo,
    LogoImage,
    LogoWrapper,
    Row,
    SocialLink,
    Socials,
    SocialsWrapper,
    Wrapper
} from './NavbarTop.style';

export const NavbarTop: React.FC<INavbarTopProps> = ({contacts, socials, className, id, style}) => {
    return (
        <Wrapper
            className={className}
            id={id}
            style={style}
        >
            <Container>
                <Row>
                    <LogoWrapper>
                        <Logo>
                            <a
                                href='#'
                            >
                                <LogoImage
                                    alt='logo'
                                    src={logo}
                                />
                            </a>
                        </Logo>
                    </LogoWrapper>

                    <ContactsWrapper>
                        <ContactsContainer>
                            <>
                                {contacts.map((contact, index) => {
                                    return (
                                        <Contacts
                                            key={`Contact${index}`}
                                        >
                                            <IconExtension
                                                name={contact.icon as IconName}
                                                size={16}
                                                style={{
                                                    left: '8px',
                                                    position: 'absolute',
                                                    top: '-3px'
                                                }}
                                            />
                                            <ContactTitle>
                                                {contact.title}
                                            </ContactTitle>

                                            <ContactInfo>
                                                {contact.info}
                                            </ContactInfo>
                                        </Contacts>
                                    );
                                })}
                            </>
                        </ContactsContainer>
                    </ContactsWrapper>

                    <SocialsWrapper>
                        <Socials>
                            <>
                                {socials.map((social, index) => {
                                    return (
                                        <SocialLink
                                            href={social.link}
                                            key={`Social${index}`}
                                            hoverColor={social.hoverColor}
                                        >
                                            <IconExtension
                                                name={social.icon as IconName}
                                                size={18}
                                                style={{
                                                    margin: 'auto'
                                                }}
                                            />
                                        </SocialLink>
                                    );
                                })}
                            </>
                        </Socials>
                    </SocialsWrapper>
                </Row>
            </Container>
        </Wrapper>
    );
};