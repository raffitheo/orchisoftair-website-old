import styled from 'styled-components';

const Wrapper = styled.div<{ navbarHeight: number }>`
	height: calc(100vh - ${(props) => props.navbarHeight}px);
	margin-top: ${(props) => props.navbarHeight}px;
	position: relative;
	width: 100%;
`;

const ImagesWrapper = styled.div<{
	currentSlider: number;
	slidersLength: number;
}>`
	display: flex;
	flex-direction: row;
	height: 100%;
	left: -${(props) => props.currentSlider * 100}vw;
	position: absolute;
	transition: left 400ms ease-in-out 200ms;
	width: ${(props) => props.slidersLength * 100}vw;
`;

const AdvancePillsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	bottom: 20px;
	left: 50%;
	position: absolute;
	transform: translateX(-50%);
	z-index: 1000;

	&:before,
	&:after {
		border-top: 2px dotted ${(props) => props.theme.dark};
		content: '';
		height: 0;
		margin: auto;
		width: 163px;
	}
`;

const AdvancePillElement = styled.div<{ active?: boolean }>`
	border: 1px solid ${(props) => props.theme.dark};
	border-radius: 50%;
	color: ${(props) => props.theme.dark};
	cursor: pointer;
	display: flex;
	height: 30px;
	margin: auto;
	transition: all 200ms ease-in-out;
	width: 30px;

	&:hover,
	&.active {
		border: 2px solid ${(props) => props.theme.main};
		color: ${(props) => props.theme.main};
		height: 42px;
		width: 42px;

		p {
			font-size: 20px;
		}
	}

	p {
		margin: auto;
	}
`;

const ImageDescription = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	left: 50%;
	opacity: 0;
	padding: 25px 0;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	transition: opacity 0ms ease-in-out 600ms;
	z-index: 501;

	h2,
	p {
		color: white;
		display: -webkit-box;
		overflow: hidden;
		text-transform: uppercase;
		user-select: none;
		white-space: pre-line;
		-moz-user-select: none;
		-ms-user-select: none;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		-webkit-user-select: none;
	}

	h2 {
		font-size: 1.5em;
		letter-spacing: 20px;
		line-height: 2;
	}

	p {
		font-family: Anton;
		font-size: 200px;
		line-height: 1;
	}
`;

const ImageForegroundElement = styled.div<{ image: string }>`
	background-image: url(data:image/png;base64,${(props) => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: auto;
	min-height: 100%;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0ms ease-in-out 600ms;
	width: 100vw;
`;

const ImageElementContainer = styled.div`
	height: 100%;
	overflow: hidden;
	pointer-events: none;
	position: relative;
	width: 100vw;

	&.active {
		${ImageDescription}, ${ImageForegroundElement} {
			opacity: 1;
		}
		${ImageDescription} {
			transition: opacity 400ms ease-in-out 600ms;
		}
		${ImageForegroundElement} {
			transition: opacity 400ms ease-in-out 1000ms, transform 1000ms ease-in-out;
		}
	}
`;

const ImageBackgroundElement = styled.div<{ image: string }>`
	background-image: url(data:image/png;base64,${(props) => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: auto;
	left: 0;
	min-height: 100%;
	pointer-events: none;
	position: absolute;
	top: 0;
	width: 100vw;
	z-index: 498;
`;

const ImageElementColorPanel = styled.div<{ color: string }>`
	background-color: ${(props) => props.color};
	height: 300vh;
	left: 54%;
	pointer-events: none;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%) rotateZ(37.5deg);
	width: 58.5vh;
	z-index: 499;
`;

const ImageForegroundElementWrapper = styled.div`
	display: flex;
	height: 100%;
	left: 0;
	pointer-events: none;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 500;
`;

export {
	Wrapper,
	ImagesWrapper,
	AdvancePillsWrapper,
	AdvancePillElement,
	ImageDescription,
	ImageForegroundElement,
	ImageElementContainer,
	ImageBackgroundElement,
	ImageElementColorPanel,
	ImageForegroundElementWrapper,
};