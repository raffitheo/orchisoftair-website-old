import React, { createContext, useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BackToTop from './BackToTop/BackToTop';
import Navbar from './Navbar/Navbar';

import { Sliders } from '../data/landing';
import { ContactElements, NavigationElements, SocialElements } from '../data/navbar';

import HomePage from '../pages/HomePage/HomePage';

import styles from './OrchiWebsite.module.scss';

const DEFAUTL_MOBILE_MAX_SIZE = 767;
const DEFAUTL_MOBILE_MIN_SIZE = 319;

export const IsMobileContext: React.Context<boolean> = createContext<boolean>(false);

const OrchiWebsite = (): JSX.Element => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [pageWidth, setPageWidth] = useState<number>(0);
    const [navbarHeight, setNavbarHeight] = useState<number>(0);

    const baseURL: string =
        window.location.href.indexOf('github') !== -1 ||
        window.location.href.indexOf('localhost') !== -1
            ? '/orchisoftair-website'
            : '/';

    const getPageContentRef = (): HTMLElement => {
        return document.querySelector(`#${styles['PageContent']}`) as HTMLElement;
    };

    const onMobileMenuChange = (newValue: boolean): void => {
        const navbar: HTMLElement = document.querySelector('[id*="NavbarWrapper"]') as HTMLElement;
        const navbarMobile: HTMLElement = document.querySelector(
            '[id*="MobileMenuWrapper"]',
        ) as HTMLElement;

        if (navbar && navbarMobile && getPageContentRef()) {
            if (newValue) {
                navbar.style.transform = 'translateX(250px)';
                navbarMobile.style.transform = 'translateX(250px)';
                getPageContentRef().style.paddingLeft = '250px';
            } else {
                navbar.style.transform = 'translateX(0)';
                navbarMobile.style.transform = 'translateX(0)';
                getPageContentRef().style.paddingLeft = '0';
            }
        }
    };

    useEffect(() => {
        const handleResize = (): void => {
            const width: number = document.documentElement.clientWidth;
            const mobile: boolean =
                width > DEFAUTL_MOBILE_MAX_SIZE || width < DEFAUTL_MOBILE_MIN_SIZE ? false : true;

            setIsMobile(mobile);
            setPageWidth(width);

            if (!mobile) onMobileMenuChange(false);

            if (getPageContentRef()) {
                getPageContentRef().style.marginTop = `${navbarHeight}px)`;
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const navbar: HTMLElement = document.querySelector('[id*="NavbarWrapper"]') as HTMLElement;

        if (navbar) setNavbarHeight(navbar.offsetHeight);
    }, [pageWidth]);

    return (
        <IsMobileContext.Provider value={isMobile}>
            <Router>
                <Navbar
                    contacts={ContactElements}
                    navigation={NavigationElements}
                    socials={SocialElements}
                    onMobileMenuChange={onMobileMenuChange}
                />

                <BackToTop minVisibleSize={114} />

                <div
                    id={styles['PageContent']}
                    style={{
                        marginTop: `${navbarHeight}px`,
                    }}
                >
                    <Routes>
                        <Route
                            element={<HomePage navbarHeight={navbarHeight} sliders={Sliders} />}
                            path={baseURL}
                        />
                    </Routes>
                </div>
            </Router>
        </IsMobileContext.Provider>
    );
};

export default OrchiWebsite;
