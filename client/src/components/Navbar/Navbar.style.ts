import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.section`
	background-color: ${(props) => props.theme.main};
	left: 0;
	padding: 7px 0 0 0;
	position: absolute;
	right: 0;
	transition: left 200ms ease-in-out, right 200ms ease-in-out;
	top: 0;
	width: 100%;
	z-index: 1000;
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
	transition: all 200ms ease-in-out;
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
	transition: all 200ms ease-in-out;
`;

const NavigationSubMenuList = styled.ul`
	background-color: ${(props) => props.theme.dark};
	border-radius: 2px;
	cursor: default;
	margin-left: -61px;
	opacity: 0;
	padding: 16px 0 16px 40px;
	position: absolute;
	top: 61px;
	transition: all 200ms ease-in-out;
	visibility: hidden;
	width: 250px;
	z-index: 9;
`;

const NavigationListElement = styled.li`
	display: inline-block;
	line-height: 1.2;
	margin-right: 78px;
	position: relative;

	&:not(:last-child):after {
		background-color: ${(props) => props.theme.textAccent};
		border-radius: 50%;
		content: '';
		height: 5px;
		position: absolute;
		right: calc(-78px / 2);
		top: 50%;
		transform: translate(50%, -50%);
		width: 5px;
	}

	&:hover,
	&.active {
		${NavigationListElementLink} {
			color: ${(props) => props.theme.textAccent};
		}
	}

	&:hover {
		${NavigationSubMenuList} {
			opacity: 1;
			visibility: visible;
		}
	}

	@media (min-width: 991px) and (max-width: 1024px) {
		margin-right: 45px;

		&:not(:last-child):after {
			right: calc(-45px / 2);
		}
	}
	@media (min-width: 768px) and (max-width: 990px) {
		margin-right: 30px;

		&:not(:last-child):after {
			right: calc(-30px / 2);
		}
	}
`;

const NavigationSubMenuListElementLink = styled(Link)`
	color: ${(props) => props.theme.textPrimary};
	cursor: pointer;
	display: block;
	font-size: 16px;
	padding: 0;
	transition: all 200ms ease-in-out;
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
