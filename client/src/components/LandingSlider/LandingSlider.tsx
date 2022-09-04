import React, { useContext, useEffect, useRef, useState } from 'react';
import { IsMobileContext } from '../../pages/OrchiWebsite';

import LandingSliderProps from './ILandingSliderProps';

import styles from './LandingSlider.module.scss';

type TouchInput = {
    start: { x: number; y: number };
    end: { x: number; y: number };
};

const DEFAULT_DESCRIPTION_TEXT_MAX_SCREEN_SIZE = 1285;
const DEFAULT_DESCRIPTION_TITLE_MAX_SCREEN_SIZE = 1285;
const DEFAULT_DESCRIPTION_TEXT_MIN_SCREEN_SIZE = 150;
const DEFAULT_DESCRIPTION_TITLE_MIN_SCREEN_SIZE = 475;

const DEFAULT_DESCRIPTION_TEXT_MAX_SIZE = 200;
const DEFAULT_DESCRIPTION_TITLE_MAX_SIZE = 20;
const DEFAULT_DESCRIPTION_TEXT_MIN_SIZE = 30;
const DEFAULT_DESCRIPTION_TITLE_MIN_SIZE = 10;

const DEFAULT_SWITCH_TIMER_DESKTOP = 13000;
const DEFAULT_SWITCH_TIMER_MOBILE = 12500;

const LandingSlider = (componentProps: LandingSliderProps): JSX.Element => {
    const [currentSlider, setCurrentSlider] = useState<number>(-1);

    const imageElementDescriptionTexts = useRef<HTMLParagraphElement[]>([]);
    const imageElementDescriptionTitles = useRef<HTMLHeadingElement[]>([]);
    const imageForegroundElementWrappers = useRef<HTMLDivElement[]>([]);
    const imagesWrapper = useRef<HTMLDivElement>(null);
    const switchTimeout: React.MutableRefObject<NodeJS.Timeout | undefined> =
        useRef<NodeJS.Timeout>();
    const resizeTimeout: React.MutableRefObject<NodeJS.Timeout | undefined> =
        useRef<NodeJS.Timeout>();
    const touch = useRef<TouchInput>({
        start: { x: 0, y: 0 },
        end: { x: 0, y: 0 },
    });

    const isMobile: boolean = useContext<boolean>(IsMobileContext);

    const setSlider = (index: number): void => {
        if (currentSlider !== index) setCurrentSlider(index);
    };

    useEffect(() => {
        const imageParallax = (event: MouseEvent): void => {
            if (!window.matchMedia('(pointer: coarse)').matches) {
                if (
                    imagesWrapper &&
                    imagesWrapper.current &&
                    imageForegroundElementWrappers &&
                    imageForegroundElementWrappers.current
                ) {
                    imageForegroundElementWrappers.current.forEach((image) => {
                        if ((event.target as HTMLElement) === imagesWrapper.current) {
                            const x: number =
                                (document.documentElement.clientWidth - event.pageX) / 70;
                            const y: number =
                                (document.documentElement.clientHeight - event.pageY) / 70;

                            image.style.transform = `translate(${x}px, ${y}px)`;
                            image.style.transition = '';
                        } else {
                            image.style.transform = 'translate(0px, 0px)';
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
            let maxSize = 0;
            let maxTextSize = 0;
            let minSize = 0;
            let minTextSize = 0;

            let difW = 0;
            let difT = 0;
            let rapW = 0;
            let out = 0;
            let normalizedOut = 0;

            if (imageElementDescriptionTexts && imageElementDescriptionTexts.current) {
                imageElementDescriptionTexts.current.forEach((text) => {
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
            }

            if (imageElementDescriptionTitles && imageElementDescriptionTitles.current) {
                imageElementDescriptionTitles.current.forEach((text) => {
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
            }
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
            if (imagesWrapper && imagesWrapper.current) {
                imagesWrapper.current.style.transition = 'none';
                clearTimeout(resizeTimeout.current);
                resizeTimeout.current = setTimeout(() => {
                    if (imagesWrapper && imagesWrapper.current)
                        imagesWrapper.current.style.transition = `left ${
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
            console.log('Test');
            if (touch.current.end.x - touch.current.start.x < -50) {
                const prevIndex: number =
                    currentSlider !== 0 ? currentSlider - 1 : componentProps.sliders.length - 1;

                setCurrentSlider(prevIndex);
            }

            if (touch.current.end.x - touch.current.start.x > 50) {
                const nextIndex: number =
                    currentSlider !== componentProps.sliders.length - 1 ? currentSlider + 1 : 0;

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

        if (imagesWrapper && imagesWrapper.current) {
            imagesWrapper.current.addEventListener('mousedown', mouseDown);
            imagesWrapper.current.addEventListener('touchstart', touchStart);
            imagesWrapper.current.addEventListener('mouseup', mouseUp);
            imagesWrapper.current.addEventListener('touchend', touchEnd);
        }

        if (componentProps.sliders.length > 1) {
            clearTimeout(switchTimeout.current);
            switchTimeout.current = setTimeout(
                () => {
                    const nextIndex: number =
                        currentSlider !== componentProps.sliders.length - 1 ? currentSlider + 1 : 0;

                    setCurrentSlider(nextIndex);
                },
                isMobile ? DEFAULT_SWITCH_TIMER_MOBILE : DEFAULT_SWITCH_TIMER_DESKTOP,
            );
        }

        return () => {
            if (imagesWrapper && imagesWrapper.current) {
                imagesWrapper.current.removeEventListener('mousedown', mouseDown);
                imagesWrapper.current.removeEventListener('touchstart', touchStart);
                imagesWrapper.current.removeEventListener('mouseup', mouseUp);
                imagesWrapper.current.removeEventListener('touchend', touchEnd);
            }
        };
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
                ref={imagesWrapper}
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
                                <h2
                                    ref={(element) =>
                                        (imageElementDescriptionTitles.current[index] =
                                            element as HTMLHeadingElement)
                                    }
                                >
                                    {slider.title.replace(/<nbs>/g, '\u00A0')}
                                </h2>
                                <p
                                    ref={(element) =>
                                        (imageElementDescriptionTexts.current[index] =
                                            element as HTMLParagraphElement)
                                    }
                                >
                                    {slider.text.replace(/<nbs>/g, '\u00A0')}
                                </p>
                            </div>

                            <div
                                className={styles['ImageForegroundElementWrapper']}
                                ref={(element) =>
                                    (imageForegroundElementWrappers.current[index] =
                                        element as HTMLDivElement)
                                }
                            >
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
                                onClick={() => setSlider(index)}
                            >
                                <div className={styles['AdvancePillElementText']}>{index + 1}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default LandingSlider;
