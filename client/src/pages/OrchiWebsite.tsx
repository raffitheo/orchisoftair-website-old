import React, { createContext, useEffect, useRef, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BackToTop from '@components/BackToTop/BackToTop';
import Loader from '@components/Loader/Loader';
import Navbar from '@components/Navbar/Navbar';

import { Contact } from '@interfaces/IContact';
import { Navigation } from '@interfaces/INavigation';
import { Slider } from '@interfaces/ISlider';
import { Social } from '@interfaces/ISocial';

import ContactData from '../mock/ContactData.json';
import NavbarData from '../mock/NavbarData.json';
import SliderData from '../mock/SliderData.json';
import SocialData from '../mock/SocialData.json';

import HomePage from '../pages/HomePage/HomePage';

import styles from './OrchiWebsite.module.scss';

enum DataState {
    ERROR = -1,
    INITIALIZED = 0,
    LOADING = 1,
    LOADED = 2,
}

const DEFAUTL_MOBILE_MAX_SIZE = 767;
const DEFAUTL_MOBILE_MIN_SIZE = 319;

export const IsMobileContext = createContext<boolean>(false);
export const PageSizeContext = createContext<number>(0);
export const ScrollSizeContext = createContext<number>(0);

const OrchiWebsite = () => {
    const [canRender, setCanRender] = useState<boolean>(false);
    const [dataState, setDataState] = useState<DataState>(DataState.INITIALIZED);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [pageSize, setPageSize] = useState<number>(0);
    const [navbarHeight, setNavbarHeight] = useState<number>(0);
    const [scrollSize, setScrollSize] = useState<number>(0);
    const [showLoader, setShowLoader] = useState<boolean>(true);

    const pageContent = useRef<HTMLDivElement>(null);

    const getBaseURL =
        window.location.href.indexOf('github') !== -1 ||
        window.location.href.indexOf('localhost') !== -1
            ? '/orchisoftair-website'
            : '/';

    const getContactData = JSON.parse(JSON.stringify(ContactData)) as Contact[];
    const getNavbarData = JSON.parse(JSON.stringify(NavbarData)) as Navigation[];
    const getSliderData = JSON.parse(JSON.stringify(SliderData)) as Slider[];
    const getSocialData = JSON.parse(JSON.stringify(SocialData)) as Social[];

    const onMobileMenuChange = (newValue: boolean) => {
        const navbar = document.querySelector('[id*="NavbarWrapper"]') as HTMLElement;
        const navbarMobile = document.querySelector('[id*="MobileMenuWrapper"]') as HTMLElement;

        if (navbar && navbarMobile && pageContent && pageContent.current) {
            if (newValue) {
                navbar.style.transform = 'translateX(250px)';
                navbarMobile.style.transform = 'translateX(250px)';
                pageContent.current.style.paddingLeft = '250px';
            } else {
                navbar.style.transform = 'translateX(0)';
                navbarMobile.style.transform = 'translateX(0)';
                pageContent.current.style.paddingLeft = '0';
            }
        }
    };

    useEffect(() => {
        setDataState(DataState.LOADING);

        setTimeout(() => {
            setDataState(DataState.LOADED);
            setCanRender(true);

            setTimeout(() => setShowLoader(false), 500);
        }, 5000);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollSize(window.pageYOffset);

        const handleResize = () => {
            const width = window.innerWidth;
            const mobile =
                width > DEFAUTL_MOBILE_MAX_SIZE || width < DEFAUTL_MOBILE_MIN_SIZE ? false : true;

            setIsMobile(mobile);
            setPageSize(width);

            if (!mobile) onMobileMenuChange(false);

            if (pageContent && pageContent.current)
                pageContent.current.style.marginTop = `${navbarHeight}px)`;
        };

        if (canRender) {
            handleScroll();
            handleResize();

            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (canRender) {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            }
        };
    }, [canRender]);

    useEffect(() => {
        const navbar = document.querySelector('[id*="NavbarWrapper"]') as HTMLElement;

        if (navbar) setNavbarHeight(navbar.offsetHeight);
    }, [pageSize]);

    return (
        <>
            {showLoader ? (
                <div
                    className={`${dataState === DataState.LOADED ? `${styles['FadeOut']}` : ''}`}
                    id={`${styles['MainLoader']}`}
                >
                    <div
                        style={{
                            left: '50%',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Loader fadeOut={dataState === DataState.LOADED} />
                    </div>
                </div>
            ) : (
                <></>
            )}

            {dataState === DataState.LOADED ? (
                <IsMobileContext.Provider value={isMobile}>
                    <PageSizeContext.Provider value={pageSize}>
                        <ScrollSizeContext.Provider value={scrollSize}>
                            <Router>
                                <Navbar
                                    contacts={getContactData}
                                    navigation={getNavbarData}
                                    socials={getSocialData}
                                    onMobileMenuChange={onMobileMenuChange}
                                />

                                <BackToTop minVisibleSize={114} />

                                <div
                                    id={styles['PageContent']}
                                    ref={pageContent}
                                    style={{
                                        marginTop: `${navbarHeight}px`,
                                    }}
                                >
                                    <Routes>
                                        <Route
                                            element={
                                                <HomePage
                                                    navbarHeight={navbarHeight}
                                                    sliders={getSliderData}
                                                />
                                            }
                                            path={getBaseURL}
                                        />
                                    </Routes>
                                </div>
                            </Router>
                        </ScrollSizeContext.Provider>
                    </PageSizeContext.Provider>
                </IsMobileContext.Provider>
            ) : (
                <></>
            )}
        </>
    );
};

export default OrchiWebsite;
