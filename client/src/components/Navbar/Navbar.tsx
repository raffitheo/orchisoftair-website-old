import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import NavbarProps from './INavbarProps';

import logo from '../../assets/images/logo.png';

import MobileMenu from './MobileMenu/MobileMenu';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import Socials from './Socials/Socials';
import Contacts from './Contacts/Contacts';

import { IsMobileContext } from '../OrchiWebsite';

import styles from './Navbar.module.scss';

const Navbar = (componentProps: NavbarProps): JSX.Element => {
	const [currentlySelected, setCurrentlySelected] = useState<number>(-1);
	const [currentlySelectedSubMenu, setCurrentlySelectedSubMenu] =
		useState<number>(-1);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<number>(-1);

	const isMobile: boolean = useContext<boolean>(IsMobileContext);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const url: string = window.location.toString();

		if (url.indexOf('#') !== -1) {
			const selection: string = url.split('#')[1];

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const handleScroll = (): void => {
			const desktopContacts: HTMLElement = document.getElementById(
				'desktop-contacts'
			) as HTMLElement;
			const navbar: HTMLElement = document.getElementById(
				styles['NavbarWrapper']
			) as HTMLElement;

			const pageScroll: number = window.pageYOffset;
			const desktopContactsHeight: number = desktopContacts.offsetHeight;

			if (!isMobile) {
				if (desktopContacts && navbar) {
					if (pageScroll > 114) {
						navbar.style.top = `-${desktopContactsHeight + 7}px`;
						navbar.style.position = 'fixed';
					} else {
						navbar.style.top = '0';
						navbar.style.position = 'absolute';
					}
				}
			} else {
				if (navbar) navbar.style.position = 'fixed';
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isMobile]);

	useEffect(() => {
		if (!isMobile && isMobileMenuOpen) setIsMobileMenuOpen(false);
	}, [isMobile, isMobileMenuOpen]);

	return (
		<>
			<div
				className={componentProps.className}
				id={styles['NavbarWrapper']}
				style={componentProps.style}
			>
				<div id={styles['NavbarContainer']}>
					<div className={styles['NavbarRow']} id={'desktop-contacts'}>
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
												event
											);
											setIsMobileMenuOpen(!isMobileMenuOpen);
											setMobileSubMenuOpen(-1);
										}}
										type="checkbox"
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
									{componentProps.navigation.map((element, elementIndex) => {
										return (
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
															className={styles['NavigationListElementLink']}
															href={element.link}
															onClick={(event) => {
																const pressedElement: HTMLElement =
																	event.target as HTMLElement;

																if (
																	pressedElement &&
																	pressedElement?.classList.contains(
																		styles['NavigationListElementLink']
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
															className={styles['NavigationListElementLink']}
															onClick={(event) => {
																const pressedElement: HTMLElement =
																	event.target as HTMLElement;

																if (
																	pressedElement &&
																	pressedElement?.classList.contains(
																		styles['NavigationListElementLink']
																	)
																) {
																	setCurrentlySelected(elementIndex);
																	setCurrentlySelectedSubMenu(0);
																}
															}}
															to={element.link}
														>
															{element.text}
														</Link>
													)
												) : 'subMenu' in element ? (
													<>
														<span
															className={styles['NavigationListElementLink']}
														>
															{element.text}
														</span>

														<ul className={styles['NavigationSubMenuList']}>
															{element.subMenu.map(
																(subMenuElement, subMenuElementIndex) => {
																	return (
																		<li
																			className={`${
																				styles['NavigationSubMenuListElement']
																			}${
																				currentlySelected === elementIndex &&
																				currentlySelectedSubMenu ===
																					subMenuElementIndex
																					? ` ${styles['Active']}`
																					: ''
																			}`}
																			key={`List${elementIndex}SubMenuElement${subMenuElementIndex}`}
																		>
																			{subMenuElement.link.startsWith('#') ? (
																				<a
																					className={
																						styles[
																							'NavigationSubMenuListElementLink'
																						]
																					}
																					href={subMenuElement.link}
																					onClick={(event) => {
																						const pressedElement: HTMLElement =
																							event.target as HTMLElement;

																						if (
																							pressedElement &&
																							pressedElement?.classList.contains(
																								styles[
																									'NavigationSubMenuListElementLink'
																								]
																							)
																						) {
																							setCurrentlySelected(
																								elementIndex
																							);
																							setCurrentlySelectedSubMenu(
																								subMenuElementIndex
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
																								]
																							)
																						) {
																							setCurrentlySelected(
																								elementIndex
																							);
																							setCurrentlySelectedSubMenu(
																								subMenuElementIndex
																							);
																						}
																					}}
																					to={subMenuElement.link}
																				>
																					{subMenuElement.text}
																				</Link>
																			)}
																		</li>
																	);
																}
															)}
														</ul>
													</>
												) : (
													<></>
												)}
											</li>
										);
									})}
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
					setMobileSubMenuOpen(
						mobileSubMenuOpen === elementIndex ? -1 : elementIndex
					);
				}}
			/>
		</>
	);
};

export default Navbar;
