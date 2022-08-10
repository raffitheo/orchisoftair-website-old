import styled from 'styled-components';

const Wrapper = styled.div`
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

const Container = styled.div`
	padding: 33px 0;
	text-align: right;

	@media (min-width: 320px) and (max-width: 767px) {
		padding: 0;
		position: absolute;
		right: 15px;
		text-align: right;
		top: -63px;
	}
`;

export { Wrapper, Container };
