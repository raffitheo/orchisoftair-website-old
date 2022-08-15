import styled from 'styled-components';

const Element = styled.div`
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

const ElementTitle = styled.h4`
	color: ${(props) => props.theme.textAccent};
	line-height: 1;
	margin-bottom: 7px;

	@media (min-width: 768px) and (max-width: 990px) {
		font-size: 12px;
	}
`;

const ElementInfo = styled.h1`
	line-height: 1;

	@media (min-width: 768px) and (max-width: 990px) {
		font-size: 16px;
	}
`;

export { Element, ElementTitle, ElementInfo };