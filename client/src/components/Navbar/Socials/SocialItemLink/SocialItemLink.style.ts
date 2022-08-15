import styled from 'styled-components';

const Link = styled.a<{ hovercolor: string }>`
	align-items: center;
	border: 2px solid ${(props) => props.theme.textPrimary};
	border-radius: 50%;
	color: ${(props) => props.theme.textPrimary};
	display: inline-flex;
	height: 40px;
	justify-content: center;
	line-height: 1;
	margin-right: 10px;
	text-align: center;
	transition: background-color 200ms ease-in-out, border-color 200ms ease-in-out,
		color 400ms ease-in-out;
	width: 40px;

	&:last-of-type {
		margin-right: 0;
	}

	&:hover {
		background-color: ${(props) => props.hovercolor};
		border-color: ${(props) => props.hovercolor};
		color: white;
	}
`;

export { Link };
