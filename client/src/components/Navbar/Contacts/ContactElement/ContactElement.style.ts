import styled from 'styled-components';

const Element = styled.div`
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

const Title = styled.h4`
	color: ${(props) => props.theme.text.secondary};
	line-height: 1;
	margin-bottom: 7px;

	@media (min-width: 768px) and (max-width: 990px) {
		font-size: 12px;
	}
`;

const Info = styled.h1`
	line-height: 1;

	@media (min-width: 768px) and (max-width: 990px) {
		font-size: 1em;
	}
`;

export { Element, Title, Info };
