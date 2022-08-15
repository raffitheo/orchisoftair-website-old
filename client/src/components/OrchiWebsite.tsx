import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import { Sliders } from '../data/landing';
import { Contacts, Navigation, Socials } from '../data/navbar';

import HomePage from './pages/HomePage/HomePage';

import { PageContent } from './OrchiWebsite.style';

const OrchiWebsite = (): JSX.Element => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [pageWidth, setPageWidth] = useState<number>(0);
	const [navbarHeight, setNavbarHeight] = useState<number>(0);

	const baseURL: string = window.location.href.indexOf('github')
		? '/orchisoftair-website'
		: '/';

	const onMobileMenuChange = (newValue: boolean): void => {
		const navbar: HTMLElement = document.getElementById(
			'navbar'
		) as HTMLElement;
		const navbarMobile: HTMLElement = document.getElementById(
			'navbar-mobile'
		) as HTMLElement;
		const pageContent: HTMLElement = document.getElementById(
			'page-content'
		) as HTMLElement;

		if (navbar && navbarMobile && pageContent) {
			if (newValue) {
				navbar.style.left = '250px';
				navbar.style.right = '-250px';
				navbarMobile.style.left = '0';
				pageContent.style.transform = 'translateX(250px)';
			} else {
				navbar.style.left = '0';
				navbar.style.right = '0';
				navbarMobile.style.left = '-250px';
				pageContent.style.transform = 'translateX(0)';
			}
		}
	};

	useEffect(() => {
		const handleResize = (): void => {
			const width: number = document.documentElement.clientWidth;
			const mobile: boolean = width > 767 || width < 319 ? false : true;

			setIsMobile(mobile);
			setPageWidth(width);

			if (!mobile) onMobileMenuChange(false);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const navbar = document.getElementById('navbar');

		if (navbar) setNavbarHeight(navbar.offsetHeight);
	}, [pageWidth]);

	return (
		<Router>
			<Navbar
				contacts={Contacts()}
				navigation={Navigation()}
				socials={Socials()}
				onMobileMenuChange={onMobileMenuChange}
				isMobile={isMobile}
			/>

			<PageContent id="page-content">
				<Routes>
					<Route
						element={
							<HomePage
								isMobile={isMobile}
								navbarHeight={navbarHeight}
								sliders={Sliders()}
							/>
						}
						path={baseURL}
					/>
				</Routes>
			</PageContent>
		</Router>
	);
};

export default OrchiWebsite;
