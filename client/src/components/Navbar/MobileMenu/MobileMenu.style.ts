import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.section`
	background-color: ${(props) => props.theme.dark};
	display: none;
	height: 100vh;
	left: -250px;
	padding: 7px;
	position: fixed;
	top: 0;
	transition: all 200ms linear;
	width: 250px;
	z-index: 99;

	@media (min-width: 320px) and (max-width: 767px) {
		display: block;
	}
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

const Row = styled.div`
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
	color: ${(props) => props.theme.textPrimary};
	display: block;
	font-size: 16px;
	margin-right: 40px;
	padding: 20px 0 5px;
	text-transform: uppercase;
	transition: all 200ms linear;

	&:hover {
		color: ${(props) => props.theme.textAccent};
	}
`;

const NavigationListElement = styled.li`
	display: inline-block;
	line-height: 1.2;
	position: relative;
	width: 100%;

	&.active {
		${NavigationListElementLink} {
			color: ${(props) => props.theme.textAccent};
		}
	}
`;

const NavigationSubMenuListExpand = styled.div`
	align-items: center;
	color: ${(props) => props.theme.textPrimary};
	cursor: pointer;
	display: flex;
	height: 19px;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 20px;
	width: 19px;

	&:hover {
		color: ${(props) => props.theme.textAccent};
	}
`;

const NavigationSubMenuList = styled.ul`
	background-color: ${(props) => props.theme.dark};
	cursor: default;
	display: block;
	height: auto;
	margin-left: 25px;
	max-height: 0;
	opacity: 0;
	overflow: hidden;
	pointer-events: none;
	transition: all 200ms linear;
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

	&.last-child {
		margin-bottom: 10px;
	}

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
	Row,
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
