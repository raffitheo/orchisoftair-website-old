import styled from 'styled-components';

const Wrapper = styled.div`
	min-height: 1px;
	padding: 0 15px;
	position: relative;

	@media (min-width: 768px) {
		float: left;
		width: 16.66666667%;
	}
	@media (min-width: 1200px) {
		float: left;
		width: 16.66666667%;
	}
`;

const Container = styled.div`
    height: 106px;
    width: 152px;

    @media (min-width: 320px) and (max-width: 767px) {
        height: auto;
        margin: auto;
        width: 80px;
    )
`;

const Image = styled.img`
	height: 100%;
	transition: all 200ms linear;
	width: auto;

	@media (min-width: 320px) and (max-width: 767px) {
		height: auto;
		width: 100%;
	}
`;

export { Wrapper, Container, Image };