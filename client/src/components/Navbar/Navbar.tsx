import React, { useEffect, useState } from 'react';

import INavbarProps from './INavbarProps';

import IconExtension from '../IconExtension/IconExtension';
import { IconName } from '../IconExtension/IIconExtensionProps';

import logo from '../../assets/images/logo.png';

import {
	ContactInfo,
	Contacts,
	ContactsContainer,
	ContactsWrapper,
	ContactTitle,
	Container,
	MobileHamburger,
	MobileHamburgerCheckbox,
	MobileHamburgerContainer,
	MobileHamburgerLine,
	MobileHamburgerLineContainer,
	MobileHamburgerWrapper,
	NavigationContainer,
	NavigationList,
	NavigationListElement,
	NavigationListElementLink,
	NavigationSubMenuList,
	NavigationSubMenuListElement,
	NavigationSubMenuListElementLink,
	NavigationWrapper,
	Row,
	SocialLink,
	SocialsContainer,
	SocialsWrapper,
	Wrapper,
} from './Navbar.style';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

const Navbar: React.FC<INavbarProps> = ({
	contacts,
	navigation,
	socials,
	onMobileMenuChange,
	isMobile,
	className,
	style,
	small,
}: INavbarProps) => {
	const [currentlySelected, setCurrentlySelected] = useState<number>(-1);
	const [currentlySelectedSubMenu, setCurrentlySelectedSubMenu] =
		useState<number>(-1);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<number>(-1);

	useEffect(() => {
		const handleScroll = (): void => {
			let desktopContacts: HTMLElement = document.getElementById(
				'desktop-contacts'
			) as HTMLElement;
			let navbar: HTMLElement = document.getElementById(
				'navbar'
			) as HTMLElement;
			let width = document.documentElement.offsetWidth;

			if (width >= 768 || width <= 320) {
				if (desktopContacts && navbar) {
					let pageScroll: number = window.pageYOffset;
					let desktopContactsHeight: number = desktopContacts.offsetHeight;

					if (pageScroll > 10)
						navbar.style.top = `-${desktopContactsHeight + 7}px`;
					else navbar.style.top = '0';
				}
			} else navbar.style.top = '0';
		};

		const handleInitialSelection = (): void => {
			let url: string = window.location.toString();

			if (url.indexOf('#') !== -1) {
				let selection: string = url.split('#')[1];

				if (selection) {
					navigation.forEach((element, index) => {
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
		};

		handleInitialSelection();

		if (!small) {
			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		} else {
			let desktopContacts: HTMLElement = document.getElementById(
				'desktop-contacts'
			) as HTMLElement;
			let navbar: HTMLElement = document.getElementById(
				'navbar'
			) as HTMLElement;
			let width = document.documentElement.offsetWidth;

			if (width >= 768 || width <= 320) {
				if (desktopContacts && navbar) {
					let desktopContactsHeight: number = desktopContacts.offsetHeight;

					navbar.style.top = `-${desktopContactsHeight + 7}px`;
				}
			} else navbar.style.top = '0';
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!isMobile && isMobileMenuOpen) setIsMobileMenuOpen(false);
	}, [isMobile, isMobileMenuOpen]);

	return (
		<>
			<Wrapper
				className={`${className ? className : ''}`}
				id={`navbar`}
				style={style ? style : {}}
			>
				<Container>
					<Row id={'desktop-contacts'}>
						<Logo
							image={logo}
							style={{
								opacity: isMobileMenuOpen ? '0' : '1',
							}}
						/>

						<ContactsWrapper>
							<ContactsContainer>
								<>
									{contacts.map((contact, index) => {
										return (
											<Contacts key={`Contact${index}`}>
												<IconExtension
													name={contact.icon as IconName}
													size={16}
													style={{
														left: '8px',
														position: 'absolute',
														top: '-3px',
													}}
												/>

												<ContactTitle>{contact.title}</ContactTitle>

												<ContactInfo>{contact.info}</ContactInfo>
											</Contacts>
										);
									})}
								</>
							</ContactsContainer>
						</ContactsWrapper>

						<SocialsWrapper>
							<SocialsContainer>
								<>
									{socials.map((social, index) => {
										return (
											<SocialLink
												key={`Social${index}`}
												hovercolor={social.hoverColor}
												href={social.link}
											>
												<IconExtension
													name={social.icon as IconName}
													size={18}
													style={{
														margin: 'auto',
													}}
												/>
											</SocialLink>
										);
									})}
								</>
							</SocialsContainer>
						</SocialsWrapper>

						<MobileHamburgerWrapper>
							<MobileHamburgerContainer>
								<MobileHamburger>
									<MobileHamburgerCheckbox
										checked={!isMobile ? false : isMobileMenuOpen}
										onChange={(event) => {
											onMobileMenuChange(!isMobileMenuOpen, event);
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
					</Row>

					<Row
						style={{
							display: !isMobile ? 'block' : 'none',
						}}
					>
						<NavigationWrapper>
							<NavigationContainer>
								<NavigationList>
									{navigation.map((element, elementIndex) => {
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
														let pressedElement: HTMLElement =
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

												{element.subMenu ? (
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
																				let pressedElement: HTMLElement =
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
												) : (
													<></>
												)}
											</NavigationListElement>
										);
									})}
								</NavigationList>
							</NavigationContainer>
						</NavigationWrapper>

						<SearchBar />
					</Row>
				</Container>
			</Wrapper>

			<MobileMenu
				currentlySelected={currentlySelected}
				currentlySelectedSubMenu={currentlySelectedSubMenu}
				logo={logo}
				mobileSubMenuOpen={mobileSubMenuOpen}
				navigation={navigation}
				onClickElement={(elementIndex, subMenuElementIndex) => {
					setCurrentlySelected(elementIndex);
					setCurrentlySelectedSubMenu(subMenuElementIndex);

					setTimeout(() => {
						onMobileMenuChange(false);
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
