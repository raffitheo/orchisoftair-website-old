import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const MobileWrapper = styled.section`
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

export const MobileContainer = styled.div`
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

export const MobileRow = styled.div`
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

export const MobileNavigationWrapper = styled.div`
	min-height: 1px;
	padding: 0 15px;
	position: relative;

	@media (min-width: 768px) {
		float: left;
		width: 75%;
	}
`;

export const MobileNavigationContainer = styled.div`
	display: block;
`;

export const MobileNavigationList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const MobileNavigationListElementLink = styled(Link)`
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

export const MobileNavigationListElement = styled.li`
	display: inline-block;
	line-height: 1.2;
	position: relative;
	width: 100%;

	&.active {
		${MobileNavigationListElementLink} {
			color: ${(props) => props.theme.textAccent};
		}
	}
`;

export const MobileNavigationSubMenuListExpand = styled.div`
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

export const MobileNavigationSubMenuList = styled.ul`
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

export const MobileNavigationSubMenuListElementLink = styled(Link)`
	color: ${(props) => props.theme.textPrimary};
	cursor: pointer;
	display: block;
	font-size: 16px;
	padding: 0;
	text-transform: uppercase;
	transition: all 200ms linear;
`;

export const MobileNavigationSubMenuListElement = styled.li`
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
		${MobileNavigationSubMenuListElementLink} {
			color: ${(props) => props.theme.textAccent};
		}
	}
`;
