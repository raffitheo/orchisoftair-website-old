import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.section`
	background-color: ${(props) => props.theme.main};
	left: 0;
	padding: 7px 0 0 0;
	position: fixed;
	right: 0;
	transition: all 200ms linear;
	width: 100%;
	z-index: 99;
`;

const Container = styled.div`
	margin: 0 auto;
	padding: 0 15px;

	@media (min-width: 768px) {
		width: 750px;
	}
	@media (min-width: 992px) {
		width: 970px;
	}
	@media (min-width: 1200px) {
		width: 1170px;
	}

	&::before,
	&::after {
		content: ' ';
		display: table;
	}
	&::after {
		clear: both;
	}
`;

export const Row = styled.div`
	margin: 0 -15px;

	&::before,
	&::after {
		content: ' ';
		display: table;
	}
	&::after {
		clear: both;
	}
`;

const ContactsWrapper = styled.div`
	float: left;
	min-height: 1px;
	padding: 0 15px;
	position: relative;

	@media (min-width: 768px) {
		width: 58.33333333%;
	}
	@media (min-width: 1200px) {
		width: 66.6%;
	}
`;

const ContactsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 30px 0 22px;

	@media (min-width: 320px) and (max-width: 767px) {
		display: none;
	}
`;

const Contacts = styled.div`
	color: ${(props) => props.theme.textPrimary};
	display: inline-block;
	margin-right: 30px;
	padding-left: 30px;
	position: relative;
	text-align: left;
	text-transform: uppercase;

	&:last-of-type {
		margin-right: 0;
	}
`;

const ContactTitle = styled.h4`
	color: ${(props) => props.theme.textAccent};
	line-height: 1;
	margin-bottom: 7px;

	@media (min-width: 768px) and (max-width: 990px) {
		font-size: 12px;
	}
`;

const ContactInfo = styled.h1`
	line-height: 1;

	@media (min-width: 768px) and (max-width: 990px) {
		font-size: 16px;
	}
`;

const MobileHamburgerWrapper = styled.div`
	min-height: 1px;
	padding: 0 15px;
	position: relative;

	@media (min-width: 768px) {
		float: left;
		width: 25%;
	}
	@media (min-width: 1200px) {
		float: left;
		width: 16.66666667%;
	}
`;

const MobileHamburgerContainer = styled.div`
	display: none;
	padding: 33px 0;
	text-align: left;

	@media (min-width: 320px) and (max-width: 767px) {
		display: block;
		left: 15px;
		padding: 0;
		position: absolute;
		text-align: left;
		top: -63px;
	}
`;

const MobileHamburgerCheckbox = styled.input`
	cursor: pointer;
	display: block;
	height: 100%;
	opacity: 0;
	position: absolute;
	width: 100%;
	z-index: 2;
	-webkit-touch-callout: none;
`;

const MobileHamburgerLineContainer = styled.div`
	bottom: 0;
	height: 22px;
	left: 0;
	margin: auto;
	position: absolute;
	right: 0;
	top: 0;
	width: 32px;
`;

const MobileHamburgerLine = styled.span`
	background-color: ${(props) => props.theme.textAccent};
	border-radius: 2px;
	display: block;
	height: 3px;
	position: absolute;
	transition: all 200ms linear;
	width: 100%;

	&:nth-of-type(1) {
		top: 0;
	}
	&:nth-of-type(2) {
		bottom: 50%;
		top: 50%;
		transform: translateY(-50%);
	}
	&:nth-of-type(3) {
		bottom: 0;
	}
`;

const MobileHamburger = styled.div`
	cursor: pointer;
	height: 40px;
	position: relative;
	width: 40px;

	&.active,
	${MobileHamburgerCheckbox}:checked + ${MobileHamburgerLineContainer} {
		${MobileHamburgerLine} {
			&:nth-of-type(1) {
				top: 10px;
				transform: rotate(45deg);
			}
			&:nth-of-type(2) {
				opacity: 0;
			}
			&:nth-of-type(3) {
				bottom: 10px;
				transform: rotate(-45deg);
			}
		}
	}
`;

const NavigationWrapper = styled.div`
	min-height: 1px;
	padding: 0 15px;
	position: relative;

	@media (min-width: 768px) {
		float: left;
		width: 75%;
	}
`;

const NavigationContainer = styled.div`
	display: block;
`;

const NavigationList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const NavigationListElementLink = styled(Link)`
	color: ${(props) => props.theme.textPrimary};
	display: block;
	font-size: 16px;
	padding: 20px 0 22px;
	text-transform: uppercase;
	transition: all 200ms linear;
`;

const NavigationSubMenuList = styled.ul`
	background-color: ${(props) => props.theme.dark};
	border-radius: 2px;
	cursor: default;
	left: 50%;
	margin-left: -61px;
	opacity: 0;
	padding: 16px 0 16px 40px;
	position: absolute;
	top: 74px;
	transition: all 200ms linear;
	visibility: hidden;
	width: 250px;
	z-index: 9;
`;

const NavigationListElement = styled.li`
	display: inline-block;
	line-height: 1.2;
	margin-right: 78px;
	position: relative;

	&::before {
		background-color: ${(props) => props.theme.textAccent};
		border-radius: 2px;
		bottom: 0;
		content: '';
		height: 2px;
		left: 0;
		position: absolute;
		right: 0;
		transition: all 200ms linear;
		width: 0;
	}

	&.active {
		&::before {
			width: 100%;
		}
	}

	&:hover {
		${NavigationListElementLink} {
			color: ${(props) => props.theme.textAccent};
		}

		${NavigationSubMenuList} {
			opacity: 1;
			top: 61px;
			visibility: visible;
		}
	}

	@media (min-width: 991px) and (max-width: 1024px) {
		margin-right: 45px;
	}
	@media (min-width: 768px) and (max-width: 990px) {
		margin-right: 30px;
	}
`;

const NavigationSubMenuListElementLink = styled(Link)`
	color: ${(props) => props.theme.textPrimary};
	cursor: pointer;
	display: block;
	font-size: 16px;
	padding: 0;
	text-transform: uppercase;
	transition: all 200ms linear;
`;

const NavigationSubMenuListElement = styled.li`
	color: black;
	display: block;
	line-height: 1.2;
	margin: 21px 0;
	position: relative;

	&:hover,
	&.active {
		${NavigationSubMenuListElementLink} {
			color: ${(props) => props.theme.textAccent};
		}
	}
`;

export {
	Wrapper,
	Container,
	ContactsWrapper,
	ContactsContainer,
	Contacts,
	ContactTitle,
	ContactInfo,
	MobileHamburgerWrapper,
	MobileHamburgerContainer,
	MobileHamburgerCheckbox,
	MobileHamburgerLineContainer,
	MobileHamburgerLine,
	MobileHamburger,
	NavigationWrapper,
	NavigationContainer,
	NavigationList,
	NavigationListElementLink,
	NavigationSubMenuList,
	NavigationListElement,
	NavigationSubMenuListElementLink,
	NavigationSubMenuListElement,
};
