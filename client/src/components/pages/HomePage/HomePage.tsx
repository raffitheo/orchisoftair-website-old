import { useEffect, useState } from 'react';

import IHomePageProps from './IHomePageProps';

import {
	LandingAdvancePillElement,
	LandingAdvancePillsWrapper,
	LandingImageDescription,
	LandingImagesWrapper,
	LandingWrapper,
	LandingImageElementContainer,
	LandingImageElementColorPanel,
	LandingImageBackgroundElement,
	LandingImageForegroundElement,
	LandingImageForegroundElementWrapper,
} from './HomePage.style';

const HomePage = (componentProps: IHomePageProps): JSX.Element => {
	const [currentSlider, setCurrentSlider] = useState<number>(-1);

	const setSlider =
		(
			index: number
		): ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) =>
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
			if (currentSlider !== index) setCurrentSlider(index);
		};

	useEffect(() => {
		const imageParallax = (event: any): void => {
			if (!window.matchMedia('(pointer: coarse)').matches) {
				const currentImages: NodeListOf<Element> = document.querySelectorAll(
					'.image-element-foreground'
				);

				currentImages.forEach((image) => {
					const imageElement: HTMLElement = image as HTMLElement;
					if (event.target.id === 'images-wrapper') {
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

			currentDescriptionTitles.forEach((text) => {
				const difW = 1285 - 475;
				const difT = 20 - 8;
				const rapW = document.documentElement.clientWidth - 475;
				const out = (difT / 100) * (rapW / (difW / 100)) + 8;
				const normalizedOut = inRange(out, 8, 20);
				(text as HTMLElement).style.fontSize = `${normalizedOut}px`;
			});

			const currentDescriptionTexts: NodeListOf<Element> =
				document.querySelectorAll('.image-element-description-text');

			currentDescriptionTexts.forEach((text) => {
				const difW = 1285 - 150;
				const difT = 200 - 30;
				const rapW = document.documentElement.clientWidth - 150;
				const out = (difT / 100) * (rapW / (difW / 100)) + 30;
				const normalizedOut = inRange(out, 30, 200);
				(text as HTMLElement).style.fontSize = `${normalizedOut}px`;
			});
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

	return (
		<>
			<LandingWrapper navbarHeight={componentProps.navbarHeight}>
				<LandingImagesWrapper
					currentSlider={currentSlider}
					id="images-wrapper"
					slidersLength={componentProps.sliders.length}
				>
					{componentProps.sliders.map((slider, index) => {
						return (
							<LandingImageElementContainer
								className={currentSlider === index ? 'active' : ''}
								key={`LandingImageElement${index}`}
							>
								<LandingImageBackgroundElement image={slider.backgroundImage} />

								<LandingImageElementColorPanel color={slider.color} />
								<LandingImageDescription>
									<h2 className="image-element-description-title">
										{slider.title.replace(/<nbs>/g, '\u00A0')}
									</h2>
									<p className="image-element-description-text">
										{slider.text.replace(/<nbs>/g, '\u00A0')}
									</p>
								</LandingImageDescription>

								<LandingImageForegroundElementWrapper className="image-element-foreground">
									<LandingImageForegroundElement
										image={slider.foregroundImage}
									/>
								</LandingImageForegroundElementWrapper>
							</LandingImageElementContainer>
						);
					})}
				</LandingImagesWrapper>

				<LandingAdvancePillsWrapper
					style={{
						display: componentProps.isMobile ? 'none' : 'flex',
					}}
				>
					{componentProps.sliders.map((_, index) => {
						return (
							<LandingAdvancePillElement
								className={currentSlider === index ? 'active' : ''}
								key={`LandingPill${index}`}
								onClick={setSlider(index)}
							>
								<p>{index + 1}</p>
							</LandingAdvancePillElement>
						);
					})}
				</LandingAdvancePillsWrapper>
			</LandingWrapper>

			<div style={{ height: '100vh' }} />
		</>
	);
};

export default HomePage;
