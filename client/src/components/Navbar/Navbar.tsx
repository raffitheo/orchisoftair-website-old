import { useEffect, useState } from 'react';

import INavbarProps from './INavbarProps';

import logo from '../../assets/images/logo.png';

import {
	MobileHamburger,
	MobileHamburgerCheckbox,
	MobileHamburgerContainer,
	MobileHamburgerLine,
	MobileHamburgerLineContainer,
	MobileHamburgerWrapper,
	NavbarContainer,
	NavbarRow,
	NavbarWrapper,
	NavigationContainer,
	NavigationList,
	NavigationListElement,
	NavigationListElementLink,
	NavigationSubMenuList,
	NavigationSubMenuListElement,
	NavigationSubMenuListElementLink,
	NavigationWrapper,
} from './Navbar.style';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import Socials from './Socials/Socials';
import Contacts from './Contacts/Contacts';

const Navbar = (componentProps: INavbarProps): JSX.Element => {
	const [currentlySelected, setCurrentlySelected] = useState<number>(-1);
	const [currentlySelectedSubMenu, setCurrentlySelectedSubMenu] =
		useState<number>(-1);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<number>(-1);

	useEffect(() => {
		const url: string = window.location.toString();

		if (url.indexOf('#') !== -1) {
			const selection: string = url.split('#')[1];

			if (selection) {
				componentProps.navigation.forEach((element, index) => {
					if (`#${selection}` === element.link) setCurrentlySelected(index);
					else {
						if (element.subMenu && element.subMenu.length >= 1) {
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
				'navbar'
			) as HTMLElement;

			if (!componentProps.isMobile) {
				if (desktopContacts && navbar) {
					const pageScroll: number = window.pageYOffset;
					const desktopContactsHeight: number = desktopContacts.offsetHeight;

					if (pageScroll > 114) {
						navbar.style.top = `-${desktopContactsHeight + 7}px`;
						navbar.style.position = 'fixed';
					} else {
						navbar.style.top = '0';
						navbar.style.position = 'absolute';
					}
				}
			} else {
				if (navbar) {
					navbar.style.top = '0';
					navbar.style.position = 'fixed';
				}
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [componentProps.isMobile]);

	useEffect(() => {
		if (!componentProps.isMobile && isMobileMenuOpen)
			setIsMobileMenuOpen(false);
	}, [componentProps.isMobile, isMobileMenuOpen]);

	return (
		<>
			<NavbarWrapper
				className={componentProps.className}
				id={`navbar`}
				style={componentProps.style}
			>
				<NavbarContainer>
					<NavbarRow id={'desktop-contacts'}>
						<Logo
							image={logo}
							style={{
								opacity: isMobileMenuOpen ? '0' : '1',
							}}
						/>

						<Contacts contacts={componentProps.contacts} />

						<Socials socials={componentProps.socials} />

						<MobileHamburgerWrapper>
							<MobileHamburgerContainer>
								<MobileHamburger>
									<MobileHamburgerCheckbox
										checked={
											!componentProps.isMobile ? false : isMobileMenuOpen
										}
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

									<MobileHamburgerLineContainer>
										<MobileHamburgerLine />
										<MobileHamburgerLine />
										<MobileHamburgerLine />
									</MobileHamburgerLineContainer>
								</MobileHamburger>
							</MobileHamburgerContainer>
						</MobileHamburgerWrapper>
					</NavbarRow>

					<NavbarRow
						style={{
							display: !componentProps.isMobile ? 'block' : 'none',
						}}
					>
						<NavigationWrapper>
							<NavigationContainer>
								<NavigationList>
									{componentProps.navigation.map((element, elementIndex) => {
										return (
											<NavigationListElement
												className={
													currentlySelected === elementIndex ? 'active' : ''
												}
												key={`ListElement${elementIndex}`}
											>
												<NavigationListElementLink
													className="navbar-list-element"
													onClick={(event) => {
														const pressedElement: HTMLElement =
															event.target as HTMLElement;

														if (
															pressedElement &&
															pressedElement?.classList.contains(
																'navbar-list-element'
															)
														) {
															setCurrentlySelected(elementIndex);
															setCurrentlySelectedSubMenu(0);
														}
													}}
													to={element.link}
												>
													{element.text}
												</NavigationListElementLink>

												{element.subMenu && (
													<NavigationSubMenuList>
														{element.subMenu.map(
															(subMenuElement, subMenuElementIndex) => {
																return (
																	<NavigationSubMenuListElement
																		className={
																			currentlySelected === elementIndex &&
																			currentlySelectedSubMenu ===
																				subMenuElementIndex
																				? 'active'
																				: ''
																		}
																		key={`List${elementIndex}SubMenuElement${subMenuElementIndex}`}
																	>
																		<NavigationSubMenuListElementLink
																			className="submenu-list-element"
																			onClick={(event) => {
																				const pressedElement: HTMLElement =
																					event.target as HTMLElement;

																				if (
																					pressedElement &&
																					pressedElement?.classList.contains(
																						'submenu-list-element'
																					)
																				) {
																					setCurrentlySelected(elementIndex);
																					setCurrentlySelectedSubMenu(
																						subMenuElementIndex
																					);
																				}
																			}}
																			to={subMenuElement.link}
																		>
																			{subMenuElement.text}
																		</NavigationSubMenuListElementLink>
																	</NavigationSubMenuListElement>
																);
															}
														)}
													</NavigationSubMenuList>
												)}
											</NavigationListElement>
										);
									})}
								</NavigationList>
							</NavigationContainer>
						</NavigationWrapper>

						<SearchBar />
					</NavbarRow>
				</NavbarContainer>
			</NavbarWrapper>

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
