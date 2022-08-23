import { Link } from 'react-router-dom';

import MobileMenuProps from './IMobileMenuProps';

import IconExtension from '../../IconExtension/IconExtension';

import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

import styles from './MobileMenu.module.scss';

const MobileMenu = (componentProps: MobileMenuProps): JSX.Element => {
	return (
		<section id={styles['MobileMenuWrapper']}>
			<div id={styles['MobileMenuContainer']}>
				<div className={styles['MobileMenuRow']}>
					<Logo image={componentProps.logo} />
				</div>

				<div className={styles['MobileMenuRow']}>
					<div id={styles['NavigationWrapper']}>
						<div id={styles['NavigationContainer']}>
							<SearchBar openOnStart={true} preventCollapse={true} />

							<ul id={styles['NavigationList']}>
								{componentProps.navigation.map((element, elementIndex) => {
									return (
										<li
											className={`${styles['NavigationListElement']}${
												componentProps.currentlySelected === elementIndex
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
															)
																componentProps.onClickElement(elementIndex, 0);
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
															)
																componentProps.onClickElement(elementIndex, 0);
														}}
														to={element.link}
													>
														{element.text}
													</Link>
												)
											) : 'subMenu' in element ? (
												<>
													<span className={styles['NavigationListElementLink']}>
														{element.text}
													</span>

													<ul
														className={`${styles['NavigationSubMenuList']}${
															componentProps.mobileSubMenuOpen === elementIndex
																? ` ${styles['Visible']}`
																: ''
														}`}
													>
														{element.subMenu.map(
															(subMenuElement, subMenuElementIndex) => {
																return (
																	<li
																		className={`${
																			styles['NavigationSubMenuListElement']
																		}${
																			componentProps.currentlySelected ===
																				elementIndex &&
																			componentProps.currentlySelectedSubMenu ===
																				subMenuElementIndex
																				? ` ${styles['Active']}`
																				: ''
																		}${
																			subMenuElementIndex + 1 ===
																			element.subMenu?.length
																				? ` ${styles['LastChild']}`
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
																					)
																						componentProps.onClickElement(
																							elementIndex,
																							subMenuElementIndex
																						);
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
																					)
																						componentProps.onClickElement(
																							elementIndex,
																							subMenuElementIndex
																						);
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

													<div
														className={styles['NavigationSubMenuListExpand']}
													>
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
													</div>
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
				</div>
			</div>
		</section>
	);
};

export default MobileMenu;
