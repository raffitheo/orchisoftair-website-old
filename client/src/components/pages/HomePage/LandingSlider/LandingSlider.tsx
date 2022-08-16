import { useEffect, useRef, useState } from 'react';

import ILandingSliderProps from './ILandingSliderProps';

import {
	AdvancePillElement,
	AdvancePillsWrapper,
	ImageBackgroundElement,
	ImageDescription,
	ImageElementColorPanel,
	ImageElementContainer,
	ImageForegroundElement,
	ImageForegroundElementWrapper,
	ImagesWrapper,
	Wrapper,
} from './LandingSlider.style';

interface ITouchInput {
	start: { x: number; y: number };
	end: { x: number; y: number };
}

const LandingSlider = (componentProps: ILandingSliderProps): JSX.Element => {
	const [currentSlider, setCurrentSlider] = useState<number>(-1);

	const switchTimeout: React.MutableRefObject<NodeJS.Timeout | undefined> =
		useRef<NodeJS.Timeout>();
	const resizeTimeout: React.MutableRefObject<NodeJS.Timeout | undefined> =
		useRef<NodeJS.Timeout>();
	const touch = useRef<ITouchInput>({
		start: { x: 0, y: 0 },
		end: { x: 0, y: 0 },
	});

	const setSlider =
		(
			index: number
		): ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) =>
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
			if (currentSlider !== index) setCurrentSlider(index);
		};

	useEffect(() => {
		const imageParallax = (event: MouseEvent): void => {
			if (!window.matchMedia('(pointer: coarse)').matches) {
				const currentImages: NodeListOf<Element> = document.querySelectorAll(
					'.image-element-foreground'
				);

				currentImages.forEach((image) => {
					const imageElement: HTMLElement = image as HTMLElement;
					if ((event.target as HTMLElement).id === 'images-wrapper') {
						const x: number =
							(document.documentElement.clientWidth - event.pageX) / 70;
						const y: number =
							(document.documentElement.clientHeight - event.pageY) / 70;

						imageElement.style.transform = `translate(${x}px, ${y}px)`;
						imageElement.style.transition = '';
					} else {
						imageElement.style.transform = `translate(0px, 0px)`;
						imageElement.style.transition = 'transform 1000ms ease-in-out';
					}
				});
			}
		};

		const inRange = (x: number, min: number, max: number): number => {
			return Math.min(Math.max(x, min), max);
		};

		const resizeTextInRange = (): void => {
			const currentDescriptionTitles: NodeListOf<Element> =
				document.querySelectorAll('.image-element-description-title');

			let difW: number = 0;
			let difT: number = 0;
			let rapW: number = 0;
			let out: number = 0;
			let normalizedOut: number = 0;

			currentDescriptionTitles.forEach((text) => {
				difW = 1285 - 475;
				difT = 20 - 8;
				rapW = document.documentElement.clientWidth - 475;
				out = (difT / 100) * (rapW / (difW / 100)) + 8;
				normalizedOut = inRange(out, 8, 20);

				(text as HTMLElement).style.fontSize = `${normalizedOut}px`;
			});

			const currentDescriptionTexts: NodeListOf<Element> =
				document.querySelectorAll('.image-element-description-text');

			currentDescriptionTexts.forEach((text) => {
				difW = 1285 - 150;
				difT = 200 - 30;
				rapW = document.documentElement.clientWidth - 150;
				out = (difT / 100) * (rapW / (difW / 100)) + 30;
				normalizedOut = inRange(out, 30, 200);

				(text as HTMLElement).style.fontSize = `${normalizedOut}px`;
			});

			const imagesWrapper: HTMLElement = document.querySelector(
				'#images-wrapper'
			) as HTMLElement;

			imagesWrapper.style.transition = 'none';

			clearTimeout(resizeTimeout.current);
			resizeTimeout.current = setTimeout(() => {
				imagesWrapper.style.transition = 'left 400ms ease-in-out 200ms';
			}, 100);
		};

		setCurrentSlider(0);
		resizeTextInRange();

		window.addEventListener('mousemove', imageParallax);
		window.addEventListener('resize', resizeTextInRange);

		return () => {
			window.removeEventListener('mousemove', imageParallax);
			window.removeEventListener('resize', resizeTextInRange);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const swipeGesture = () => {
			if (touch.current.end.x - touch.current.start.x < -50) {
				const prevIndex: number =
					currentSlider !== 0
						? currentSlider - 1
						: componentProps.sliders.length - 1;

				setCurrentSlider(prevIndex);
			}

			if (touch.current.end.x - touch.current.start.x > 50) {
				const nextIndex: number =
					currentSlider !== componentProps.sliders.length - 1
						? currentSlider + 1
						: 0;

				setCurrentSlider(nextIndex);
			}
		};

		const mouseDown = (event: MouseEvent): void => {
			touch.current.start = {
				x: event.clientX,
				y: event.clientY,
			};
		};

		const touchStart = (event: TouchEvent): void => {
			touch.current.start = {
				x: event.changedTouches[0].clientX,
				y: event.changedTouches[0].clientY,
			};
		};

		const mouseUp = (event: MouseEvent): void => {
			touch.current.end = {
				x: event.clientX,
				y: event.clientY,
			};

			swipeGesture();
		};

		const touchEnd = (event: TouchEvent): void => {
			touch.current.end = {
				x: event.changedTouches[0].clientX,
				y: event.changedTouches[0].clientY,
			};

			swipeGesture();
		};

		const imagesWrapper: HTMLElement = document.querySelector(
			'#images-wrapper'
		) as HTMLElement;

		imagesWrapper.addEventListener('mousedown', mouseDown);
		imagesWrapper.addEventListener('touchstart', touchStart);
		imagesWrapper.addEventListener('mouseup', mouseUp);
		imagesWrapper.addEventListener('touchend', touchEnd);

		if (componentProps.sliders.length > 1) {
			clearTimeout(switchTimeout.current);
			switchTimeout.current = setTimeout(() => {
				const nextIndex: number =
					currentSlider !== componentProps.sliders.length - 1
						? currentSlider + 1
						: 0;

				setCurrentSlider(nextIndex);
			}, 5000);
		}

		return () => {
			imagesWrapper.removeEventListener('mousedown', mouseDown);
			imagesWrapper.removeEventListener('touchstart', touchStart);
			imagesWrapper.removeEventListener('mouseup', mouseUp);
			imagesWrapper.removeEventListener('touchend', touchEnd);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSlider]);

	return (
		<Wrapper navbarHeight={componentProps.navbarHeight}>
			<ImagesWrapper
				currentSlider={currentSlider}
				id="images-wrapper"
				slidersLength={componentProps.sliders.length}
			>
				{componentProps.sliders.map((slider, index) => {
					return (
						<ImageElementContainer
							className={currentSlider === index ? 'active' : ''}
							key={`LandingImageElement${index}`}
						>
							<ImageBackgroundElement image={slider.backgroundImage} />

							<ImageElementColorPanel color={slider.color} />
							<ImageDescription>
								<h2 className="image-element-description-title">
									{slider.title.replace(/<nbs>/g, '\u00A0')}
								</h2>
								<p className="image-element-description-text">
									{slider.text.replace(/<nbs>/g, '\u00A0')}
								</p>
							</ImageDescription>

							<ImageForegroundElementWrapper className="image-element-foreground">
								<ImageForegroundElement image={slider.foregroundImage} />
							</ImageForegroundElementWrapper>
						</ImageElementContainer>
					);
				})}
			</ImagesWrapper>

			<AdvancePillsWrapper
				style={{
					display: componentProps.isMobile ? 'none' : 'flex',
				}}
			>
				{componentProps.sliders.map((_, index) => {
					return (
						<AdvancePillElement
							className={currentSlider === index ? 'active' : ''}
							key={`LandingPill${index}`}
							onClick={setSlider(index)}
						>
							<p>{index + 1}</p>
						</AdvancePillElement>
					);
				})}
			</AdvancePillsWrapper>
		</Wrapper>
	);
};

export default LandingSlider;
