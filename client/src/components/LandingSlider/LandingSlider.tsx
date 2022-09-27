import React, { useContext, useEffect, useRef, useState } from 'react';
import { IsMobileContext, PageSizeContext } from '../../pages/OrchiWebsite';

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

const DEFAULT_REST_IMAGE_POSITION_ON_LEAVE = true;

const LandingSlider = (componentProps: LandingSliderProps) => {
    const [currentSlider, setCurrentSlider] = useState<number>(-1);
    const [overImages, setOverImages] = useState<boolean>(false);

    const imageElementDescriptionTexts = useRef<HTMLParagraphElement[]>([]);
    const imageElementDescriptionTitles = useRef<HTMLHeadingElement[]>([]);
    const imageForegroundElementWrappers = useRef<HTMLDivElement[]>([]);
    const imagesWrapper = useRef<HTMLDivElement>(null);
    const switchTimeout = useRef<NodeJS.Timeout>();
    const resizeTimeout = useRef<NodeJS.Timeout>();
    const touch = useRef<TouchInput>({
        start: { x: 0, y: 0 },
        end: { x: 0, y: 0 },
    });

    const isMobile = useContext<boolean>(IsMobileContext);
    const pageSize = useContext<number>(PageSizeContext);

    const setSlider = (index: number) => {
        if (currentSlider !== index) setCurrentSlider(index);
    };

    useEffect(() => setCurrentSlider(0), []);

    useEffect(() => {
        const mouseEnter = () => setOverImages(true);
        const mouseLeave = () => {
            setOverImages(false);

            if (DEFAULT_REST_IMAGE_POSITION_ON_LEAVE) {
                if (!window.matchMedia('(pointer: coarse)').matches) {
                    if (imageForegroundElementWrappers && imageForegroundElementWrappers.current) {
                        imageForegroundElementWrappers.current.forEach((image) => {
                            image.style.transform = 'translate(0px, 0px)';
                            image.style.transition = 'transform 1000ms ease-in-out';
                        });
                    }
                }
            }
        };

        const imageParallax = (event: MouseEvent): void => {
            if (!window.matchMedia('(pointer: coarse)').matches) {
                if (imageForegroundElementWrappers && imageForegroundElementWrappers.current) {
                    imageForegroundElementWrappers.current.forEach((image) => {
                        if (overImages) {
                            const x: number =
                                (document.documentElement.clientWidth - event.pageX) / 70;
                            const y: number =
                                (document.documentElement.clientHeight - event.pageY) / 70;

                            image.style.transform = `translate(${x}px, ${y}px)`;
                            image.style.transition = '';
                        }
                    });
                }
            }
        };

        if (imagesWrapper && imagesWrapper.current) {
            imagesWrapper.current.addEventListener('mouseenter', mouseEnter);
            imagesWrapper.current.addEventListener('mousemove', imageParallax);
            imagesWrapper.current.addEventListener('mouseleave', mouseLeave);
        }

        return () => {
            if (imagesWrapper && imagesWrapper.current) {
                imagesWrapper.current.removeEventListener('mouseenter', mouseEnter);
                imagesWrapper.current.removeEventListener('mousemove', imageParallax);
                imagesWrapper.current.removeEventListener('mouseleave', mouseLeave);
            }
        };
    }, [overImages]);

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

        const inRange = (x: number, min: number, max: number) => Math.min(Math.max(x, min), max);

        const resizeTextInRange = () => {
            let maxSize = 0;
            let maxElementSize = 0;
            let minSize = 0;
            let minElementSize = 0;

            let difW = 0;
            let difT = 0;
            let rapW = 0;
            let out = 0;
            let normalizedOut = 0;

            if (imageElementDescriptionTexts && imageElementDescriptionTexts.current) {
                imageElementDescriptionTexts.current.forEach((text) => {
                    maxSize = DEFAULT_DESCRIPTION_TEXT_MAX_SCREEN_SIZE;
                    maxElementSize = DEFAULT_DESCRIPTION_TEXT_MAX_SIZE;
                    minSize = DEFAULT_DESCRIPTION_TEXT_MIN_SCREEN_SIZE;
                    minElementSize = DEFAULT_DESCRIPTION_TEXT_MIN_SIZE;

                    difW = maxSize - minSize;
                    difT = maxElementSize - minElementSize;
                    rapW = document.documentElement.clientWidth - minSize;
                    out = (difT / 100) * (rapW / (difW / 100)) + minElementSize;
                    normalizedOut = inRange(out, minElementSize, maxElementSize);

                    if (text) (text as HTMLElement).style.fontSize = `${normalizedOut}px`;
                });
            }

            if (imageElementDescriptionTitles && imageElementDescriptionTitles.current) {
                imageElementDescriptionTitles.current.forEach((text) => {
                    maxSize = DEFAULT_DESCRIPTION_TITLE_MAX_SCREEN_SIZE;
                    maxElementSize = DEFAULT_DESCRIPTION_TITLE_MAX_SIZE;
                    minSize = DEFAULT_DESCRIPTION_TITLE_MIN_SCREEN_SIZE;
                    minElementSize = DEFAULT_DESCRIPTION_TITLE_MIN_SIZE;

                    difW = maxSize - minSize;
                    difT = maxElementSize - minElementSize;
                    rapW = document.documentElement.clientWidth - minSize;
                    out = (difT / 100) * (rapW / (difW / 100)) + minElementSize;
                    normalizedOut = inRange(out, minElementSize, maxElementSize);

                    if (text) (text as HTMLElement).style.fontSize = `${normalizedOut}px`;
                });
            }
        };

        resizeSlider();
        resizeTextInRange();
    }, [isMobile, pageSize]);

    useEffect(() => {
        const swipeGesture = () => {
            if (touch.current.end.x - touch.current.start.x < -50) {
                const prevIndex =
                    currentSlider !== 0 ? currentSlider - 1 : componentProps.sliders.length - 1;

                setCurrentSlider(prevIndex);
            }

            if (touch.current.end.x - touch.current.start.x > 50) {
                const nextIndex =
                    currentSlider !== componentProps.sliders.length - 1 ? currentSlider + 1 : 0;

                setCurrentSlider(nextIndex);
            }
        };

        const mouseDown = (event: MouseEvent) => {
            touch.current.start = {
                x: event.clientX,
                y: event.clientY,
            };
        };

        const touchStart = (event: TouchEvent) => {
            touch.current.start = {
                x: event.changedTouches[0].clientX,
                y: event.changedTouches[0].clientY,
            };
        };

        const mouseUp = (event: MouseEvent) => {
            touch.current.end = {
                x: event.clientX,
                y: event.clientY,
            };

            swipeGesture();
        };

        const touchEnd = (event: TouchEvent) => {
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
                    const nextIndex =
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
        <div id={styles['SliderElementWrapper']}>
            <div id={styles['SliderElementContainer']}>
                <div
                    id={styles['ImagesWrapper']}
                    ref={imagesWrapper}
                    style={{
                        left: `-${currentSlider * 100}vw`,
                        width: `${componentProps.sliders.length * 100}vw`,
                    }}
                >
                    {componentProps.sliders.map((slider, index) => (
                        <div
                            className={`${styles['ImageElementContainer']}${
                                currentSlider === index ? ` ${styles['Active']}` : ''
                            }`}
                            key={`LandingImageElement${index}`}
                        >
                            <img
                                className={styles['ImageBackgroundElement']}
                                height='auto'
                                src={`data:image/png;base64,${slider.backgroundImage}`}
                                width='100%'
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
                                <img
                                    className={styles['ImageForegroundElement']}
                                    height='auto'
                                    src={`data:image/png;base64,${slider.foregroundImage}`}
                                    width='100%'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {!isMobile && (
                <div id={styles['AdvancePillsWrapper']}>
                    {componentProps.sliders.map((_, index) => (
                        <div
                            className={`${styles['AdvancePillElement']}${
                                currentSlider === index ? ` ${styles['Active']}` : ''
                            }`}
                            key={`LandingPill${index}`}
                            onClick={() => setSlider(index)}
                        >
                            <div className={styles['AdvancePillElementText']}>{index + 1}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LandingSlider;
