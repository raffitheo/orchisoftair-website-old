import React, { useContext, useEffect, useState } from 'react';

import BackToTopProps from './IBackToTopProps';
import IconExtension from '../IconExtension/IconExtension';

import { ScrollSizeContext } from '../../pages/OrchiWebsite';

import styles from './BackToTop.module.scss';

const BackToTop = (componentProps: BackToTopProps) => {
    const [overrideVisible, setOverrideVisible] = useState<boolean>(true);
    const [visible, setVisible] = useState<boolean>(false);

    const scrollSize = useContext<number>(ScrollSizeContext);

    const backToTop = () => {
        const scrollTo = (offset: number, callback: () => void): void => {
            const fixedOffset = offset.toFixed();
            const onScroll = (): void => {
                if (window.pageYOffset.toFixed() === fixedOffset) {
                    window.removeEventListener('scroll', onScroll);
                    callback();
                }
            };

            window.addEventListener('scroll', onScroll);
            onScroll();
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        };

        setOverrideVisible(false);

        scrollTo(0, () => setOverrideVisible(true));
    };

    useEffect(() => {
        const handleVisibility = () => {
            if (overrideVisible) {
                if (scrollSize > componentProps.minVisibleSize) {
                    if (componentProps.maxVisibleSize) {
                        if (scrollSize < componentProps.maxVisibleSize) setVisible(true);
                        else setVisible(false);
                    } else setVisible(true);
                } else setVisible(false);
            } else setVisible(false);
        };

        handleVisibility();
    }, [overrideVisible, scrollSize]);

    return (
        <div
            className={`${styles['BackToTop']}${visible ? ` ${styles['Active']}` : ''}`}
            onClick={backToTop}
        >
            <IconExtension name='ChevronUp' size={35} />
        </div>
    );
};

export default BackToTop;
