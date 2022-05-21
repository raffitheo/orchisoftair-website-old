import React, { useState } from 'react';

import { INavbarStickyProps } from './INavbarStickyProps';

import {
    Container,
    MainMenu,
    MainMenuDesktop,
    MainMenuElement,
    MainMenuElementSubMenu,
    MainMenuElementSubMenuElement,
    MainMenuElementSubMenuElementText,
    MainMenuElementText,
    MainMenuWrapper,
    Row,
    Wrapper
} from './NavbarSticky.style';

export const NavbarSticky: React.FC<INavbarStickyProps> = ({navigation, className, id, style}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedSubMenuIndex, setSelectedSubMenuIndex] = useState(0);

    return (
        <Wrapper
            className={className}
            id={id}
            style={style}
        >
            <Container>
                <Row>
                    <MainMenuWrapper>
                        <MainMenu>
                            <MainMenuDesktop>
                                <>
                                    {navigation.map((element, index) => {
                                        return (
                                            <MainMenuElement
                                                className={selectedIndex === index ? 'currently-selected menu' : 'menu'}
                                                key={`Element${index}`}
                                            >
                                                <MainMenuElementText
                                                    href={element.link}
                                                    onClick={(event) => {
                                                        if ((event.target as HTMLElement).parentElement && (event.target as HTMLElement).parentElement?.classList.contains('menu')) {
                                                            setSelectedIndex(index);
                                                            setSelectedSubMenuIndex(0);
                                                        }
                                                    }}
                                                >
                                                    {element.text}
                                                    
                                                    {element.subMenu ?     
                                                        <MainMenuElementSubMenu>
                                                            {element.subMenu.map((subMenuElement, subMenuIndex) => {
                                                                return (
                                                                    <MainMenuElementSubMenuElement
                                                                        className={selectedIndex === index && selectedSubMenuIndex === subMenuIndex ? 'currently-selected submenu' : 'submenu'}
                                                                        key={`Sub${index}Element${subMenuIndex}`}
                                                                    >
                                                                        <MainMenuElementSubMenuElementText
                                                                            href={subMenuElement.link} 
                                                                            onClick={(event) => {
                                                                                console.log((event.target as HTMLElement))
                                                                                if ((event.target as HTMLElement).parentElement && (event.target as HTMLElement).parentElement?.classList.contains('submenu')) {
                                                                                    setSelectedIndex(index);
                                                                                    setSelectedSubMenuIndex(subMenuIndex);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {subMenuElement.text}
                                                                        </MainMenuElementSubMenuElementText>
                                                                    </MainMenuElementSubMenuElement>
                                                                );
                                                            })}
                                                        </MainMenuElementSubMenu>
                                                    :
                                                        <></>
                                                    }
                                                </MainMenuElementText>   
                                            </MainMenuElement>
                                        );
                                    })}
                                </>
                            </MainMenuDesktop>
                        </MainMenu>
                    </MainMenuWrapper>
                </Row>
            </Container>
        </Wrapper>
    );
};