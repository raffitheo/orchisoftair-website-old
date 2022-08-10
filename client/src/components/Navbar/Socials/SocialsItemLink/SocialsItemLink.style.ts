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
	transition: all 200ms linear;
	width: 40px;

	&:last-of-type {
		margin-right: 0;
	}

	&:hover {
		border-color: ${(props) => props.hovercolor};
		color: ${(props) => props.hovercolor};
	}
`;

export { Link };
