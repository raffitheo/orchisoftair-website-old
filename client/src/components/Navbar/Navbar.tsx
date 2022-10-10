import React, { useContext, useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import NavbarProps from './INavbarProps';

import logo from '../../assets/images/logo.png';

import MobileMenu from './MobileMenu/MobileMenu';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import Socials from './Socials/Socials';
import Contacts from './Contacts/Contacts';

import { BaseURL, IsMobileContext, ScrollSizeContext } from '../../pages/OrchiWebsite';

import styles from './Navbar.module.scss';

const Navbar = (componentProps: NavbarProps) => {
    const [currentlySelected, setCurrentlySelected] = useState<number>(-1);
    const [currentlySelectedSubMenu, setCurrentlySelectedSubMenu] = useState<number>(-1);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<number>(-1);

    const desktopContacts = useRef<HTMLDivElement>(null);
    const navbarWrapper = useRef<HTMLDivElement>(null);

    const baseURL = useContext<string>(BaseURL);
    const isMobile = useContext<boolean>(IsMobileContext);
    const scrollSize = useContext<number>(ScrollSizeContext);

    useEffect(() => {
        const url = window.location.toString();

        if (url.indexOf('#') !== -1) {
            const selection = url.split('#')[1];

            if (selection) {
                componentProps.navigation.forEach((element, index) => {
                    if ('link' in element && `#${selection}` === element.link)
                        setCurrentlySelected(index);
                    else {
                        if (
                            'subMenu' in element &&
                            element.subMenu &&
                            element.subMenu.length >= 1
                        ) {
                            element.subMenu.forEach((subElement, subIndex) => {
                                if (`#${selection}` === subElement.link) {
                                    setCurrentlySelected(index);
                                    setCurrentlySelectedSubMenu(subIndex);
                                }
                            });
                        }
                    }
                });
            } else {
                setCurrentlySelected(0);
                setCurrentlySelectedSubMenu(-1);
            }
        } else setCurrentlySelected(0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (
                desktopContacts &&
                desktopContacts.current &&
                navbarWrapper &&
                navbarWrapper.current
            ) {
                const desktopContactsHeight = desktopContacts.current.offsetHeight;

                if (!isMobile) {
                    if (scrollSize > 114) {
                        navbarWrapper.current.style.top = `-${desktopContactsHeight + 7}px`;
                        navbarWrapper.current.style.position = 'fixed';
                    } else {
                        navbarWrapper.current.style.top = '0';
                        navbarWrapper.current.style.position = 'absolute';
                    }
                } else navbarWrapper.current.style.position = 'fixed';
            }
        };

        handleScroll();
    }, [isMobile, scrollSize]);

    useEffect(() => {
        if (!isMobile && isMobileMenuOpen) setIsMobileMenuOpen(false);
    }, [isMobile, isMobileMenuOpen]);

    return (
        <>
            <div
                className={componentProps.className}
                id={styles['NavbarWrapper']}
                ref={navbarWrapper}
                style={componentProps.style}
            >
                <div id={styles['NavbarContainer']}>
                    <div className={styles['NavbarRow']} ref={desktopContacts}>
                        <Logo
                            image={logo}
                            style={{
                                opacity: isMobileMenuOpen ? '0' : '1',
                            }}
                        />

                        <Contacts contacts={componentProps.contacts} />

                        <Socials socials={componentProps.socials} />

                        <div id={styles['MobileHamburgerWrapper']}>
                            <div id={styles['MobileHamburgerContainer']}>
                                <div id={styles['MobileHamburger']}>
                                    <input
                                        id={styles['MobileHamburgerCheckbox']}
                                        checked={!isMobile ? false : isMobileMenuOpen}
                                        onChange={(event) => {
                                            componentProps.onMobileMenuChange(
                                                !isMobileMenuOpen,
                                                event,
                                            );
                                            setIsMobileMenuOpen(!isMobileMenuOpen);
                                            setMobileSubMenuOpen(-1);
                                        }}
                                        type='checkbox'
                                    />

                                    <div id={styles['MobileHamburgerLineContainer']}>
                                        <span className={styles['MobileHamburgerLine']} />
                                        <span className={styles['MobileHamburgerLine']} />
                                        <span className={styles['MobileHamburgerLine']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={styles['NavbarRow']}
                        style={{
                            display: !isMobile ? 'block' : 'none',
                        }}
                    >
                        <div id={styles['NavigationWrapper']}>
                            <div id={styles['NavigationContainer']}>
                                <ul id={styles['NavigationList']}>
                                    {componentProps.navigation.map((element, elementIndex) => (
                                        <li
                                            className={`${styles['NavigationListElement']}${
                                                currentlySelected === elementIndex
                                                    ? ` ${styles['Active']}`
                                                    : ''
                                            }`}
                                            key={`ListElement${elementIndex}`}
                                        >
                                            {'link' in element ? (
                                                element.link.startsWith('#') ? (
                                                    <a
                                                        className={
                                                            styles['NavigationListElementLink']
                                                        }
                                                        href={element.link}
                                                        onClick={(event) => {
                                                            const pressedElement: HTMLElement =
                                                                event.target as HTMLElement;

                                                            if (
                                                                pressedElement &&
                                                                pressedElement?.classList.contains(
                                                                    styles[
                                                                        'NavigationListElementLink'
                                                                    ],
                                                                )
                                                            ) {
                                                                setCurrentlySelected(elementIndex);
                                                                setCurrentlySelectedSubMenu(0);
                                                            }
                                                        }}
                                                    >
                                                        {element.text}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        className={
                                                            styles['NavigationListElementLink']
                                                        }
                                                        onClick={(event) => {
                                                            const pressedElement: HTMLElement =
                                                                event.target as HTMLElement;

                                                            if (
                                                                pressedElement &&
                                                                pressedElement?.classList.contains(
                                                                    styles[
                                                                        'NavigationListElementLink'
                                                                    ],
                                                                )
                                                            ) {
                                                                setCurrentlySelected(elementIndex);
                                                                setCurrentlySelectedSubMenu(0);
                                                            }
                                                        }}
                                                        to={`${baseURL}${element.link}`}
                                                    >
                                                        {element.text}
                                                    </Link>
                                                )
                                            ) : 'subMenu' in element ? (
                                                <>
                                                    <span
                                                        className={
                                                            styles['NavigationListElementLink']
                                                        }
                                                    >
                                                        {element.text}
                                                    </span>

                                                    <ul className={styles['NavigationSubMenuList']}>
                                                        {element.subMenu.map(
                                                            (
                                                                subMenuElement,
                                                                subMenuElementIndex,
                                                            ) => (
                                                                <li
                                                                    className={`${
                                                                        styles[
                                                                            'NavigationSubMenuListElement'
                                                                        ]
                                                                    }${
                                                                        currentlySelected ===
                                                                            elementIndex &&
                                                                        currentlySelectedSubMenu ===
                                                                            subMenuElementIndex
                                                                            ? ` ${styles['Active']}`
                                                                            : ''
                                                                    }`}
                                                                    key={`List${elementIndex}SubMenuElement${subMenuElementIndex}`}
                                                                >
                                                                    {subMenuElement.link.startsWith(
                                                                        '#',
                                                                    ) ? (
                                                                        <a
                                                                            className={
                                                                                styles[
                                                                                    'NavigationSubMenuListElementLink'
                                                                                ]
                                                                            }
                                                                            href={
                                                                                subMenuElement.link
                                                                            }
                                                                            onClick={(event) => {
                                                                                const pressedElement: HTMLElement =
                                                                                    event.target as HTMLElement;

                                                                                if (
                                                                                    pressedElement &&
                                                                                    pressedElement?.classList.contains(
                                                                                        styles[
                                                                                            'NavigationSubMenuListElementLink'
                                                                                        ],
                                                                                    )
                                                                                ) {
                                                                                    setCurrentlySelected(
                                                                                        elementIndex,
                                                                                    );
                                                                                    setCurrentlySelectedSubMenu(
                                                                                        subMenuElementIndex,
                                                                                    );
                                                                                }
                                                                            }}
                                                                        >
                                                                            {subMenuElement.text}
                                                                        </a>
                                                                    ) : (
                                                                        <Link
                                                                            className={
                                                                                styles[
                                                                                    'NavigationSubMenuListElementLink'
                                                                                ]
                                                                            }
                                                                            onClick={(event) => {
                                                                                const pressedElement: HTMLElement =
                                                                                    event.target as HTMLElement;

                                                                                if (
                                                                                    pressedElement &&
                                                                                    pressedElement?.classList.contains(
                                                                                        styles[
                                                                                            'NavigationSubMenuListElementLink'
                                                                                        ],
                                                                                    )
                                                                                ) {
                                                                                    setCurrentlySelected(
                                                                                        elementIndex,
                                                                                    );
                                                                                    setCurrentlySelectedSubMenu(
                                                                                        subMenuElementIndex,
                                                                                    );
                                                                                }
                                                                            }}
                                                                            to={`${baseURL}${subMenuElement.link}`}
                                                                        >
                                                                            {subMenuElement.text}
                                                                        </Link>
                                                                    )}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <SearchBar />
                    </div>
                </div>
            </div>

            <MobileMenu
                currentlySelected={currentlySelected}
                currentlySelectedSubMenu={currentlySelectedSubMenu}
                logo={logo}
                mobileSubMenuOpen={mobileSubMenuOpen}
                navigation={componentProps.navigation}
                onClickElement={(elementIndex, subMenuElementIndex) => {
                    setCurrentlySelected(elementIndex);
                    setCurrentlySelectedSubMenu(subMenuElementIndex);

                    setTimeout(() => {
                        componentProps.onMobileMenuChange(false);
                        setIsMobileMenuOpen(false);
                        setMobileSubMenuOpen(-1);
                    }, 250);
                }}
                onDismiss={(elementIndex) => {
                    setMobileSubMenuOpen(mobileSubMenuOpen === elementIndex ? -1 : elementIndex);
                }}
            />
        </>
    );
};

export default Navbar;
