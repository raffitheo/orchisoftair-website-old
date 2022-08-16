import { Link } from 'react-router-dom';

import styled from 'styled-components';

const MobileMenuWrapper = styled.section`
	background-color: ${(props) => props.theme.color.secondary};
	display: none;
	height: 100vh;
	left: -250px;
	padding: 7px;
	position: fixed;
	top: 0;
	transition: all 200ms ease-in-out;
	width: 250px;
	z-index: 99;

	@media (min-width: 320px) and (max-width: 767px) {
		display: block;
	}
`;

const MobileMenuContainer = styled.div`
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

const MobileMenuRow = styled.div`
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
	display: block;
	margin-right: 40px;
	padding: 20px 0 5px;
	transition: all 200ms ease-in-out;

	&:hover {
		color: ${(props) => props.theme.text.secondary};
	}
`;

const NavigationListElement = styled.li`
	display: inline-block;
	line-height: 1.2;
	position: relative;
	width: 100%;

	&.active {
		${NavigationListElementLink} {
			color: ${(props) => props.theme.text.secondary};
		}
	}
`;

const NavigationSubMenuListExpand = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
	height: 19px;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 20px;
	width: 19px;

	&:hover {
		color: ${(props) => props.theme.text.secondary};
	}
`;

const NavigationSubMenuList = styled.ul`
	background-color: ${(props) => props.theme.color.secondary};
	cursor: default;
	display: block;
	height: auto;
	margin-left: 25px;
	max-height: 0;
	opacity: 0;
	overflow: hidden;
	pointer-events: none;
	transition: all 200ms ease-in-out;
	visibility: hidden;
	z-index: 9;

	&.visible {
		max-height: 100vh;
		opacity: 1;
		pointer-events: auto;
		visibility: visible;
	}
`;

const NavigationSubMenuListElementLink = styled(Link)`
	cursor: pointer;
	display: block;
	padding: 0;
	transition: all 200ms ease-in-out;
`;

const NavigationSubMenuListElement = styled.li`
	color: black;
	display: block;
	line-height: 1.2;
	margin: 21px 0;
	position: relative;

	&.last-child {
		margin-bottom: 10px;
	}

	&:hover,
	&.active {
		${NavigationSubMenuListElementLink} {
			color: ${(props) => props.theme.text.secondary};
		}
	}
`;

export {
	MobileMenuWrapper,
	MobileMenuContainer,
	MobileMenuRow,
	NavigationWrapper,
	NavigationContainer,
	NavigationList,
	NavigationListElementLink,
	NavigationListElement,
	NavigationSubMenuListExpand,
	NavigationSubMenuList,
	NavigationSubMenuListElementLink,
	NavigationSubMenuListElement,
};
