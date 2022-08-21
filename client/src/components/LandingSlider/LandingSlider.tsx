import { useContext, useEffect, useRef, useState } from 'react';
import { IsMobileContext } from '../OrchiWebsite';

import { LandingSliderProps } from './ILandingSliderProps';

import styles from './LandingSlider.module.scss';

interface ITouchInput {
	start: { x: number; y: number };
	end: { x: number; y: number };
}

const DEFAULT_DESCRIPTION_TEXT_MAX_SCREEN_SIZE: number = 1285;
const DEFAULT_DESCRIPTION_TITLE_MAX_SCREEN_SIZE: number = 1285;
const DEFAULT_DESCRIPTION_TEXT_MIN_SCREEN_SIZE: number = 150;
const DEFAULT_DESCRIPTION_TITLE_MIN_SCREEN_SIZE: number = 475;

const DEFAULT_DESCRIPTION_TEXT_MAX_SIZE: number = 200;
const DEFAULT_DESCRIPTION_TITLE_MAX_SIZE: number = 20;
const DEFAULT_DESCRIPTION_TEXT_MIN_SIZE: number = 30;
const DEFAULT_DESCRIPTION_TITLE_MIN_SIZE: number = 10;

const DEFAULT_SWITCH_TIMER_DESKTOP: number = 13000;
const DEFAULT_SWITCH_TIMER_MOBILE: number = 12500;

