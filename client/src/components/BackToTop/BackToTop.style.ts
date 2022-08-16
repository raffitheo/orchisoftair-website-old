import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.dark};
	border-radius: 2px;
	bottom: 20px;
	cursor: pointer;
	display: flex;
	opacity: 0;
	padding: 10px;
	pointer-events: none;
	position: fixed;
	right: 20px;
	transition: opacity 400ms ease-in-out;
	z-index: 1000;

	&:hover {
		svg {
			stroke: ${(props) => props.theme.textAccent} !important;
		}
	}

	&.active {
		opacity: 1;
		pointer-events: all;
	}

	svg {
		stroke: ${(props) => props.theme.textPrimary} !important;
		transition: stroke 200ms ease-in-out;
	}
`;

export { Wrapper };
