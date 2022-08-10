import React from 'react';

import IMobileMenuProps from './IMobileMenuProps';

import IconExtension from '../../IconExtension/IconExtension';
import Logo from '../Logo/Logo';

import {
	MobileContainer,
	MobileNavigationContainer,
	MobileNavigationList,
	MobileNavigationListElement,
	MobileNavigationListElementLink,
	MobileNavigationSubMenuList,
	MobileNavigationSubMenuListElement,
	MobileNavigationSubMenuListElementLink,
	MobileNavigationSubMenuListExpand,
	MobileNavigationWrapper,
	MobileRow,
	MobileWrapper,
} from './MobileMenu.style';
import SearchBar from '../SearchBar/SearchBar';

const MobileMenu: React.FC<IMobileMenuProps> = (
	componentProps: IMobileMenuProps
) => {
	return (
		<MobileWrapper id="navbar-mobile">
			<MobileContainer>
				<MobileRow>
					<Logo image={componentProps.logo} />
				</MobileRow>

				<MobileRow>
					<MobileNavigationWrapper>
						<MobileNavigationContainer>
							<SearchBar openOnStart={true} preventCollapse={true} />

							<MobileNavigationList>
								{componentProps.navigation.map((element, elementIndex) => {
									return (
										<MobileNavigationListElement
											className={
												componentProps.currentlySelected === elementIndex
													? 'active'
													: ''
											}
											key={`ListElement${elementIndex}`}
										>
											<MobileNavigationListElementLink
												className="navbar-list-element"
												onClick={(event) => {
													let pressedElement: HTMLElement =
														event.target as HTMLElement;

													if (
														pressedElement &&
														pressedElement?.classList.contains(
															'navbar-list-element'
														)
													)
														componentProps.onClickElement(elementIndex, 0);
												}}
												to={element.link}
											>
												{element.text}
											</MobileNavigationListElementLink>

											{element.subMenu ? (
												<>
													<MobileNavigationSubMenuList
														className={
															componentProps.mobileSubMenuOpen === elementIndex
																? 'visible'
																: ''
														}
													>
														{element.subMenu.map(
															(subMenuElement, subMenuElementIndex) => {
																return (
																	<MobileNavigationSubMenuListElement
																		className={`${
																			componentProps.currentlySelected ===
																				elementIndex &&
																			componentProps.currentlySelectedSubMenu ===
																				subMenuElementIndex
																				? 'active'
																				: ''
																		} ${
																			subMenuElementIndex + 1 ===
																			element.subMenu?.length
																				? 'last-child'
																				: ''
																		}`}
																		key={`List${elementIndex}SubMenuElement${subMenuElementIndex}`}
																	>
																		<MobileNavigationSubMenuListElementLink
																			className="submenu-list-element"
																			onClick={(event) => {
																				let pressedElement: HTMLElement =
																					event.target as HTMLElement;

																				if (
																					pressedElement &&
																					pressedElement?.classList.contains(
																						'submenu-list-element'
																					)
																				)
																					componentProps.onClickElement(
																						elementIndex,
																						subMenuElementIndex
																					);
																			}}
																			to={subMenuElement.link}
																		>
																			{subMenuElement.text}
																		</MobileNavigationSubMenuListElementLink>
																	</MobileNavigationSubMenuListElement>
																);
															}
														)}
													</MobileNavigationSubMenuList>

													<MobileNavigationSubMenuListExpand>
														<IconExtension
															name={
																componentProps.mobileSubMenuOpen ===
																elementIndex
																	? 'Minus'
																	: 'Plus'
															}
															onClick={() => {
																componentProps.onDismiss(elementIndex);
															}}
															size={16}
														/>
													</MobileNavigationSubMenuListExpand>
												</>
											) : (
												<></>
											)}
										</MobileNavigationListElement>
									);
								})}
							</MobileNavigationList>
						</MobileNavigationContainer>
					</MobileNavigationWrapper>
				</MobileRow>
			</MobileContainer>
		</MobileWrapper>
	);
};

export default MobileMenu;
