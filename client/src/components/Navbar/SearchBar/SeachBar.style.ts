import styled from 'styled-components';

const SearchbarWrapper = styled.div`
	min-height: 1px;
	padding: 0 15px;
	position: relative;

	@media (min-width: 768px) {
		float: left;
		width: 25%;
	}
`;

const SearchbarContainer = styled.div`
	float: right;
	overflow: hidden;
	padding: 20px 0 19px;
	position: relative;
	text-align: right;
	width: 180px;
`;

const Form = styled.form`
	display: block;
	margin-top: 0em;
`;

const Input = styled.input`
	background-color: transparent;
	border: none;
	border-bottom: 1px solid ${(props) => props.theme.text.primary};
	color: ${(props) => props.theme.text.primary};
	visibility: hidden;
	margin-right: 20px;
	opacity: 0;
	position: relative;
	transition: all 200ms ease-in-out;
	width: 50%;
	-webkit-appearance: none;

	&::placeholder {
		color: ${(props) => props.theme.text.primary};
	}

	&.active {
		visibility: visible;
		opacity: 1;
		width: calc(100% - 20px);
	}
`;

const Button = styled.button`
	background-color: transparent;
	border: none;
	color: ${(props) => props.theme.text.primary};
	cursor: pointer;
	font-size: 19px;
	position: absolute;
	right: 0;
	top: 20px;
	transition: all 200ms ease-in-out;

	&:hover:not(.no-interaction),
	&.active:not(.no-interaction) {
		color: ${(props) => props.theme.text.secondary};
	}
`;

export { SearchbarWrapper, SearchbarContainer, Form, Input, Button };