const LandingSlider = (componentProps: LandingSliderProps): JSX.Element => {
	const [currentSlider, setCurrentSlider] = useState<number>(-1);

	const switchTimeout: React.MutableRefObject<NodeJS.Timeout | undefined> =
		useRef<NodeJS.Timeout>();
	const resizeTimeout: React.MutableRefObject<NodeJS.Timeout | undefined> =
		useRef<NodeJS.Timeout>();
	const touch = useRef<ITouchInput>({
		start: { x: 0, y: 0 },
		end: { x: 0, y: 0 },
	});

	const isMobile: boolean = useContext<boolean>(IsMobileContext);

	const getImagesWrapperRef = (): HTMLElement => {
		return document.querySelector(`#${styles['ImagesWrapper']}`) as HTMLElement;
	};

	const getForegroundImagesRef = (): HTMLElement[] => {
		const images: NodeListOf<Element> = document.querySelectorAll(
			`.${styles['ImageForegroundElementWrapper']}`
		);
		const elements: HTMLElement[] = [];

		images.forEach((image) => elements.push(image as HTMLElement));

		return elements;
	};

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
				if (getImagesWrapperRef()) {
					getForegroundImagesRef().forEach((image) => {
						if ((event.target as HTMLElement) === getImagesWrapperRef()) {
							const x: number =
								(document.documentElement.clientWidth - event.pageX) / 70;
							const y: number =
								(document.documentElement.clientHeight - event.pageY) / 70;

							image.style.transform = `translate(${x}px, ${y}px)`;
							image.style.transition = '';
						} else {
							image.style.transform = `translate(0px, 0px)`;
							image.style.transition = 'transform 1000ms ease-in-out';
						}
					});
				}
			}
		};

		const inRange = (x: number, min: number, max: number): number => {
			return Math.min(Math.max(x, min), max);
		};

		const resizeTextInRange = (): void => {
			let maxSize: number = 0;
			let maxTextSize: number = 0;
			let minSize: number = 0;
			let minTextSize: number = 0;

			let difW: number = 0;
			let difT: number = 0;
			let rapW: number = 0;
			let out: number = 0;
			let normalizedOut: number = 0;

			const currentDescriptionTexts: NodeListOf<Element> =
				document.querySelectorAll('.image-element-description-text');

			currentDescriptionTexts.forEach((text) => {
				maxSize = DEFAULT_DESCRIPTION_TEXT_MAX_SCREEN_SIZE;
				maxTextSize = DEFAULT_DESCRIPTION_TEXT_MAX_SIZE;
				minSize = DEFAULT_DESCRIPTION_TEXT_MIN_SCREEN_SIZE;
				minTextSize = DEFAULT_DESCRIPTION_TEXT_MIN_SIZE;

				difW = maxSize - minSize;
				difT = maxTextSize - minTextSize;
				rapW = document.documentElement.clientWidth - minSize;
				out = (difT / 100) * (rapW / (difW / 100)) + minTextSize;
				normalizedOut = inRange(out, minTextSize, maxTextSize);

				(text as HTMLElement).style.fontSize = `${normalizedOut}px`;
			});

			const currentDescriptionTitles: NodeListOf<Element> =
				document.querySelectorAll('.image-element-description-title');

			currentDescriptionTitles.forEach((text) => {
				maxSize = DEFAULT_DESCRIPTION_TITLE_MAX_SCREEN_SIZE;
				maxTextSize = DEFAULT_DESCRIPTION_TITLE_MAX_SIZE;
				minSize = DEFAULT_DESCRIPTION_TITLE_MIN_SCREEN_SIZE;
				minTextSize = DEFAULT_DESCRIPTION_TITLE_MIN_SIZE;

				difW = maxSize - minSize;
				difT = maxTextSize - minTextSize;
				rapW = document.documentElement.clientWidth - minSize;
				out = (difT / 100) * (rapW / (difW / 100)) + minTextSize;
				normalizedOut = inRange(out, minTextSize, maxTextSize);

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
	}, []);

	useEffect(() => {
		const resizeSlider = () => {
			if (getImagesWrapperRef()) {
				getImagesWrapperRef().style.transition = 'none';
				clearTimeout(resizeTimeout.current);
				resizeTimeout.current = setTimeout(() => {
					getImagesWrapperRef().style.transition = `left ${
						isMobile ? '500ms' : '1000ms'
					} ease-in-out`;
				}, 100);
			}
		};

		resizeSlider();

		window.addEventListener('resize', resizeSlider);

		return () => {
			window.removeEventListener('resize', resizeSlider);
		};
	}, [isMobile]);

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

		if (getImagesWrapperRef()) {
			getImagesWrapperRef().addEventListener('mousedown', mouseDown);
			getImagesWrapperRef().addEventListener('touchstart', touchStart);
			getImagesWrapperRef().addEventListener('mouseup', mouseUp);
			getImagesWrapperRef().addEventListener('touchend', touchEnd);
		}

		if (componentProps.sliders.length > 1) {
			clearTimeout(switchTimeout.current);
			switchTimeout.current = setTimeout(
				() => {
					const nextIndex: number =
						currentSlider !== componentProps.sliders.length - 1
							? currentSlider + 1
							: 0;

					setCurrentSlider(nextIndex);
				},
				isMobile ? DEFAULT_SWITCH_TIMER_MOBILE : DEFAULT_SWITCH_TIMER_DESKTOP
			);
		}

		return () => {
			if (getImagesWrapperRef()) {
				getImagesWrapperRef().removeEventListener('mousedown', mouseDown);
				getImagesWrapperRef().removeEventListener('touchstart', touchStart);
				getImagesWrapperRef().removeEventListener('mouseup', mouseUp);
				getImagesWrapperRef().removeEventListener('touchend', touchEnd);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSlider]);

	return (
		<div
			id={styles['SliderElement']}
			style={{
				height: `calc(100vh - ${componentProps.navbarHeight}px)`,
			}}
		>
			<div
				id={styles['ImagesWrapper']}
				style={{
					left: `-${currentSlider * 100}vw`,
					width: `${componentProps.sliders.length * 100}vw`,
				}}
			>
				{componentProps.sliders.map((slider, index) => {
					return (
						<div
							className={`${styles['ImageElementContainer']}${
								currentSlider === index ? ` ${styles['Active']}` : ''
							}`}
							key={`LandingImageElement${index}`}
						>
							<div
								className={styles['ImageBackgroundElement']}
								style={{
									backgroundImage: `url(data:image/png;base64,${slider.backgroundImage})`,
								}}
							/>

							<div
								className={styles['ImageColorElement']}
								style={{
									backgroundColor: slider.color,
								}}
							/>

							<div className={styles['ImageDescriptionElement']}>
								<h2 className="image-element-description-title">
									{slider.title.replace(/<nbs>/g, '\u00A0')}
								</h2>
								<p className="image-element-description-text">
									{slider.text.replace(/<nbs>/g, '\u00A0')}
								</p>
							</div>

							<div className={styles['ImageForegroundElementWrapper']}>
								<div
									className={styles['ImageForegroundElement']}
									style={{
										backgroundImage: `url(data:image/png;base64,${slider.foregroundImage})`,
									}}
								/>
							</div>
						</div>
					);
				})}
			</div>

			{!isMobile && (
				<div id={styles['AdvancePillsWrapper']}>
					{componentProps.sliders.map((_, index) => {
						return (
							<div
								className={`${styles['AdvancePillElement']}${
									currentSlider === index ? ` ${styles['Active']}` : ''
								}`}
								key={`LandingPill${index}`}
								onClick={setSlider(index)}
							>
								<div className={styles['AdvancePillElementText']}>
									{index + 1}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default LandingSlider;
