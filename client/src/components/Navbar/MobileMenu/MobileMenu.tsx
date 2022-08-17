import IMobileMenuProps from './IMobileMenuProps';

import IconExtension from '../../IconExtension/IconExtension';

import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

import {
	MobileMenuContainer,
	MobileMenuRow,
	MobileMenuWrapper,
	NavigationContainer,
	NavigationList,
	NavigationListElement,
	NavigationListElementLink,
	NavigationSubMenuList,
	NavigationSubMenuListElement,
	NavigationSubMenuListElementLink,
	NavigationSubMenuListExpand,
	NavigationWrapper,
} from './MobileMenu.style';

const MobileMenu = (componentProps: IMobileMenuProps): JSX.Element => {
	return (
		<MobileMenuWrapper id="navbar-mobile">
			<MobileMenuContainer>
				<MobileMenuRow>
					<Logo image={componentProps.logo} />
				</MobileMenuRow>

				<MobileMenuRow>
					<NavigationWrapper>
						<NavigationContainer>
							<SearchBar openOnStart={true} preventCollapse={true} />

							<NavigationList>
								{componentProps.navigation.map((element, elementIndex) => {
									return (
										<NavigationListElement
											className={
												componentProps.currentlySelected === elementIndex
													? 'active'
													: ''
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
													)
														componentProps.onClickElement(elementIndex, 0);
												}}
												to={element.link}
											>
												{element.text}
											</NavigationListElementLink>

											{element.subMenu && (
												<>
													<NavigationSubMenuList
														className={
															componentProps.mobileSubMenuOpen === elementIndex
																? 'visible'
																: ''
														}
													>
														{element.subMenu.map(
															(subMenuElement, subMenuElementIndex) => {
																return (
																	<NavigationSubMenuListElement
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
																				)
																					componentProps.onClickElement(
																						elementIndex,
																						subMenuElementIndex
																					);
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

													<NavigationSubMenuListExpand>
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
													</NavigationSubMenuListExpand>
												</>
											)}
										</NavigationListElement>
									);
								})}
							</NavigationList>
						</NavigationContainer>
					</NavigationWrapper>
				</MobileMenuRow>
			</MobileMenuContainer>
		</MobileMenuWrapper>
	);
};

export default MobileMenu;
